# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class CourseManager(models.Manager):
    def validator(self, postData):
        errors = {}

        if(len(postData['name'])) < 2:
            errors['name'] = "Course name must be more than 2 characters"
        
        if(len(postData['description'])) < 15:
            errors['description'] = "Description must be more than 15 characters"
        
        if len(postData['comment']) < 15:
            errors['comment'] = "email must be more than 15 characters"
        
        return errors

class Course(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = CourseManager()

class Description(models.Model):
    description = models.CharField(max_length=255)
    course = models.OneToOneField(Course, primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
    comment = models.CharField(max_length=255)
    course = models.ForeignKey(Course, related_name="comments")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

