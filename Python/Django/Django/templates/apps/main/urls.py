from django.conf.urls import url, include
import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'process_login$', views.process_login, name="process_login"),
    url(r'process_registration$', views.process_registration, name="process_registration"),
    url(r'login$', views.login, name="login"),
    url(r'logout$', views.logout, name="logout"),
    url(r'^show_user/(?P<id>\d+)$', views.show_user, name="show_user"),
]
