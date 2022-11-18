from unittest.mock import patch
import unittest
#test for models

from django.test import TestCase
from django.contrib.auth import get_user_model

from core.models import Ticket, Comment
import datetime

def create_user(email='user@example.com', password='python123'):  
    """Create a return a new user."""
    return get_user_model().objects.create_user(email, password)

def create_ticket( ticket_type = 'Inventory',description = 'when sold items are not auto subtracting from inventory'):
    user = create_user()
    return Ticket.objects.create(
        issued_by =user, 
        ticket_type = ticket_type, 
        description = description)

class ModelTests(TestCase):

    """remember test must start with 'test' keyword"""


    def test_new_user_email_normalized(self):
        sample_emails = [
            ['test1@EXAMPLE.com', 'test1@example.com'],
            ['Test2@Example.com', 'Test2@example.com'],
            ['TEST3@EXAMPLE.com', 'TEST3@example.com'],
            ['test4@example.COM', 'test4@example.com'],
        ]
        for email, expected in sample_emails:
            user = get_user_model().objects.create_user(email, 'Python123')
            self.assertEqual(user.email, expected)

    def test_user_created_with_no_email(self):
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user('', 'test123')
    
    def test_create_superuser(self):
        """Test creating a superuser."""
        user = get_user_model().objects.create_superuser(
            'test@example.com',
            'test123',
        )

        self.assertTrue(user.is_superuser)
        self.assertTrue(user.is_staff)

    def test_ticket_description_is_formatted(self):

        ticket = create_ticket()
        self.assertEqual(ticket.get_description(), 'When sold items are not auto subtracting from inventory.')


    def test_comment_is_created(self):
        ticket = create_ticket()
        text = 'This is a text comment.'
        comment = Comment.objects.create(
            issued_by = ticket.issued_by,
            text = text
        )

        self.assertEqual(comment.text, text)
    
