from django.db import models
from products.models import Product
from users.models import ShopProfile,CustomUser


class Order(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('canceled', 'Canceled'),
        
    ]

    TRACKING_STATUS_CHOICES = [
        ('preparing', 'Under Preparation'),
        ('dispatched', 'Dispatched'),
        ('delivered', 'Delivered'),
       
    ]

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    shop = models.ForeignKey(ShopProfile, on_delete=models.CASCADE)
    order_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='pending')
    tracking_status = models.CharField(max_length=50, choices=TRACKING_STATUS_CHOICES, default='preparing')  # Added field for tracking status

    def __str__(self):
        return f"{self.user.email}'s Order at {self.shop.shop_name}"

class OrderDetails(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_details')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    @property
    def subtotal(self):
        return self.product.price * self.quantity

    def __str__(self):
        return f"{self.product.product_name} in Order {self.order.id}"
