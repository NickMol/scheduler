from .views import *
from django.urls import path, include

urlpatterns = [
   path('appointment/api', AppointmentView.as_view()),
]
