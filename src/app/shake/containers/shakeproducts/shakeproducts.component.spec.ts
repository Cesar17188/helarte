import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakeproductsComponent } from './shakeproducts.component';

describe('ShakeproductsComponent', () => {
  let component: ShakeproductsComponent;
  let fixture: ComponentFixture<ShakeproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShakeproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakeproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
