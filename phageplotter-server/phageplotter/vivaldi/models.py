import uuid
from django.db import models

# Create your models here.
class Simulation(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable= False)
    parameterfile = models.FileField(upload_to="input/")
    microbialfile = models.FileField(upload_to="input/")

class SimulationStats(models.Model):
    id = models.IntegerField(primary_key= True, auto_created= True,)
    simulation = models.ForeignKey('Simulation', on_delete=models.CASCADE,)
    bacteria_population = models.BigIntegerField()
    phage_population = models.BigIntegerField()

# The following are parameters for the file.     
    # #SIMULATIONS#
    # "Random Seed": None,
    # "Number Simulations": None,
    # "Iterations": None,
    # "Iterations Outgrowth": None,
    # "Log Interval": None,
    # "Log Sample Genomes": [],
    
    # #WORLD#
    # "World Size": None,
    # "World Type":None,
    # "Environmental Diffusion": None,
    # "Antibiotic Degradation Lambda RIF": None,
    # "Antibiotic Degradation Lambda STR": None,
    # "Antibiotic Degradation Lambda QUIN": None,
    # "Free Phage Degradation Lambda": None,
                    
    # #ANTIBIOTICS#
    # "Max Antibiotic Concentration RIF": None,
    # "Max Antibiotic Concentration STR": None,
    # "Max Antibiotic Concentration QUIN": None,                  
    # "Antibiotic Times RIF": [],
    # "Antibiotic Times STR": [],
    # "Antibiotic Times QUIN": [],
    
    # "Antibiotic Exposure Structured Environments": None,
    # "Death Curve A": None,
    # "Death Curve B": None,
    # "Death Curve M": None,
    
    # #BACTERIA#
    # "Number Genes": None,
    # "Minimum Gene Size": None,
    # "Maximum Gene Size": None,
    # "Possible Receptors": None,
    # "Resistance Phage Receptor Mutation Probability": None,
    # "Resistance Phage CRISPR Mutation Probability": None,
    # "Resistance Phage Cost": None, 
    # "Gene Loss Probability": None,

    # #ARGS#
    # "ARG Mutation Probability": None,
    # "ARG Rif Cost": None,
    # "ARG Str Cost": None,
    # "ARG Quin Cost": None,
    
    # #PHAGES#
    # "Phage Carrying Capacity": None,
    # "Abortive Infection Probability": None,                  
    # "Phage Receptor Mutation Probability": None,
    # "Phage CRISPR Mutation Probability": None,
    # "Phage Host Range Mutation Probability": None,
    # "Phage Recombination Probability": None,
    # "Burst Probability": None,                          
    # "Curing Probability": None,
    # "Specialized Transduction Genomic Distance": None,
    # "Infection Distance": None,
    
    # "Failed Phage Infection DNA Prophage Integration":None,
    # "Failed Phage Infection DNA Chromosome Integration":None,