import { VehicleOwnership } from '../../core/models/vehicle-ownership.model';
import { Injectable } from '@angular/core';
import { ChartData } from '../interfaces/chart.interface';

@Injectable({
  providedIn: 'root',
})
export class VehicleOwnershipChartMapper {
  toChartData(data: VehicleOwnership[]): ChartData {
    const datasetLabels: string[] = [];
    const datasets: number[] = [];

    data.forEach(vehicleOwnership => {
      datasetLabels.push(vehicleOwnership.vehiclesAvailable);
      datasets.push(vehicleOwnership.percentage);
    });

    return {
      datasets: [
        {
          data: datasets,
        },
      ],
      labels: datasetLabels,
    };
  }
}
