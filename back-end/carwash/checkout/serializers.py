from rest_framework import serializers
from .models import Order

class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order 
        fields = ['pk', 'customerName', 'contactDetails', 'locations', 'created']
        #fields = '__all__'
# any query connects to the table, we return these details . ONLY the mentioned columns are returned.