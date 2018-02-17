# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
from django.core.urlresolvers import reverse
from django.contrib import messages
from .models import Course, Description, Comment

# Create your views here.
def index(request):
    return redirect('courses')

def courses(request):
    context = {
        'list': Description.objects.all()
    }
    return render(request, "main/index.html", context)

def add_course(request):
    Course.objects.create(name=request.POST.get('name'))
    Description.objects.create(description=request.POST.get('description'), course=Course.objects.last())

    return redirect ('courses')

def delete_course(request, id):
    context = {
        'course': Description.objects.get(course_id=id)
    }
    return render(request, "main/delete.html", context)

def add_comment(request):
    course = Course.objects.get(id=request.POST.get('course_id'))
    Comment.objects.create(comment=request.POST.get('comment'),course=course)
    return redirect('show_course', id=request.POST.get('course_id'))

def show_course(request, id):
    context = {
        'course': Description.objects.get(course_id=id),
        'comments' : Comment.objects.filter(course_id=id)
    }
    return render(request, "main/comments.html", context)

def destroy(request, id):
    course = Description.objects.get(course_id=id)
    course.delete()
    return redirect('courses')