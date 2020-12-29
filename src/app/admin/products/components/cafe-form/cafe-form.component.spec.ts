import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeFormComponent } from './cafe-form.component';

describe('CafeFormComponent', () => {
  let component: CafeFormComponent;
  let fixture: ComponentFixture<CafeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
