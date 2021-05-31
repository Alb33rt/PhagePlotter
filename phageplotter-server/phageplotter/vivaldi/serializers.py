from rest_framework import serializers
from .models import SimulationStats

class SimulationStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = SimulationStats
        fields = ['bacteria_population', 'phage_population']