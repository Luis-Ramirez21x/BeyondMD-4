from django.urls import (
    path,
    include,
)

from rest_framework.routers import DefaultRouter

from ticket import views

"""defaul router creates all routes availble for that view
    model view set allows for all CRUD ops
"""
router = DefaultRouter()
router.register('tickets', views.TicketViewSet)
router.register('comments', views.CommentViewSet)

app_name = 'ticket'

urlpatterns = [
    path('', include(router.urls)),
]