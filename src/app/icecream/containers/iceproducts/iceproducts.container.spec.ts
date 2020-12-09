import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceproductsContainer } from './iceproducts.container';

describe('IceproductsComponent', () => {
  let component: IceproductsContainer;
  let fixture: ComponentFixture<IceproductsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IceproductsContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IceproductsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
