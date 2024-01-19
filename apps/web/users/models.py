from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser , PermissionsMixin


class UserAccountManager(BaseUserManager):
    def create_user(self,email, password=None, **kwargs):  # kwargs for first_name,last_name dictionary
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError("Users must have an email address")
        
        email = self.normalize_email(email) # converts capital letters to small letters after the @
        email = email.lower()

        user = self.model(
            email=email,
            **kwargs
        )

        user.set_password(password) # hash the password
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None,**kwargs):
        
        user = self.create_user(
            email,
            password=password,
            **kwargs
            
        )
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class CustomUser(AbstractBaseUser,PermissionsMixin):
    # first_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True,max_length=255)
    # date_of_birth = models.DateField()
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

class UserCustomer(models.Model):
    user = models.OneToOneField(CustomUser,on_delete = models.CASCADE,primary_key=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    
class UserShop(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    shop_name = models.CharField(max_length=50)
    address = models.TextField(blank=True, null=True)