import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakeproductsContainer } from './shakeproducts.container';

describe('ShakeproductsComponent', () => {
  let component: ShakeproductsContainer;
  let fixture: ComponentFixture<ShakeproductsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShakeproductsContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakeproductsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
