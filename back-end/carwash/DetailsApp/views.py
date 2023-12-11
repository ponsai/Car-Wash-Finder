# # DetailsApp/views.py
#
# from django.shortcuts import render
# from rest_framework.views import APIView
# from DetailsApp.models import DetailsApp
# from .serializers import DetailsAppSerializer
# from rest_framework.response import Response
# from rest_framework import generics
#
#
# class DetailsAppView(generics.ListCreateAPIView):
#     queryset = DetailsApp.objects.all()
#     serializer_class = DetailsAppSerializer

# DetailsApp/views.py


from rest_framework import generics
from .models import DetailsApp
from .serializers import DetailsAppSerializer

class DetailsAppView(generics.ListCreateAPIView):
    queryset = DetailsApp.objects.all()
    serializer_class = DetailsAppSerializer

class DetailsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DetailsApp.objects.all()
    serializer_class = DetailsAppSerializer

