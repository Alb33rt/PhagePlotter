from django.shortcuts import render
from .models import SimulationStats, Simulation

from rest_framework import serializers, viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import SimulationStatSerializer, SimulationSerializer

# Create your views here.
class DataViewSet(viewsets.ModelViewSet):
    queryset = SimulationStats.objects.all()
    serializer_class = SimulationStatSerializer

class SimulationViewSet(viewsets.ModelViewSet):
    queryset = Simulation.objects.all()
    serializer_class = SimulationSerializer

@api_view(['GET', 'POST'])
def dataviewset1(request):
    print("Recieved Datasets Request")
    if request.method == "GET":
        queryset = SimulationStats.objects.all()
        serializer = SimulationStatSerializer(queryset, many=True)
        response = serializer.data
        print(Response(serializer.data))
        return Response(response)

    if request.method == "POST":
        serializer = SimulationStatSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def simulationview(request):
    print("Recieved Simulation Request")
    if request.method == "GET":
        queryset = Simulation.objects.all()
        serializer = SimulationSerializer(queryset, many=True)
        return Response(serializer.data)
    
    if request.method == "POST":
        serializer = SimulationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)