from django.urls import include, path
from .views import AboutUsCreate, AboutUsList, AboutUsDetail, AboutUsUpdate, AboutUsDelete


urlpatterns = [
    path('create/', AboutUsCreate.as_view(), name='create-aboutUs'),
    path('', AboutUsList.as_view()),
    path('<int:pk>/', AboutUsDetail.as_view(), name='retrieve-aboutUs'),
    path('update/<int:pk>/', AboutUsUpdate.as_view(), name='update-aboutUs'),
    # path('delete/<int:pk>/', AboutUsDelete.as_view(), name='delete-customer')
]