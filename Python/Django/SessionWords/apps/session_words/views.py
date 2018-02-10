# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from time import gmtime, strftime, localtime
from django.shortcuts import render, HttpResponse, redirect
from Word import Word

# Create your views here.
def index(request):
    if 'words' not in request.session:
        word_list = []
        request.session['words'] = word_list
    context = {
        'word_list' : request.session['words']
    }
    return render(request, 'session_words/index.html', context)

def process(request):
    if request.method == 'POST':
        new_word = { 'word': request.POST.get('word'), 
                    'color': request.POST.get('color'),
                    'word_size': request.POST.get('word_size'), 
                    'decoration': request.POST.get('decoration'),
                    'time': strftime("%B %d, %Y %I:%M %p", localtime())
        }
        word_list = request.session['words']
        word_list.append(new_word)
        request.session['words'] = word_list
    return redirect('/')

def reset(request):
    request.session.flush()
    return redirect('/')
