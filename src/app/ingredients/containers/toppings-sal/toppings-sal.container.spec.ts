import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingsSalContainer } from './toppings-sal.container';

describe('ToppingsSalComponent', () => {
  let component: ToppingsSalContainer;
  let fixture: ComponentFixture<ToppingsSalContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppingsSalContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingsSalContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
