from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from todo import views

# router = routers.DefaultRouter()
# router.register(r'users', views.UserView, 'user')
# router.register(r'trips', views.TripView, 'trip')
# router.register(r'events', views.PlannerView, 'planner')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('todo.urls',namespace='trip')),
]