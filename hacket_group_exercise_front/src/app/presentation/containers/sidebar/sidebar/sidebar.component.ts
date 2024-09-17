import {Component} from '@angular/core';
import {SidebarOptionComponent} from "../sidebar-option/sidebar-option.component";
import {SidebarOption} from "../../../interfaces/sidebar-option";
import {PopulationChartComponent} from "../../../components/population-chart/population-chart.component";
import {VehicleOwnershipChartComponent} from "../../../components/vehicle-ownership-chart/vehicle-ownership-chart.component";
import {SidebarFooterComponent} from "../sidebar-footer/sidebar-footer.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SidebarOptionComponent,
    PopulationChartComponent,
    VehicleOwnershipChartComponent,
    SidebarFooterComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  options: SidebarOption[] = [
    {icon: 'home', name: 'Dashboard', active: true},
    {icon: 'users', name: 'Accounts', active: false},
    {icon: 'sync', name: 'Activities', active: false},
  ]

  selectItem(selectedOption: SidebarOption): void {
    this.options = this.options.map(option => ({
      ...option,
      active: option.name === selectedOption.name
    }));
  }
}
