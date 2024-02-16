from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import CustomUser, ShopProfile
from django.utils.translation import gettext_lazy as _

class CustomUserAdmin(BaseUserAdmin):
    model = CustomUser
    list_display = ['email', 'user_type', 'is_active', 'is_staff']
    ordering = ('email', 'user_type', 'is_active', 'is_staff')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal Info'), {'fields': ('first_name', 'last_name', 'address', 'dob', 'user_type', 'contact_no', 'alternative_no',)}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login',)}),
    )
    search_fields = ['email', 'first_name', 'last_name']
    list_filter = ['user_type', 'is_active', 'is_staff']
    exclude = ('username',)  # Exclude the 'username' field

    # Explicitly set the fieldsets for add and change forms
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )
    # Explicitly set the fields for the change form
    # Note: 'email' replaces 'username' here
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal Info'), {'fields': ('first_name', 'last_name', 'address', 'dob', 'user_type', 'contact_no', 'alternative_no',)}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login',)}),
    )

admin.site.register(CustomUser, CustomUserAdmin)

class ShopProfileAdmin(admin.ModelAdmin):
    model = ShopProfile
    list_display = [
        'user', 'shop_name', 'shop_description', 'address', 'about_shop', 'contact_no',
        'is_open', 'delivery_charges', 'extra_charges'
    ]
    ordering = ('user__email', 'shop_name', 'contact_no', 'address', 'is_open')
    search_fields = ['user__email', 'shop_name', 'address']
    list_filter = ['is_open']

admin.site.register(ShopProfile, ShopProfileAdmin)
