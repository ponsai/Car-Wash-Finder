# Generated by Django 4.2.7 on 2023-12-04 07:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('checkout', '0002_remove_order_string_array_order_locations_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='locations',
            field=models.CharField(blank=True, max_length=500, null=True, verbose_name='locations'),
        ),
    ]
