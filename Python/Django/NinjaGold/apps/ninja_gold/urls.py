from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'process/farm', views.farm),
    url(r'process/cave', views.cave),
    url(r'process/house', views.house),
    url(r'process/casino', views.casino),
    url(r'reset', views.reset),
]