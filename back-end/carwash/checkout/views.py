# Create your views here.
from django.shortcuts import render
from .models import Order
from rest_framework import generics
from .serializers import OrderSerializer
from rest_framework.parsers import JSONParser


class OrderCreate(generics.CreateAPIView): #Creates an API (Resource)
    # API endpoint that allows creation of a new Order
    queryset = Order.objects.all(),
    serializer_class = OrderSerializer
    parser_classes=[JSONParser]

class OrderList(generics.ListAPIView): #Lists orders
    # API endpoint that allows Order to be viewed.
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    
class OrderDetail(generics.RetrieveAPIView):
    # API endpoint that returns a single Order by pk.
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    
class OrderDelete(generics.RetrieveDestroyAPIView):
    # API endpoint that allows a Order record to be deleted.
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderUpdate(generics.RetrieveUpdateAPIView):
    # API endpoint that allows a Order record to be updated.
    queryset = Order.objects.all()
    serializer_class = OrderSerializer