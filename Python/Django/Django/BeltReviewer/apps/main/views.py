# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from django.db import models
from .models import User, Author, Book, Review
import bcrypt
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PASSWORD_REGEX = re.compile(r'\d.*[A-Z]|[A-Z].*\d')

# Index page - Login and Registrations
def index(request):
    if 'logged_in' not in request.session:
        request.session['logged_in'] = False
    if 'user_id' not in request.session:
        request.session['user_id'] = None

    if request.session['logged_in'] == True:
        return redirect('books')
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
        return redirect ('books')


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
        hashed_password = bcrypt.hashpw(request.POST.get('password').encode(),bcrypt.gensalt())

        User.objects.create(first_name=firstName, last_name=lastName, username=username, email=email, password=hashed_password)
        
        if request.session['logged_in'] == False:
            user = User.objects.last()
            request.session['user_id'] = user.id
            request.session['logged_in'] = True
        return redirect ('books')

# Main page - Lists of books
def books(request):
    main_user = User.objects.get(id=request.session['user_id'])
    book_list = Book.objects.all()
    temp_recent_list = Review.objects.all().order_by('-id')[:3]
    recent_list = reversed(temp_recent_list)
    context = {
        'main_user': main_user,
        'book_list': book_list,
        'recent_list': recent_list
    }
    return render(request, "main/books.html", context)

# Process Review
def process_review(request):

    new_title = request.POST.get('book_title')
    new_author = request.POST.get('new_book_author')
    if len(new_author) < 1:
        new_author = request.POST.get('current_book_author')
        author1 = Author.objects.get(name=new_author)
    else:
        # Create Author
        author1 = Author.objects.create(name=new_author)
    new_review = request.POST.get('review')
    new_rating = request.POST.get('rating')

    user_id = request.session['user_id']
    current_user=User.objects.get(id=user_id)
 
    # Create Book
    if request.POST.get('book_exists') == 'false':
        book1 = Book.objects.create(title=new_title,book_author=author1)
    else:
        book1 = Book.objects.get(title=new_title)

    # Create Review
    review1 = Review.objects.create(content=new_review,rating=new_rating,book=book1,user=current_user)

    return redirect('books')

# Add Review page - form
def add_review(request):
    main_user = User.objects.get(id=request.session['user_id'])
    current_authors = Author.objects.all()
    context = {
        'main_user': main_user,
        'authors': current_authors,
    }
    return render(request, "main/add.html", context)

# Process Delete Review
def delete_review(request,id):
    review = Review.objects.get(id=id)
    book_id = review.book.id
    review.delete()
    return redirect ('show_user', id=book_id)

# Process delete review
def confirm_delete(request,id):
    context = {
        'review_id':id,
    }
    return render(request, "main/confirm.html", context)

# Show Book page - Book details, reviews
def show_book(request, id):
    main_user = User.objects.get(id=request.session['user_id'])
    book = Book.objects.get(id=id)
    reviews = Review.objects.filter(book=book)
    context = {
        'main_user': main_user,
        'book': book,
        'reviews':reviews
    }
    return render(request, "main/show_book.html", context)

# Show User page - User details, user reviews
def show_user(request, id):
    main_user = User.objects.get(id=request.session['user_id'])
    reviews = Review.objects.filter(user=main_user)
    context = {
        'main_user': main_user,
        'reviews':reviews
    }
    return render(request, "main/show_user.html", context)

# Confirm Page - delete review confirmation
def confirm(request):
    main_user = User.objects.get(id=request.session['user_id'])

    context = {
        'main_user': main_user,
    }
    return render(request, "main/confirm.html", context)
