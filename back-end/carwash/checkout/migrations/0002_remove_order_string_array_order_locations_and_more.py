# Generated by Django 4.2.7 on 2023-12-04 07:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('checkout', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='string_array',
        ),
        migrations.AddField(
            model_name='order',
            name='locations',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='contactDetails',
            field=models.CharField(max_length=240, verbose_name='contactDetails'),
        ),
    ]
