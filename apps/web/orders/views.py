from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Order
from .serializers import OrderSerializer

class OrderListView(generics.ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderDetailView(generics.RetrieveAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def confirm_order_view(request, shop_id, order_id):
    # Add logic to confirm an order
    return Response({"message": "Order confirmed successfully."}, status=status.HTTP_200_OK)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def cancel_order_view(request, shop_id, order_id):
    # Add logic to cancel an order
    return Response({"message": "Order canceled successfully."}, status=status.HTTP_200_OK)
