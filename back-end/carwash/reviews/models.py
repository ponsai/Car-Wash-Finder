from django.db import models

class Review(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateField()
    review = models.TextField()

    def __str__(self):
        return self.name
