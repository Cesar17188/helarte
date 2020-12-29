import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladoFormComponent } from './helado-form.component';

describe('HeladoFormComponent', () => {
  let component: HeladoFormComponent;
  let fixture: ComponentFixture<HeladoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeladoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeladoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
