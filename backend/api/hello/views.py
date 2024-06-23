from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

class Backend(APIView):
    def get(self, request, fromat=None):
        return Response({"message" : "backend"})