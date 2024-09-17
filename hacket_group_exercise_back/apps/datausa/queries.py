from graphene import ObjectType, List

from apps.datausa.resolvers import resolve_population_data, resolve_vehicle_ownership_data
from apps.datausa.types import PopulationType, VehicleOwnershipType


class DataUSAQuery(ObjectType):
    population = List(PopulationType)
    vehicle_ownership = List(VehicleOwnershipType)

    def resolve_population(self, info):
        return resolve_population_data()

    def resolve_vehicle_ownership(self, info):
        return resolve_vehicle_ownership_data()
