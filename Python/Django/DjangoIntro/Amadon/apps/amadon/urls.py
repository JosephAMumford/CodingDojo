from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^cart', views.cart),
    url(r'^process', views.process)
]