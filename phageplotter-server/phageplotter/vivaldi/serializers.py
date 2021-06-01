from rest_framework import serializers
from .models import SimulationStats, Simulation

class SimulationStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = SimulationStats
        fields = ['id', 'sim', 'bacteria_population', 'phage_population']

class SimulationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Simulation
        fields = ['uuid', 'name', 'time_created', 'initialized', 'completed', 'num_of_sims']