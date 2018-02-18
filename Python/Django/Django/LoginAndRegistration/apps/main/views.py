# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from django.core.urlresolvers import reverse
from django.contrib import messages
from .models import User
import bcrypt

# Create your views here.
def index(request):
    return render(request, "main/index.html")

def success(request, id):
    context = {
        'user': User.objects.get(id=id)
    }
    return render(request, "main/success.html", context)

def login(request):
    errors = {}
    
    userName = request.POST.get('username')
    password = request.POST.get('password')
    if len(userName) < 1:
        errors['username'] = "Username field cannot be blank"
    else:
        user = User.objects.get(username=userName)

        if user != None:
            if bcrypt.hashpw(password.encode(), user.password.encode()) != user.password:
                errors['password'] = "password is incorrect"
        else:
            errors['username'] = "Username is incorrect"

    if(len(errors)):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('home')
    else:
        return redirect ('success', id=user.id)

def register(request):
    errors = User.objects.validator(request.POST)
    
    if(len(errors)):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('home')
    else:
        firstName = request.POST.get('first_name')
        lastName = request.POST.get('last_name')
        userName = request.POST.get('username')
        email = request.POST.get('email')
        hashed_password = bcrypt.hashpw(request.POST.get('password').encode(),bcrypt.gensalt())
        birthDate = request.POST.get('birthdate')
        User.objects.create(first_name=firstName, last_name=lastName, email=email, username=userName, password=hashed_password, birthdate=birthDate)
        user = User.objects.last()
        return redirect ('success', id=user.id)

def users(request):
    context = {
        'user_list': User.objects.all()
    }
    return render(request, "main/users.html", context)

def delete_user(request, id):
    user = User.objects.get(id=id)
    user.delete()
    return redirect('users')