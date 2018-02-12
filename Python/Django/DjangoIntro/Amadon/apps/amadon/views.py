# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    #request.session.flush()
    if 'total_items' not in request.session:
        request.session['total_items'] = 0
    
    if 'total_charges' not in request.session:
        request.session['total_charges'] = 0.0
    
    if 'current_items' not in request.session:
        request.session['current_items'] = 0
    
    if 'current_charges' not in request.session:
        request.session['current_charges'] = 0.0

    return render(request, "amadon/index.html")

def cart(request):
    context = {
        'total_items':  request.session['total_items'],
        'total_charges':  request.session['total_charges'],
        'current_items':  request.session['current_items'],
        'current_charges':  request.session['current_charges'],
    }

    return render(request, "amadon/cart.html", context)

def process(request):
    if request.POST.get('product-id') == '1':
        current_charges = 17.99
    elif request.POST.get('product-id') == '2':
        current_charges = 29.99
    elif request.POST.get('product-id') == '3':
        current_charges = 14.99
    elif request.POST.get('product-id') == '4':
        current_charges = 35.99
    elif request.POST.get('product-id') == '5':
        current_charges = 9.99

    current_items = int(request.POST.get('quantity'))

    total_items = int(request.session['total_items'])
    total_charges = float(request.session['total_charges'])
    
    total_items = total_items + current_items
    total_charges = total_charges + (current_items * current_charges)

    request.session['total_items'] = str(total_items)
    request.session['total_charges'] = str(total_charges)
    request.session['current_items'] = str(current_items)
    request.session['current_charges'] = str(current_charges * current_items)

    return redirect('/cart')