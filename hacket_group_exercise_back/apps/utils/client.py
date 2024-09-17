import requests

from apps.datausa.constants import POPULATION_URL


class Client:

    def __init__(self, url: str = None):
        self.url = url or POPULATION_URL

    def get(self, params):
        try:
            response = requests.get(self.url, params=params)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            print(f"Request failed: {e}")
            return {}
