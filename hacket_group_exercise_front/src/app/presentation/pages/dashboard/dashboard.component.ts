import {Component} from '@angular/core';
import {
  VehicleOwnershipChartComponent
} from "../../components/vehicle-ownership-chart/vehicle-ownership-chart.component";
import {PopulationChartComponent} from "../../components/population-chart/population-chart.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    VehicleOwnershipChartComponent,
    PopulationChartComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export default class DashboardComponent {
}
