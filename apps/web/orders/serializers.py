from rest_framework import serializers
from .models import Order, OrderDetails

class OrderDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderDetails
        fields = ['product', 'quantity', 'subtotal']

class OrderSerializer(serializers.ModelSerializer):
    order_details = OrderDetailsSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'user', 'shop', 'order_date', 'total_amount', 'status', 'order_details']
        read_only_fields = ['id', 'user', 'shop', 'order_date', 'total_amount', 'status', 'order_details']
