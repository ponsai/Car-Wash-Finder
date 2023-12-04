from django.urls import include, path
from .views import LocationsCreate, LocationsList, LocationsDetail, LocationsUpdate, LocationsDelete


urlpatterns = [
    path('create/', LocationsCreate.as_view(), name='create-Locations'),
    path('', LocationsList.as_view()),
    path('<int:pk>/', LocationsDetail.as_view(), name='retrieve-Locations'),
    path('update/<int:pk>/', LocationsUpdate.as_view(), name='update-Locations'),
    # path('delete/<int:pk>/', LocationsDelete.as_view(), name='delete-Locations')
]