import { Injectable } from '@angular/core';
import { GraphqlService } from '../services/graphql.service';
import { vehicleOwnershipQuery } from '../queries/vehicle-ownership.query';
import { VehicleOwnership, VehicleOwnershipResponse } from '../../core/models/vehicle-ownership.model';
import { Population, PopulationResponse } from '../../core/models/population-data.model';
import { populationDataQuery } from '../queries/population-data.query';

@Injectable({
  providedIn: 'root',
})
export class DataUsaRepository {
  constructor(private graphql: GraphqlService) {}

  async fetchVehicleOwnershipInHouseholdsData(): Promise<VehicleOwnership[]> {
    const response = await this.graphql.executeQuery<VehicleOwnershipResponse>(vehicleOwnershipQuery);
    return response.vehicleOwnership;
  }

  async fetchPopulationData(): Promise<Population[]> {
    const response = await this.graphql.executeQuery<PopulationResponse>(populationDataQuery);
    return response.population;
  }
}
