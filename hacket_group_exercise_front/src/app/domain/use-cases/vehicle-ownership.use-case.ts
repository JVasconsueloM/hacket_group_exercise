import {DataUsaRepository} from "../../data/repositories/data-usa.repository";
import {ChartData} from "../interfaces/chart.interface";
import {Injectable} from "@angular/core";
import {VehicleOwnership} from "../../core/models/vehicle-ownership.model";
import {vehicleOwnershipChartMapper} from "../mappers/vehicle-ownership-chart.mapper";

@Injectable({
  providedIn: 'root'
})
export class VehicleOwnershipUseCase {
  constructor(private repository: DataUsaRepository) {
  }

  async fetchVehicleOwnershipInHouseholdsData(): Promise<ChartData> {
    const data = await this.repository.fetchVehicleOwnershipInHouseholdsData();
    return this.transformData(data);
  }

  private transformData(data: VehicleOwnership[]): ChartData {
    return vehicleOwnershipChartMapper(data)
  }
}
