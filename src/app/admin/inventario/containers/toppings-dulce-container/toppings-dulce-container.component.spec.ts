import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingsDulceContainerComponent } from './toppings-dulce-container.component';

describe('ToppingsDulceContainerComponent', () => {
  let component: ToppingsDulceContainerComponent;
  let fixture: ComponentFixture<ToppingsDulceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppingsDulceContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingsDulceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
