from django.db import models

class Order(models.Model):
    customerName = models.CharField("customerName", max_length=240)
    contactDetails = models.CharField("contactDetails", max_length=240)
    locations = models.CharField("locations", max_length=500, null=True , blank= True)
    created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name




    