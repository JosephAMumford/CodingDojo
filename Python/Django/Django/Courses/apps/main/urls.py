from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'courses$', views.courses, name="courses"),
    url(r'courses/add$', views.add_course, name="add_course"),
    url(r'courses/(?P<id>\d+)/delete', views.delete_course, name="delete_course"),
    url(r'courses/comments/add',views.add_comment, name="add_comment"),
    url(r'courses/(?P<id>\d+)/show', views.show_course, name="show_course"),
    url(r'courses/(?P<id>\d+)/destroy', views.destroy, name="destroy")
]