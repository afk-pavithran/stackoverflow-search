from django.urls import path
from .views import IndexView, SearchQuestions

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('search/', view=SearchQuestions.as_view(), name='search')
    ]