# serializers.py
from djoser.serializers import UserSerializer
from .models import CustomUser

class CustomUserSerializer(UserSerializer):
    class Meta:
        model = CustomUser
        fields = ('email','first_name','last_name','contact_no','user_type') 
