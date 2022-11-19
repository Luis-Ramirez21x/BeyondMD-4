from core.models import Ticket, Comment

from rest_framework import serializers


"""need to nest Comment serializer within Ticker serializer
    this is why its up here lol
"""
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'issued_by', 'text', 'issued_date']
        read_only_fields = ['id','issued_date', 'issued_by']

class TicketsSerializer(serializers.ModelSerializer):
    """Serializer for Tickets"""
    comments = CommentSerializer(many=True, required = False)

    class Meta:
        model = Ticket
        fields = ['id', 'ticket_type', 'description', 'is_highPriority', 'is_open', 'issued_date', 'comments']
        read_only_fields = ['id','issued_date']

    def create(self, validated_data):
        """custom logic for creating ticket and writing to 'comments'"""
        comments = validated_data.pop('comments', [])           #takes comments off
        ticket = Ticket.objects.create(**validated_data)        #creates ticket without comments so as to not error out 
        auth_user = self.context['request'].user                #gets current user
        for comment in comments :                       
            comment_obj, created = Comment.objects.get_or_create( #built in method literally 'get or create'
                issued_by = auth_user,
                **comment
            )
            ticket.comments.add(comment_obj)
        return ticket



