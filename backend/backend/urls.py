from django.contrib import admin
from django.urls import path,include
from django.conf.urls import url
from rest_framework import urls
from recommend import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'users/', include('users.urls')),
    path('recommend/',include('recommend.urls')),
]