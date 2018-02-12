from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'surveys/new', views.new),
    url(r'surveys', views.index),
]