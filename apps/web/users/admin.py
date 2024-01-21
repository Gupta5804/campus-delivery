from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, CustomerProfile, ShopProfile

class CustomerProfileInline(admin.StackedInline):
    model = CustomerProfile
    can_delete = False
    verbose_name_plural = 'Customer Profile'

class ShopProfileInline(admin.StackedInline):
    model = ShopProfile
    can_delete = False
    verbose_name_plural = 'Shop Profile'

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['email', 'is_staff', 'is_active','user_type']
    ordering = ('email','is_staff','is_active','user_type')
    search_fields = ['email']
    fieldsets = (
        (None, {'fields': ('email', 'password','user_type')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_active', 'is_staff', 'is_superuser')}
        ),
    )
    inlines = [CustomerProfileInline, ShopProfileInline]

admin.site.register(CustomUser, CustomUserAdmin)
