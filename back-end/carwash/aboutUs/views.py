from django.shortcuts import render
from .models import AboutUs
from rest_framework import generics
from .serializers import AboutUsSerializer


class AboutUsCreate(generics.CreateAPIView):
    # API endpoint that allows creation of a new AboutUs
    queryset = AboutUs.objects.all(),
    serializer_class = AboutUsSerializer


class AboutUsList(generics.ListAPIView):
    # API endpoint that allows AboutUs to be viewed.
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer

class AboutUsDetail(generics.RetrieveAPIView):
    # API endpoint that returns a single AboutUs by pk.
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer

class AboutUsUpdate(generics.RetrieveUpdateAPIView):
    # API endpoint that allows a customer record to be updated.
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer

class AboutUsDelete(generics.RetrieveDestroyAPIView):
    # API endpoint that allows a customer record to be deleted.
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer
