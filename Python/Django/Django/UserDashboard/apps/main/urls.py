from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^index$', views.index, name='index'),
    url(r'^login$', views.login, name='login'),
    url(r'^register$', views.register, name='register'),
    url(r'^new$', views.new, name='new'),
    url(r'^add$', views.add_user, name='add_user'),
    url(r'^edit/(?P<id>\d+)$', views.edit_user, name='edit_user'),
    url(r'^view/(?P<id>\d+)$', views.view_user, name='view_user'),
    url(r'^dashboard$', views.dashboard, name='dashboard'),
    url(r'^process_login$', views.process_login, name='process_login'),
    url(r'^logout$', views.logout, name='logout'),
    url(r'^confirm/(?P<id>\d+)$', views.confirm, name="confirm"),
    url(r'^delete_user/(?P<id>\d+)$', views.delete_user, name='delete_user'),
    url(r'^edit/update_user$', views.update_user, name='update_user'),
    url(r'^edit/update_password$', views.update_password, name='update_password'),
    url(r'^view/post_message$', views.post_message, name="post_message"),
    url(r'^view/post_comment$', views.post_comment, name="post_comment"),
    url(r'^view/delete_message$', views.delete_message, name="delete_message"),
]