from django.shortcuts import render

"""
Views for the user API
"""
from rest_framework import generics, authentication, permissions
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings

from user.serializers import (
    UserSerializer
)


class CreateUserView(generics.CreateAPIView):
    """Handling post request with built in logic
        just have to set serializer so django rest_framework 
        can know which one to use
    """
    serializer_class = UserSerializer
