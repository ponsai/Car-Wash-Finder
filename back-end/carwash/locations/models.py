from django.db import models

class Locations(models.Model):
    customerName = models.CharField("customerName", max_length=240)
    contactDetails = models.CharField("contactDetails", max_length=240)
    selectedServices = models.CharField("selectedServices", max_length=240)
    created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    