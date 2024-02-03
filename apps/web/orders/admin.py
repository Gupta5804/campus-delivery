from django.contrib import admin
from .models import Order, OrderDetails

class OrderDetailsInline(admin.TabularInline):
    model = OrderDetails
    extra = 1

class OrderAdmin(admin.ModelAdmin):
    model = Order
    list_display = ['id', 'user', 'shop', 'order_date', 'status', 'tracking_status']
    list_filter = ['status', 'tracking_status']
    inlines = [OrderDetailsInline]

admin.site.register(Order, OrderAdmin)
