from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, ShopProfile

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['email', 'user_type', 'is_staff']
    ordering = ('email', 'user_type', 'is_staff')

admin.site.register(CustomUser, CustomUserAdmin)

class ShopProfileAdmin(admin.ModelAdmin):
    model = ShopProfile
    list_display = ['user', 'shop_name', 'contact_no', 'address', 'is_open']
    ordering = ('user', 'shop_name', 'contact_no', 'address', 'is_open')

admin.site.register(ShopProfile, ShopProfileAdmin)