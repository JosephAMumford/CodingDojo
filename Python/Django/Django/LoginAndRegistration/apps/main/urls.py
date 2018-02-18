from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="home"),
    url(r'success/(?P<id>\d+)', views.success, name="success"),
    url(r'register$', views.register, name="register"),
    url(r'login$', views.login, name="login"),
    url(r'users$', views.users, name="users"),
    url(r'users/(?P<id>\d+)/delete$', views.delete_user, name="delete_user"),
]