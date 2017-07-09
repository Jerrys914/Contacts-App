from rest_framework import viewsets
from contacts.models import Contact
from contacts.serializers import ContactSerializer
from django.http import HttpResponse
from django.shortcuts import redirect

class ContactViewSet(viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Contact objects """
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request):
        serializer = ContactSerializer
        print(request.data)
        new_contact = Contact(name=request.data['name'],phone_number=request.data['number'],pic='/assets/images/default.jpg')
        new_contact.save()
        return redirect('/')
        return Response({'detail': 'Contact Created'})

    def update(self,request,pk=None):
        serializer = ContactSerializer
        contact = Contact.objects.get(id=request.data['id'])
        contact.name = request.data['name']
        contact.phone_number = request.data['phone_number']
        contact.pic = request.data['pic']
        contact.save()
        return HttpResponse({'detail': 'Contact Updates'})

    def delete(self,request,pk=None):
        obj = self.queryset.get(pk=pk)
        obj.delete
        return Response({'detail': 'Contact Deleted'})
