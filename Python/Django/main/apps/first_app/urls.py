from django.conf.urls import url
from . import views #imports views.py in current folder

urlpatterns = [
    url(r'^$', views.index) #like @app.route
]