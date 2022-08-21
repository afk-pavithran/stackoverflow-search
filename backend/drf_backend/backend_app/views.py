import json
import requests
from .constants import SEARCH
from django.shortcuts import render
from django.core.cache import cache
from rest_framework.views import APIView
from rest_framework.response import Response
from .throttles import UserDayThrottle, UserMinThrottle, AnonDayThrottle, AnonMinThrottle
# Create your views here.

class IndexView(APIView):
    def get(self, request):
        return Response({'response': 'Index'})


class SearchQuestions(APIView):

    throttle_classes = [UserDayThrottle, UserMinThrottle, AnonDayThrottle, AnonMinThrottle]

    def get(self, request):
        print(request)
        return Response({'response': 'Search'})

    def post(self, request):
        
        req_body = json.load(request)

        search_string_params = ''
        for key, value in req_body['search_params'].items():
            search_string_params += f'&{key}={value}'


        is_cached = cache.get(search_string_params)

        if is_cached: 
            response = is_cached
        else:
            print('sending request')
            response = requests.get(f"{SEARCH.BASE_API.value}{search_string_params}")
            response = response.json()
            cache.set(search_string_params, response)

        return Response({'data': response})