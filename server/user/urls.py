from django.urls import path

from user import views

""" urls AKA routing"""

app_name = 'user'

""" .as_view() used beacuse djangp expect a function not object"""

urlpatterns = [
    path('create/', views.CreateUserView.as_view(), name='create'),
    path('token/', views.CreateTokenView.as_view(), name='token'),
    path('me/', views.ManageUserView.as_view(), name='me'),
]