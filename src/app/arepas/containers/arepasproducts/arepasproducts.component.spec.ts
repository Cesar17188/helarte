import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArepasproductsComponent } from './arepasproducts.component';

describe('ArepasproductsComponent', () => {
  let component: ArepasproductsComponent;
  let fixture: ComponentFixture<ArepasproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArepasproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArepasproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
