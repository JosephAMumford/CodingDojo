# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
from django.core.urlresolvers import reverse
from django.contrib import messages
from .models import User

# Create your views here.
def users(request):
    context = {
        'user_list' : User.objects.all()
    }
    return render(request, "main/users.html", context)

def new_user(request):
    return render(request, "main/new.html")

def edit_user(request, id):
    context = {
        'user' : User.objects.get(id=id)
    }
    return render(request, "main/edit.html", context)

def show_user(request, id):
    context = {
        'user' : User.objects.get(id=id)
    }
    return render(request, "main/show.html", context)

def create(request):
    errors = User.objects.validator(request.POST)
    if(len(errors)):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('new_user')
    else:
        User.objects.create(first_name=request.POST.get('first_name'), last_name=request.POST.get('last_name'), email=request.POST.get('email'))
        return redirect ('users')

def destroy(request, id):
    user = User.objects.get(id=id)
    user.delete()
    return redirect ('users')

def update(request):
    errors = User.objects.validator(request.POST)
    if(len(errors)):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('edit_user', id = request.POST.get('user_id'))
    else:
        user_id = request.POST.get('user_id')
        user = User.objects.get(id=user_id)
        user.first_name = request.POST.get('first_name')
        user.last_name = request.POST.get('last_name')
        user.email = request.POST.get('email')
        user.save()
        return redirect ('users')