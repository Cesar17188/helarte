import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArepaFormComponent } from './arepa-form.component';

describe('ArepaFormComponent', () => {
  let component: ArepaFormComponent;
  let fixture: ComponentFixture<ArepaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArepaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArepaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
