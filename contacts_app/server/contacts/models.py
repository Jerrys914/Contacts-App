from django.db import models

class Contact(models.Model):
    """ Contact DB Model """
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)
    pic = models.ImageField(upload_to='assets/images')
