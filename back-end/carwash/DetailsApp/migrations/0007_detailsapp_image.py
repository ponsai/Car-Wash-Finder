# Generated by Django 5.0 on 2023-12-10 03:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DetailsApp', '0006_remove_detailsapp_image_detailsapp_review'),
    ]

    operations = [
        migrations.AddField(
            model_name='detailsapp',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='details_images/'),
        ),
    ]
