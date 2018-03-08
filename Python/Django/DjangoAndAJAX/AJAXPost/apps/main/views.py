from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from models import *
from django.core import serializers
import json
def index(request):
    return render(request, 'main/demo1.html')
# Create your views here.
def all_json(request):
    users = User.objects.all()
    return HttpResponse(serializers.serialize("json", users), content_type='application/json')
def all_html(request):
    return render(request, 'main/all.html', { "users": User.objects.all() })
def find(request):
    return render(request, 'main/all.html',
        { "users":    User.objects.filter(first_name__startswith=request.POST['first_name_starts_with']) }
    )
def create(request):
    User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], email_address=request.POST['email_address'])
    return render(request, 'main/all.html',{ "users": User.objects.order_by("-id") })