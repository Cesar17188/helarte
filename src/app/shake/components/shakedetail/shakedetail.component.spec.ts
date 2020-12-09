import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakedetailComponent } from './shakedetail.component';

describe('ShakedetailComponent', () => {
  let component: ShakedetailComponent;
  let fixture: ComponentFixture<ShakedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShakedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
