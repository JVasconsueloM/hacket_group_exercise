from apps.datausa.types import PopulationType, VehicleOwnershipType
from apps.utils.client import Client


def resolve_population_data():
    response = Client().get(
        params={
            "drilldowns": "State",
            "measures": "Population",
            "year": "2013,2014,2015,2016,2017,2018,2019,2020,2021",
        }
    )
    data = response.get("data", [])

    results = [
        PopulationType(
            id_state=item.get("ID State", None),
            state=item.get("State", None),
            id_year=item.get("ID Year", None),
            year=item.get("Year", None),
            population_amount=item.get("Population", None),
            slug_state=item.get("Slug State", None)
        )
        for item in data if item['State'] in ['Alabama', 'Florida', 'California']
    ]
    return results


def resolve_vehicle_ownership_data():
    response = Client().get(
        params={
            "measure": "Commute Means by Gender Moe",
            "geo": "01000US01000US",
            "drilldowns": "Vehicles Available",
            "year": "2021",
        }
    )

    data = response.get("data", [])

    total_moe = sum(item["Commute Means by Gender Moe"] for item in data)
    results = []

    for item in data:
        id_year = item.get("ID Year", None)
        year = item.get("Year", None)
        id_vehicles_available = item.get("ID Vehicles Available", None)
        vehicles_available = item.get("Vehicles Available", None)
        commute_means_by_gender_moe = item.get("Commute Means by Gender Moe", 0)
        percentage = round((commute_means_by_gender_moe / total_moe) * 100, 2)

        results.append(
            VehicleOwnershipType(
                id_year=id_year,
                year=year,
                id_vehicles_available=id_vehicles_available,
                vehicles_available=vehicles_available,
                commute_means_by_gender_moe=commute_means_by_gender_moe,
                percentage=percentage,
            )
        )
    return results
