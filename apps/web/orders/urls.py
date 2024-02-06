from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OrderViewSet, OrderDetailsViewSet

router = DefaultRouter()
router.register(r'orders', OrderViewSet, basename='order')
router.register(r'orders/(?P<order_id>\d+)/order-details', OrderDetailsViewSet, basename='order-details')


urlpatterns = [
    path('', include(router.urls)),
]
