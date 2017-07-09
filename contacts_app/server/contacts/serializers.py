from rest_framework import serializers
from contacts.models import Contact

class ContactSerializer(serializers.ModelSerializer):
    """ Serializer to represent Contact Model """
    class Meta:
        model = Contact
        fields = ("id","name","phone_number", "pic")
