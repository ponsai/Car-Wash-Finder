# DetailsApp/urls.py

from django.urls import path
from .views import DetailsAppView, DetailsDetailView

urlpatterns = [
    path('api/locations/', DetailsAppView.as_view(), name='location-list'),
    path('api/details/<int:pk>/', DetailsDetailView.as_view(), name='details-detail'),
    # path('', DetailsAppView.as_view()),
    # Add other paths as needed
]
