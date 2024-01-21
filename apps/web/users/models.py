from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser , PermissionsMixin

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)




class CustomUser(AbstractBaseUser, PermissionsMixin):
    USER_TYPES = (
        ('customer', 'Customer'),
        ('shop', 'Shop'),
    )
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    user_type = models.CharField(max_length=20, choices=USER_TYPES,default='customer')
    objects = CustomUserManager()

    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email

class CustomerProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    first_name = models.CharField(max_length=30, blank=True, null=True)
    last_name = models.CharField(max_length=30, blank=True, null=True)
    address = models.CharField(max_length=120, blank=True, null=True)
    dob = models.CharField(max_length=50, blank=True, null=True)
    contact_no = models.CharField(max_length=20, blank=True, null=True)
    alternative_no = models.CharField(max_length=20, blank=True, null=True)

class ShopProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    shop_name = models.CharField(max_length=50, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    about_shop = models.CharField(max_length=500, blank=True, null=True)
    contact_no = models.CharField(max_length=20, blank=True, null=True)
    alternative_no = models.CharField(max_length=20, blank=True, null=True)
