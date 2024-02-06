# serializers.py
from djoser.serializers import UserSerializer
from .models import CustomUser, ShopProfile
from rest_framework import serializers
class CustomUserSerializer(UserSerializer):
    class Meta:
        model = CustomUser
        fields = ('email','first_name','last_name','contact_no','user_type') 
class ShopProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopProfile
        fields = '__all__'