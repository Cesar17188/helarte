import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CremaFormComponent } from './crema-form.component';

describe('CremaFormComponent', () => {
  let component: CremaFormComponent;
  let fixture: ComponentFixture<CremaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CremaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CremaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
