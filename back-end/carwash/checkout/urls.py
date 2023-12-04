from django.urls import include, path
from .views import OrderCreate, OrderList, OrderDetail, OrderUpdate, OrderDelete


urlpatterns = [
    path('create/', OrderCreate.as_view(), name='create-Order'),
    path('', OrderList.as_view()),
    path('<int:pk>/', OrderDetail.as_view(), name='retrieve-Order'),
    path('update/<int:pk>/', OrderUpdate.as_view(), name='update-Order'),
    # path('delete/<int:pk>/', OrderDelete.as_view(), name='delete-Order')
]

