from django.shortcuts import render
from .models import SimulationStats

from rest_framework import serializers, viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import SimulationStatSerializer 

# Create your views here.
class DataViewSet(viewsets.ModelViewSet):
    queryset = SimulationStats.objects.all()
    serializer_class = SimulationStatSerializer

@api_view(['GET', 'POST'])
def dataviewset(request):
    if request.method == "GET":
        queryset = SimulationStats.objects.all()
        serializer = SimulationStatSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == "POST":
        serializer = SimulationStatSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)