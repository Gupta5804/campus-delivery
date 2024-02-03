from django.contrib import admin
from .models import Category, Product

class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'product_name', 'category', 'description', 'price', 'shop', 'active')
    list_filter = ('category', 'shop', 'active')
    search_fields = ['product_name', 'description']

admin.site.register(Category)
admin.site.register(Product, ProductAdmin)
