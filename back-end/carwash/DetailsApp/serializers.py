# serializers.py

from rest_framework import serializers
from DetailsApp.models import *

class DetailsAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetailsApp
        fields = ['name', 'image','address', 'overview']
