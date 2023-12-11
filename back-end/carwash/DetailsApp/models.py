# models.py

from django.db import models

class DetailsApp(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    overview = models.CharField(max_length=255)
    review = models.CharField(max_length=255, default='YourDefaultValueHere')
    image = models.ImageField(upload_to='details_images/', null=True, blank=True)




