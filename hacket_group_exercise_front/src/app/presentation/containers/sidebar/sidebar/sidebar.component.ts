import { Component } from '@angular/core';
import { SidebarOptionComponent } from '../sidebar-option/sidebar-option.component';
import { SidebarOption } from '../../../interfaces/sidebar-option';
import { PopulationChartComponent } from '../../../components/population-chart/population-chart.component';
import { VehicleOwnershipChartComponent } from '../../../components/vehicle-ownership-chart/vehicle-ownership-chart.component';
import { SidebarFooterComponent } from '../sidebar-footer/sidebar-footer.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SidebarOptionComponent,
    PopulationChartComponent,
    VehicleOwnershipChartComponent,
    SidebarFooterComponent,
    RouterLink,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  options: SidebarOption[] = [
    { icon: 'home', name: 'Dashboard', active: true, path: '/home/dashboard' },
    { icon: 'users', name: 'Accounts', active: false, path: '/home/accounts' },
    { icon: 'sync', name: 'Activities', active: false, path: '/home/activities' },
  ];

  constructor(private router: Router) {}

  selectItem(selectedOption: SidebarOption): void {
    this.options = this.options.map(option => ({
      ...option,
      active: option.name === selectedOption.name,
    }));
    this.router.navigateByUrl(selectedOption.path);
  }
}
