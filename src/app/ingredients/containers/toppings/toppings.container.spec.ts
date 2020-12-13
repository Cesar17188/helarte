import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingsContainer } from './toppings.container';

describe('ToppingsComponent', () => {
  let component: ToppingsContainer;
  let fixture: ComponentFixture<ToppingsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppingsContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
