from unittest.mock import patch
import unittest
#test for models

from django.test import TestCase
from django.contrib.auth import get_user_model

class ModelTests(TestCase):

    """remember test must start with 'test' keyword"""
    def test_create_user(self):
        email = 'test@example.com'
        password = 'Python123'
        user = get_user_model().objects.create_user(
            email=email,
            password=password,
        )
        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))

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