from django.db import models
from users.models import ShopProfile

class Category(models.Model):
    category_name = models.CharField(max_length=255)

    def __str__(self):
        return self.category_name

class Product(models.Model):
    product_name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    shop = models.ForeignKey(ShopProfile, on_delete=models.CASCADE, related_name='products')
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.product_name
