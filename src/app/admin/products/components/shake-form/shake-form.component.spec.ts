import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakeFormComponent } from './shake-form.component';

describe('ShakeFormComponent', () => {
  let component: ShakeFormComponent;
  let fixture: ComponentFixture<ShakeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShakeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
