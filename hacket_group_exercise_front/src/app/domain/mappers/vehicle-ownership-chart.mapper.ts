import {VehicleOwnership} from "../../core/models/vehicle-ownership.model";
import {ChartData} from "../interfaces/chart.interface";

export const vehicleOwnershipChartMapper = (data: VehicleOwnership[]): ChartData => {
  const datasetLabels: string[] = [];
  const datasets: number[] = [];
  data.forEach(vehicleOwnership => {
    datasetLabels.push(
      vehicleOwnership.vehiclesAvailable
    );
    datasets.push(
      vehicleOwnership.percentage
    )
  });

  return {
    datasets: [{
      data: datasets
    }],
    labels: datasetLabels,
  };
}
