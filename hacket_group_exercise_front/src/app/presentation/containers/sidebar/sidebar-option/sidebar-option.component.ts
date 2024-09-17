import { Component, input, output } from '@angular/core';
import { SvgIconComponent } from '../../../components/svg-icon/svg-icon.component';

@Component({
  selector: 'app-sidebar-option',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './sidebar-option.component.html',
  styleUrl: './sidebar-option.component.scss',
})
export class SidebarOptionComponent {
  iconName = input.required<string>();
  active = input.required<boolean>();
  click = output<void>();

  clickHandler(event: MouseEvent): void {
    event.stopPropagation();
    this.click.emit();
  }
}
