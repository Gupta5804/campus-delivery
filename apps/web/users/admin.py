from django.contrib import admin
from .models import CustomUser,UserCustomer,UserShop

admin.site.register(CustomUser)
admin.site.register(UserShop)
admin.site.register(UserCustomer)

# Register your models here.
