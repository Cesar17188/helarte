import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingsDulceComponent } from './toppings-dulce.component';

describe('ToppingsDulceComponent', () => {
  let component: ToppingsDulceComponent;
  let fixture: ComponentFixture<ToppingsDulceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppingsDulceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingsDulceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
