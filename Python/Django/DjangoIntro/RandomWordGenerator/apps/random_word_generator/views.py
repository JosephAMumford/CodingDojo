# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

# Create your views here.
def index(request):
    if 'count' in request.session:
        request.session['count'] += 1
    else:
        request.session['count'] = 1
    context = {
        "random_word" : get_random_word(),
        "attempt" : request.session['count'] 
    }
    return render(request, "random_word_generator/index.html", context)

def generate(request):
    return redirect('/')

def get_random_word():
    word = get_random_string(length=14).upper()
    return word

def reset(request):
    request.session['count'] = 0
    return redirect('/')
