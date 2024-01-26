from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, ShopProfile
from django.utils.translation import gettext_lazy as _

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['email', 'user_type', 'is_active', 'is_staff']
    ordering = ('email', 'user_type', 'is_active', 'is_staff')
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        (_('Personal Info'), {'fields': ('email','first_name','last_name', 'address', 'dob','user_type', 'contact_no', 'alternative_no')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)

class ShopProfileAdmin(admin.ModelAdmin):
    model = ShopProfile
    list_display = ['user', 'shop_name', 'contact_no', 'address', 'is_open']
    ordering = ('user', 'shop_name', 'contact_no', 'address', 'is_open')

admin.site.register(ShopProfile, ShopProfileAdmin)