from django.db import models

# Create your models here.
from django.db import models

class AboutUs(models.Model):
    caption = models.CharField("caption")
    description = models.CharField("description")
    base64Image = models.CharField("base64Image")

    def __str__(self):
        return self.name