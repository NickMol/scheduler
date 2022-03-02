from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *

class AppointmentView(generics.CreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer