from django.urls import path , re_path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CustomProviderAuthView,
    CustomTokenObtainPairView,
    CustomTokenRefreshView,
    CustomTokenVerifyView,
    LogoutView,
    ShopProfileViewSet,
    ShopProductsAPIView
)
router = DefaultRouter()
router.register(r'shop-profiles', ShopProfileViewSet, basename='shop-profiles')


urlpatterns = [
    re_path(
        r'^o/(?P<provider>\S+)/$',
        CustomProviderAuthView.as_view(),
        name='provider-auth'
    ),
    path('', include(router.urls)),
    path('jwt/create/', CustomTokenObtainPairView.as_view()),
    path('jwt/refresh/', CustomTokenRefreshView.as_view()),
    path('jwt/verify/', CustomTokenVerifyView.as_view()),
    path('logout/', LogoutView.as_view()),

    path('shop-profiles/<int:pk>/products/', ShopProductsAPIView.as_view(), name='shop-profile-products'),
]