# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from django import forms

class SurveyForm(forms.Form):
    name = forms.CharField(label='name',max_length=100)


# Create your views here.
def index(request):
    return render(request, "survey_form/index.html")

def process(request):
    if request.method == 'POST':
        if 'count' in request.session:
            request.session['count'] += 1
        else:
            request.session['count'] = 1
        request.session['name'] = request.POST.get('name')
        request.session['location'] = request.POST.get('location')
        request.session['language'] = request.POST.get('language')
        request.session['comment'] = request.POST.get('comment')
    return redirect('/result')

def result(request):
    context = {
        'count': request.session['count'],
        'name' : request.session['name'],
        'location' : request.session['location'],
        'language' : request.session['language'],
        'comment' : request.session['comment']
    }
    return render(request, "survey_form/result.html", context)

def home(request):
    return redirect('/')