# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    response = "placeholder to later display all the list of blogs"
    return HttpResponse(response)

def new(requets):
    response = "placeholder to display a new form to create a new blog"
    return HttpResponse(response)

def create(requests):
    return redirect('/')

def show(request, number):
    return HttpResponse("placeholder to display blog " + number)

def edit(request,number):
    return HttpResponse("placeholder to edit blog " + number)

def destroy(request,number):
    return redirect('/')