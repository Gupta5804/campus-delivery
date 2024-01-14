from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response


def home(request):
    return render(request, "home.html")


class index(APIView):    
    def get(self, request, format=None):    
        return Response('Hello World!')
    