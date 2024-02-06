from rest_framework import serializers
from .models import Order, OrderDetails
from products.serializers import ProductSerializer
from users.serializers import CustomUserSerializer, ShopProfileSerializer

class OrderDetailsSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = OrderDetails
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    order_details = OrderDetailsSerializer(many=True, read_only=True)
    user = CustomUserSerializer(read_only=True)
    shop = ShopProfileSerializer(read_only=True)

    class Meta:
        model = Order
        fields = '__all__'

    def create(self, validated_data):
        order_details_data = validated_data.pop('order_details')
        order = Order.objects.create(**validated_data)
        for order_detail_data in order_details_data:
            OrderDetails.objects.create(order=order, **order_detail_data)
        return order
