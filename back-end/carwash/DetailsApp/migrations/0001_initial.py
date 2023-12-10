# Generated by Django 5.0 on 2023-12-04 23:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Details',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Location', models.CharField(max_length=100)),
                ('base64Image', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=255)),
                ('overview', models.TextField()),
            ],
        ),
    ]