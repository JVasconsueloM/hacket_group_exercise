import { Component, computed, input, isDevMode } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class imageComponent {
  extension = input('png');
  name = input.required<string>();
  src = computed(() => {
    const prefix = isDevMode() ? '' : 'static';
    return `${prefix}/assets/images/${this.name()}.${this.extension()}`;
  });
}
