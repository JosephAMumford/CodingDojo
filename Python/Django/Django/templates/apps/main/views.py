# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from django.db import models
from .models import User
import bcrypt
import re

# Index Route
def index(request):
    if 'logged_in' not in request.session:
        request.session['logged_in'] = False
    if 'user_id' not in request.session:
        request.session['user_id'] = None

    if request.session['logged_in'] == True:
        return redirect('index')
    else:
        return render(request, "main/index.html")

# Redirect to Index
def login(request):
    return redirect("index")

# Redirect to Index
def logout(request):
    request.session.flush()
    return redirect('index')

# Process login information
def process_login(request):
    errors = {}
    
    email = request.POST.get('email')
    password = request.POST.get('password')
    
    if len(email) < 1:
        errors['email'] = "Email field cannot be blank"
    else:
        try:
            user = User.objects.get(email=email)

            if bcrypt.hashpw(password.encode(), user.password.encode()) != user.password:
                errors['password'] = "password is incorrect"
        except:
            errors['email'] = "Email or password is incorrect"

    if(len(errors)):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('index')
    else:
        request.session['logged_in'] = True
        request.session['user_id'] = user.id
        return redirect ('index')


# Process registration information
def process_registration(request):
    errors = User.objects.validator(request.POST)

    if(len(errors)):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('index')
    else:
        firstName = request.POST.get('first_name')
        lastName = request.POST.get('last_name')
        email = request.POST.get('email')
        username = request.POST.get('username')
        birthDate = request.POST.get('birthdate')
        hashed_password = bcrypt.hashpw(request.POST.get('password').encode(),bcrypt.gensalt())

        User.objects.create(first_name=firstName, last_name=lastName, username=username, email=email, password=hashed_password)
        
        if request.session['logged_in'] == False:
            user = User.objects.last()
            request.session['user_id'] = user.id
            request.session['logged_in'] = True
        
        return redirect ('index')

# Show User page - User details, user reviews
def show_user(request, id):
    main_user = User.objects.get(id=request.session['user_id'])
    context = {
        'main_user': main_user,
    }
    return render(request, "main/show_user.html", context)

# Confirm Page
def confirm(request):
    main_user = User.objects.get(id=request.session['user_id'])

    context = {
        'main_user': main_user,
    }
    return render(request, "main/confirm.html", context)