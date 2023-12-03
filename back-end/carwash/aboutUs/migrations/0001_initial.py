# Generated by Django 4.2.7 on 2023-12-03 04:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(verbose_name='caption')),
                ('description', models.CharField(verbose_name='description')),
                ('base64Image', models.CharField(verbose_name='base64Image')),
            ],
        ),
    ]
