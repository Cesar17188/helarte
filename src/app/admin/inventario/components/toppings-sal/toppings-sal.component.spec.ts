import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingsSalComponent } from './toppings-sal.component';

describe('ToppingsSalComponent', () => {
  let component: ToppingsSalComponent;
  let fixture: ComponentFixture<ToppingsSalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppingsSalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingsSalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
