from django.conf import settings
from .models import ShopProfile
from .serializers import ShopProfileSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets, permissions
from rest_framework import status
from djoser.social.views import ProviderAuthView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

from rest_framework.generics import ListAPIView
from products.models import Product  # Assuming you have a Product model

from products.serializers import ProductSerializer

class ShopProductsAPIView(ListAPIView):
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Get the ShopProfile ID from the URL parameters
        shop_profile_id = self.kwargs.get('pk')

        # Query the products related to the specified ShopProfile
        return Product.objects.filter(shop__id=shop_profile_id)

class ShopProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ShopProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):  # /shop-profiles GET
        user = self.request.user
        if user.user_type == 'customer':
            # For customers, return all shops
            return ShopProfile.objects.all()
        elif user.user_type == 'shop':
            # For shop users, return only their own shop
            return ShopProfile.objects.filter(user=user)
        else:
            return ShopProfile.objects.none()

    def create(self, request, *args, **kwargs): #/shop-profiles POST
        user = self.request.user
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        if user.user_type == 'customer':
            # Customers should not be allowed to create shops
            return Response({'detail': 'Not allowed for customer users.'}, status=403)

        serializer.save(user=user)
        return Response(serializer.data, status=201) 

    def update(self, request, *args, **kwargs): #/shop-profiles PUT
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)

        user = self.request.user
        if user.user_type == 'customer':
            # Customers should not be allowed to update shops
            return Response({'detail': 'Not allowed for customer users.'}, status=403)

        serializer.save()
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        user = self.request.user

        if user.user_type == 'customer':
            # Customers should not be allowed to delete shops
            return Response({'detail': 'Not allowed for customer users.'}, status=403)

        self.perform_destroy(instance)
        return Response(status=204)
    
class CustomProviderAuthView(ProviderAuthView):
    def post(self,request,*args,**kwargs):
        response = super().post(request,*args,**kwargs)

        if response.status_code == 200:
            access_token = response.data.get('access')
            refresh_token = response.data.get('refresh')

            response.set_cookie(
                'access',
                access_token,
                max_age=settings.AUTH_COOKIE_ACCESS_MAX_AGE,
                path=settings.AUTH_COOKIE_PATH,
                secure=settings.AUTH_COOKIE_SECURE,
                httponly=settings.AUTH_COOKIE_HTTP_ONLY,
                samesite=settings.AUTH_COOKIE_SAMESITE
            )
            response.set_cookie(
                'refresh',
                refresh_token,
                max_age=settings.AUTH_COOKIE_REFRESH_MAX_AGE,
                path=settings.AUTH_COOKIE_PATH,
                secure=settings.AUTH_COOKIE_SECURE,
                httponly=settings.AUTH_COOKIE_HTTP_ONLY,
                samesite=settings.AUTH_COOKIE_SAMESITE
            )
        return response
class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self,request,*args,**kwargs):
        response = super().post(request,*args,**kwargs)
        if response.status_code == 200:
            access_token = response.data.get('access')
            refresh_token = response.data.get('refresh')

            response.set_cookie(
                'access',
                access_token,
                max_age=settings.AUTH_COOKIE_ACCESS_MAX_AGE,
                path=settings.AUTH_COOKIE_PATH,
                secure=settings.AUTH_COOKIE_SECURE,
                httponly=settings.AUTH_COOKIE_HTTP_ONLY,
                samesite=settings.AUTH_COOKIE_SAMESITE
            )
            response.set_cookie(
                'refresh',
                refresh_token,
                max_age=settings.AUTH_COOKIE_REFRESH_MAX_AGE,
                path=settings.AUTH_COOKIE_PATH,
                secure=settings.AUTH_COOKIE_SECURE,
                httponly=settings.AUTH_COOKIE_HTTP_ONLY,
                samesite=settings.AUTH_COOKIE_SAMESITE
            )
        return response

class CustomTokenRefreshView(TokenRefreshView):
    def post(self,request,*args,**kwargs):
       refresh_token=request.COOKIES.get('refresh')
       
       if refresh_token:
            request.data['refresh'] = refresh_token
        
       response = super().post(request,*args,**kwargs)
       if response.status_code == 200:
            access_token = response.data.get('access')
            response.set_cookie(
                'access',
                access_token,
                max_age=settings.AUTH_COOKIE_ACCESS_MAX_AGE,
                path=settings.AUTH_COOKIE_PATH,
                secure=settings.AUTH_COOKIE_SECURE,
                httponly=settings.AUTH_COOKIE_HTTP_ONLY,
                samesite=settings.AUTH_COOKIE_SAMESITE
            )
       
       return response    
class CustomTokenVerifyView(TokenVerifyView):
    def post(self,request,*args,**kwargs):
        access_token = request.COOKIES.get('access')

        if access_token:
            request.data['token'] = access_token
        return super().post(request,*args,**kwargs)

class LogoutView(APIView):
    def post(self,request,*args,**kwargs):
        response = Response(status=status.HTTP_204_NO_CONTENT)
        response.delete_cookie('access')
        response.delete_cookie('refresh')
        return response