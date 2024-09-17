import { ComponentFixture, TestBed } from '@angular/core/testing';

import { imageComponent } from './image.component';

describe('SvgIconComponent', () => {
  let component: imageComponent;
  let fixture: ComponentFixture<imageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [imageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(imageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
