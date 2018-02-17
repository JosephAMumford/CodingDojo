# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import re
from django.db import models

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.
class UserManager(models.Manager):
    def validator(self, postData):
        errors = {}

        if(len(postData['first_name'])) < 2:
            errors['first_name'] = "First name must be more than 2 characters"
        
        if(len(postData['last_name'])) < 2:
            errors['last_name'] = "Last name must be more than 2 characters"
        
        if len(postData['email']) < 1:
            errors['email'] = "email must be more than 2 characters"
        
        elif not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "email be a valid email address"
        
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()