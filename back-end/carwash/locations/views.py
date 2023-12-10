from django.shortcuts import render
from .models import Locations
from rest_framework import generics
from .serializers import LocationsSerializer


class LocationsCreate(generics.CreateAPIView):
    # API endpoint that allows creation of a new Locations
    queryset = Locations.objects.all(),
    serializer_class = LocationsSerializer


class LocationsList(generics.ListAPIView):
    # API endpoint that allows Locations to be viewed.
    queryset = Locations.objects.all()
    serializer_class = LocationsSerializer
    
class LocationsUpdate(generics.RetrieveUpdateAPIView):
    # API endpoint that allows a Locations record to be updated.
    queryset = Locations.objects.all()
    serializer_class = LocationsSerializer
    
class LocationsDelete(generics.RetrieveDestroyAPIView):
    # API endpoint that allows a Locations record to be deleted.
    queryset = Locations.objects.all()
    serializer_class = LocationsSerializer
    
class LocationsDetail(generics.RetrieveAPIView):
    # API endpoint that returns a single Locations by pk.
    queryset = Locations.objects.all()
    serializer_class = LocationsSerializer