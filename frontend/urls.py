from django.urls import path
from .views import *

urlpatterns = [
    path('',index),
    path('calendar',index),
    path('create',index),

]