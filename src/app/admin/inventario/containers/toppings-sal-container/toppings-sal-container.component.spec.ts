import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingsSalContainerComponent } from './toppings-sal-container.component';

describe('ToppingsSalContainerComponent', () => {
  let component: ToppingsSalContainerComponent;
  let fixture: ComponentFixture<ToppingsSalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppingsSalContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingsSalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
