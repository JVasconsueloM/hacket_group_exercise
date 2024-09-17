import { Component } from '@angular/core';
import { SidebarOptionComponent } from '../sidebar-option/sidebar-option.component';
import { SvgIconComponent } from '../../../components/svg-icon/svg-icon.component';
import { imageComponent } from '../../../components/image/image.component';

@Component({
  selector: 'app-sidebar-footer',
  standalone: true,
  imports: [SidebarOptionComponent, SvgIconComponent, imageComponent],
  templateUrl: './sidebar-footer.component.html',
  styleUrl: './sidebar-footer.component.scss',
})
export class SidebarFooterComponent {}
