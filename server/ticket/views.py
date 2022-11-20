
from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from core.models import Ticket, Comment
from ticket import serializers

"""ModelViewSet from rest_framework allows for CRUD operations """
class TicketViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.TicketsSerializer
    """query set lets your model view know what is availbale through this api"""
    queryset = Ticket.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(issued_by=self.request.user).order_by('-id')
    
    def perform_create(self, serializer):
        """create new ticket
            on new ticket creation user auth serializer
            to get current user and add to ticket 
        """
        serializer.save(issued_by=self.request.user)

class CommentViewSet(mixins.DestroyModelMixin, mixins.UpdateModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet, mixins.CreateModelMixin):
    serializer_class = serializers.CommentSerializer
    queryset = Comment.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    def perform_create(self, serializer):
        
        serializer.save(issued_by=self.request.user)

    


    


