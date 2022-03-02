from django.db import models

class AppointmentType(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(max_length=800,blank=True, null=True)

    def __str__(self):
        return self.name

class AppointmentStatus(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(max_length=800,blank=True, null=True)

    def __str__(self):
        return self.name

class AppointmentReason(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(max_length=800,blank=True, null=True)

    def __str__(self):
        return self.name

class Appointment(models.Model):
    type = models.ForeignKey(AppointmentType, on_delete = models.CASCADE)
    status = models.ForeignKey(AppointmentStatus, on_delete = models.CASCADE)
    reason = models.ManyToManyField(AppointmentReason,blank=True, null=True)
    name = models.CharField(max_length=100, unique=True)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
