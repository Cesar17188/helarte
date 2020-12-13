import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingSalComponent } from './topping-sal.component';

describe('ToppingSalComponent', () => {
  let component: ToppingSalComponent;
  let fixture: ComponentFixture<ToppingSalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppingSalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingSalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
