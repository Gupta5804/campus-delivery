from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from users.models import ShopProfile

class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request, *args, **kwargs): #/api/products GET
        user = self.request.user
        print(user.user_type)
        if user.user_type == 'shop':
            shop_profile = ShopProfile.objects.get(user=user)
            queryset = Product.objects.filter(shop=shop_profile)
            serializer = ProductSerializer(queryset, many=True)
            return Response(serializer.data)
        else:
            return super().list(request, *args, **kwargs)

    def retrieve(self, request, *args, **kwargs):  #/api/products/{product_id} GET
        user = self.request.user
        if user.user_type == 'shop':
            shop_profile = ShopProfile.objects.get(user=user)
            queryset = Product.objects.filter(shop=shop_profile)
            instance = self.get_object()
            if instance in queryset:
                serializer = self.get_serializer(instance)
                return Response(serializer.data)
            else:
                return Response({'detail': 'Not found.'}, status=404)
        else:
            return super().retrieve(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):    #/api/products POST
        user = self.request.user
        if user.user_type == 'shop':
            shop_profile = ShopProfile.objects.get(user=user)
            request.data['shop'] = shop_profile.id
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):  #/api/products/{product_id} PUT
        user = self.request.user
        if user.user_type == 'shop':
            shop_profile = ShopProfile.objects.get(user=user)
            instance = self.get_object()
            if instance.shop == shop_profile:
                serializer = self.get_serializer(instance, data=request.data, partial=True)
                serializer.is_valid(raise_exception=True)
                serializer.save()
                return Response(serializer.data)
            else:
                return Response({'detail': 'Not found.'}, status=404)
        else:
            return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):    #/api/products/{product_id} DELETE
        user = self.request.user
        if user.user_type == 'shop':
            shop_profile = ShopProfile.objects.get(user=user)
            instance = self.get_object()
            if instance.shop == shop_profile:
                self.perform_destroy(instance)
                return Response(status=204)
            else:
                return Response({'detail': 'Not found.'}, status=404)
        else:
            return super().destroy(request, *args, **kwargs)

class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    permission_classes = [permissions.IsAuthenticated]

