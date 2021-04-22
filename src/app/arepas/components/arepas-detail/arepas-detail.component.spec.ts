import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArepasDetailComponent } from './arepas-detail.component';

describe('ArepasDetailComponent', () => {
  let component: ArepasDetailComponent;
  let fixture: ComponentFixture<ArepasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArepasDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArepasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
