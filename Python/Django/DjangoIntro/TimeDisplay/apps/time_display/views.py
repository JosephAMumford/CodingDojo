# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from time import gmtime, strftime, localtime
from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    context = {
        "time": strftime("%B %d, %Y %I:%M %p", localtime())
    }
    return render(request, "time_display/index.html", context)
    