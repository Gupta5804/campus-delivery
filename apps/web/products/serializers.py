from rest_framework import serializers
from .models import Product, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()  # Use the CategorySerializer for the related category
    shop = serializers.StringRelatedField()  # Use StringRelatedField for the related shop

    class Meta:
        model = Product
        fields = '__all__'


