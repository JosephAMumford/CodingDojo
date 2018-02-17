from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'users$', views.users, name="users"),
    url(r'users/new$', views.new_user, name="new_user"),
    url(r'users/(?P<id>\d+)/edit$', views.edit_user, name="edit_user"),
    url(r'users/(?P<id>\d+)$', views.show_user, name="show_user"),
    url(r'users/create$', views.create, name="create_user"),
    url(r'users/(?P<id>\d+)/destroy$', views.destroy, name="delete_user"),
    url(r'users/update$', views.update, name="update_user")
]