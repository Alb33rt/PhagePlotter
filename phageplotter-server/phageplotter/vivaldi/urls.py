from rest_framework import routers
from django.urls import path
from . import views

router = routers.DefaultRouter()
router.register(r'simdata', views.DataViewSet)

# Write the views here
urlpatterns = [
    path(r"simdata1", views.dataviewset, name="simdata1")
]
