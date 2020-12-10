import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrepesproductsContainer } from './crepesproducts.container';

describe('CrepesproductsComponent', () => {
  let component: CrepesproductsContainer;
  let fixture: ComponentFixture<CrepesproductsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrepesproductsContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrepesproductsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
