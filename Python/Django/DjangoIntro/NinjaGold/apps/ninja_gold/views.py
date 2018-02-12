# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import random
import math
from time import gmtime, strftime
from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    # Initialize session values
    # Keeps track of total gold pieces
    if 'gold' not in request.session:
        request.session['gold'] = 0

    # Keeps track of location, time, and how many gold pieces were earned or lost
    if 'activity' not in request.session:
        request.session['activity'] = []

    context = {
        'gold' : request.session['gold'],
        'activity' : request.session['activity'],
    }
    return render(request, 'ninja_gold/index.html', context)

def farm(request):
    time = strftime("%c",gmtime())
    temp =random.randrange(10,21)
    string = "You got " + str(temp) + " gold pieces from the farm! (" + str(time) + ")"
    request.session['gold'] += temp
    request.session['activity'].append([string,True])
    return redirect('/')


def cave(request):
    time = strftime("%c",gmtime())
    temp =random.randrange(5,11)
    string = "You got " + str(temp) + " gold pieces from the cave! (" + str(time) + ")"
    request.session['gold'] += temp
    request.session['activity'].append([string,True])
    return redirect('/')

def house(request):
    time = strftime("%c",gmtime())
    temp =random.randrange(2,6)
    string = "You got " + str(temp) + " gold pieces from the house! (" + str(time) + ")"
    request.session['gold'] += temp
    request.session['activity'].append([string,True])
    return redirect('/')

def casino(request):
    sign = False
    string = ""
    time = strftime("%c",gmtime())
    temp =random.randrange(-50,51)
    if temp < 0:
        string = "You lost " + str(int(math.fabs(temp))) + " gold pieces from the casino! (" + str(time) + ")"
        sign = False
    if temp >= 0:
        string = "You got " + str(temp) + " gold pieces from the casino! (" + str(time) + ")"
        sign = True
    request.session['gold'] += temp
    request.session['activity'].append([string,sign])
    return redirect('/')

def reset(request):
    # Reset session values
    request.session['gold'] = 0
    request.session['activity'] = []

    return redirect('/')