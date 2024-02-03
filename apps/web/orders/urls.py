from django.urls import path
from .views import (
    OrderListView, OrderDetailView,
    confirm_order_view, cancel_order_view,
)

app_name = 'orders'

urlpatterns = [
    path('orders/', OrderListView.as_view(), name='order-list'),
    path('orders/<int:pk>/', OrderDetailView.as_view(), name='order-detail'),
    path('orders/<int:shop_id>/<int:order_id>/confirm/', confirm_order_view, name='confirm-order'),
    path('orders/<int:shop_id>/<int:order_id>/cancel/', cancel_order_view, name='cancel-order'),
    
]
