# inventory/urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('register/', user_registration, name='user-registration'),
    path('items/', item_list_create, name='item-list-create'),
    path('login/', user_login, name='user-login'),
    path('items/<int:pk>/', item_retrieve_update_destroy, name='item-retrieve-update-destroy'),  # Retrieve, Update, Delete item
]
