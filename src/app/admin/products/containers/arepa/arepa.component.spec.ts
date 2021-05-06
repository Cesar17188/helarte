import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArepaComponent } from './arepa.component';

describe('ArepaComponent', () => {
  let component: ArepaComponent;
  let fixture: ComponentFixture<ArepaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArepaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
