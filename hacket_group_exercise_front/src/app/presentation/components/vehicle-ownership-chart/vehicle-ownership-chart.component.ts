import { Component, OnInit, signal } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartDataSet } from '../../../domain/interfaces/chart.interface';
import { VehicleOwnershipUseCase } from '../../../domain/use-cases/vehicle-ownership.use-case';

@Component({
  selector: 'app-vehicle-ownership-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './vehicle-ownership-chart.component.html',
  styleUrl: './vehicle-ownership-chart.component.scss',
})
export class VehicleOwnershipChartComponent implements OnInit {
  datasets = signal<ChartDataSet[]>([]);
  chartOptions = {
    responsive: true,
  };

  constructor(private vehicleOwnershipUseCase: VehicleOwnershipUseCase) {}

  ngOnInit(): void {
    this.vehicleOwnershipUseCase.fetchVehicleOwnershipInHouseholdsData().then(({ datasets }) => {
      this.datasets.set(datasets);
    });
  }
}
