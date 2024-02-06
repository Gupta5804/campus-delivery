from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .models import Order, OrderDetails
from .serializers import OrderSerializer, OrderDetailsSerializer
from users.models import ShopProfile

class OrderViewSet(viewsets.ModelViewSet):  #/api/orders/
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):  
        user = self.request.user
        if user.user_type == 'customer':
            return Order.objects.filter(user=user)
        elif user.user_type == 'shop':
            shop_profile = ShopProfile.objects.get(user=user)
            return Order.objects.filter(shop=shop_profile)
        else:
            return Order.objects.none()

    def retrieve(self, request, *args, **kwargs):   
        instance = self.get_object()
        user = self.request.user
        if user.user_type == 'customer' and instance.user != user:
            return Response({'detail': 'Not found.'}, status=404)
        elif user.user_type == 'shop' and instance.shop.user != user:
            return Response({'detail': 'Not found.'}, status=404)
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        user = self.request.user
        if user.user_type == 'customer':
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save(user=user)
            return Response(serializer.data, status=201)
        else:
            return Response({'detail': 'Not allowed for shop users.'}, status=403)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        user = self.request.user
        if user.user_type == 'customer' and instance.user != user:
            return Response({'detail': 'Not found.'}, status=404)
        elif user.user_type == 'shop' and instance.shop.user != user:
            return Response({'detail': 'Not found.'}, status=404)
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        user = self.request.user
        if user.user_type == 'customer' and instance.user != user:
            return Response({'detail': 'Not found.'}, status=404)
        elif user.user_type == 'shop' and instance.shop.user != user:
            return Response({'detail': 'Not found.'}, status=404)
        self.perform_destroy(instance)
        return Response(status=204)

class OrderDetailsViewSet(viewsets.ModelViewSet):
    serializer_class = OrderDetailsSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        order_id = self.kwargs.get('order_id')
        if order_id:
            return OrderDetails.objects.filter(order_id=order_id)
        else:
            return OrderDetails.objects.all()

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        order_id = self.kwargs.get('order_id')
        try:
            order = Order.objects.get(id=order_id)
        except Order.DoesNotExist:
            return Response({'detail': 'Order not found.'}, status=404)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(order=order)
        return Response(serializer.data, status=201)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=204)
