from graphene import ObjectType, String, Int, Float


class PopulationType(ObjectType):
    id_state = String()
    state = String()
    id_year = Int()
    year = String()
    population_amount = Int()
    slug_state = String()


class VehicleOwnershipType(ObjectType):
    id_year = Int()
    year = String()
    id_vehicles_available = Int()
    vehicles_available = String()
    commute_means_by_gender_moe = Float()
    percentage = Float()
