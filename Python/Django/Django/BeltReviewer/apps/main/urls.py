from django.conf.urls import url, include
import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'process_login$', views.process_login, name="process_login"),
    url(r'process_registration$', views.process_registration, name="process_registration"),
    url(r'^books$', views.books, name="books"),
    url(r'^add_review$', views.add_review, name="add_review"),
    url(r'process_review$', views.process_review, name="process_review"),
    url(r'^show_book/(?P<id>\d+)$', views.show_book, name="show_book"),
    url(r'^show_user/(?P<id>\d+)$', views.show_user, name="show_user"),
    url(r'^confirm_delete/(?P<id>\d+)$', views.confirm_delete, name="confirm_delete"),
    url(r'login$', views.login, name="login"),
    url(r'logout$', views.logout, name="logout"),
    url(r'delete_review/(?P<id>\d+)$', views.delete_review, name='delete_review')
]