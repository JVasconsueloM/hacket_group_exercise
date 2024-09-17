import { Component, input, isDevMode, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [],
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss',
})
export class SvgIconComponent implements OnInit {
  folder = input('icons');
  name = input.required<string>();
  iconContent: SafeHtml = '';

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadIcon();
  }

  async loadIcon(): Promise<void> {
    const prefix = isDevMode() ? '' : 'static';

    const iconUrl = `${prefix}/assets/${this.folder()}/${this.name()}.svg`;

    try {
      const svgContent: string = await lastValueFrom(this.http.get(iconUrl, { responseType: 'text' }));

      this.iconContent = this.sanitizer.bypassSecurityTrustHtml(svgContent);
    } catch (error) {
      console.error(`Error loading SVG icon: ${error}`);
    }
  }
}
