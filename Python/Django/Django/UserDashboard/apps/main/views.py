# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from django.db import models
from .models import User, Message, Reply
import bcrypt
import re

# Session variables
# logged_in - boolean
# user_id - int

PASSWORD_REGEX = re.compile(r'\d.*[A-Z]|[A-Z].*\d')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your views here.
# Render Home page
def home(request):
    if 'logged_in' not in request.session:
        request.session['logged_in'] = False
    if 'user_id' not in request.session:
        request.session['user_id'] = None

    if request.session['logged_in'] == True:
        return redirect('dashboard')
    else:
        return render(request, "main/home.html")

# Render index page
def index(request):
    return render(request, "main/index.html")

# Render Login Page
def login(request):
    return render(request, "main/login.html")

# Process Login
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
        return redirect('login')
    else:
        request.session['logged_in'] = True
        request.session['user_id'] = user.id
        return redirect ('dashboard')

# Render Register page
def register(request):
    return render(request, "main/register.html")

# Process registration
def new(request):
    errors = User.objects.validator(request.POST)
    
    if(len(errors)):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('home')
    else:
        firstName = request.POST.get('first_name')
        lastName = request.POST.get('last_name')
        email = request.POST.get('email')
        hashed_password = bcrypt.hashpw(request.POST.get('password').encode(),bcrypt.gensalt())

        #If not logged in, must be registering.  Else, admin is logged in and adding user
        if request.session['logged_in'] == False:
            User.objects.create(first_name=firstName, last_name=lastName, email=email, password=hashed_password, user_level="normal")
        else:
            user_level = request.POST.get('user_level')
            User.objects.create(first_name=firstName, last_name=lastName, email=email, password=hashed_password, user_level=user_level)
        
        if request.session['logged_in'] == False:
            user = User.objects.last()
            request.session['user_id'] = user.id
            request.session['logged_in'] = True
        return redirect ('dashboard')
    
# Render Admin add user page
def add_user(request):
    return render(request, "main/add.html")

# Process Confrim 
def confirm(request, id):
    context = {
        'user_id':id
    }
    return render(request, "main/confirm.html", context)

# Process Delete user
def delete_user(request, id):
    user = User.objects.get(id=id)
    user.delete()
    return redirect('dashboard')

# Render Edit user page
def edit_user(request, id):
    context = {
        'main_user': User.objects.get(id=request.session['user_id']),
        'user': User.objects.get(id=id)
    }
    return render(request, "main/edit.html", context)

# Render View user page
def view_user(request, id):

    context = {
        'main_user': User.objects.get(id=request.session['user_id']),
        'user': User.objects.get(id=id),
        'messages': Message.objects.filter(profile_id=id),
        'replies': Reply.objects.all()
    }
    return render(request, "main/view.html", context)

# Render Dashboard page
def dashboard(request):   
    main_user = User.objects.get(id=request.session['user_id'])
    allusers = User.objects.all()

    context = {
        'main_user': main_user,
        'user_list': allusers
    }
    return render(request, "main/dashboard.html", context)

# Process Update user 
def update_user(request):

    main_user = User.objects.get(id=request.session['user_id'])

    errors = {}

    # Validate first name
    if len(request.POST.get('first_name')) < 2:
        errors['first_name'] = "First name must be more than 2 characters"
    elif request.POST.get('first_name').isalpha() == False:
        errors['first_name'] = "First name cannot contain numbers"
        
    # Validate last name
    if len(request.POST.get('last_name')) < 2:
        errors['last_name'] = "Last name must be more than 2 characters"
    elif request.POST.get('last_name').isalpha() == False:
        errors['last_name'] = "Last name cannot contain numbers"
        
    # Validate Email
    if len(request.POST.get('email')) < 1:
        errors['email'] = "email must be more than 2 characters"
    elif not EMAIL_REGEX.match(request.POST.get('email')):
        errors['email'] = "email be a valid email address"
    
    if len(errors):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('edit_user', id=request.POST.get('user_id'))

    else:
        user = User.objects.get(id=request.POST.get('user_id'))

        user.first_name = request.POST.get('first_name')
        user.last_name = request.POST.get('last_name')
        user.email = request.POST.get('email')
        user.description = request.POST.get('description')
        if main_user.user_level == 'admin':
            user.user_level = request.POST.get('user_level')
        user.updated_at = models.DateTimeField(auto_now=True)
        user.save()
        return redirect('edit_user', id=request.POST.get('user_id'))

# Process Update password
def update_password(request):
    errors = {}

    # Validate Password
    if len(request.POST.get('password')) < 1:
        errors['password'] = "Password cannot be blank"
    elif len(request.POST.get('password')) < 8:
        errors['password'] = "Password must be at least 8 characters"
    elif not PASSWORD_REGEX.match(request.POST.get('password')):
        errors['password'] = "Invalid Password, must contain at least one uppercase and one number"

    # Validate Confrim Password
    if len(request.POST.get('confirm_password')) < 1:
        errors['confirm'] = "Confirm Password cannot be blank"
    elif request.POST.get('password') != request.POST.get('confirm_password'):
        errors['confirm'] = "Passwords do not match"

    if(len(errors)):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('edit_user', id=request.POST.get('user_id'))
    else:
        user = User.objects.get(id=request.POST.get('user_id'))
        user.password = bcrypt.hashpw(request.POST.get('password').encode(),bcrypt.gensalt())
        user.save()
        return redirect('edit_user', id=request.POST.get('user_id'))

# Process logout
def logout(request):
    request.session.flush()
    return redirect('home')

# Process Post message
def post_message(request):

    profile_id = request.POST.get('user_id')    
    Message.objects.create(content=request.POST.get('message'),profile_id=User.objects.get(id=profile_id),user_id=User.objects.get(id=request.session['user_id']))

    return redirect(view_user, id=profile_id)

# Process Post commment
def post_comment(request):
    profile_id = request.POST.get('user_id') 
    message_id = request.POST.get('message_id')    

    Reply.objects.create(content=request.POST.get('comment'), message_id=Message.objects.get(id=message_id), user_id=User.objects.get(id=request.session['user_id']))

    return redirect(view_user, id=profile_id)

# Process Delete message 
def delete_message(request):
    profile_id = request.POST.get('user_id')   
    message_id = request.POST.get('message_id')
    message = Message.objects.get(id=message_id)
    message.delete()

    return redirect(view_user, id=profile_id)
