from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from datetime import datetime
from django.conf import settings
# Create your models here.

class UserManager(BaseUserManager):
   

    def create_user(self, email, password=None, **extra_fields):
        """Create, save and return a new user."""
        if not email:
            raise ValueError('User must have an email address.')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user
    
    def create_superuser(self, email, password):
        """Create and return a new superuser."""
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        """using self.db incase needed to add multiple db's"""
        user.save(using=self._db)

        return user
        

class User(AbstractBaseUser, PermissionsMixin):
    """User in the system."""
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    image_url = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    tickets = models.ManyToManyField('Ticket')
    """add ticket field once we get that test"""

    objects = UserManager()

    """define field we want to use for auth"""
    USERNAME_FIELD = 'email'

class Ticket (models.Model):
    issued_by = models.ForeignKey( settings.AUTH_USER_MODEL , on_delete=models.DO_NOTHING)
    ticket_type = models.CharField(max_length=50)
    description = models.TextField(max_length=1000)
    is_highPriority = models.BooleanField(default=False)
    is_open = models.BooleanField(default=True)
    issued_date = models.DateTimeField(default=datetime.now)
    comments = models.ManyToManyField('Comment')

    def get_description(self):
        str = self.description
        str = str.capitalize()
        if str == "":                    
            return str
        if str[-1] in ["?", ".", "!"]:   
            return str
        if str[-1] == ",":               
            return str[:-1] + "."
        return str + "."     
       
class Comment (models.Model):
    issued_by = models.ForeignKey( settings.AUTH_USER_MODEL , on_delete=models.DO_NOTHING)
    text = models.TextField(max_length=1000)
    issued_date = models.DateTimeField(default=datetime.now)

    def get_text(self):
        str = self.text
        str = str.lower()
        return str