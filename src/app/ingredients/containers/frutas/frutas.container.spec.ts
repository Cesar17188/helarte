import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasContainer } from './frutas.container';

describe('FrutasComponent', () => {
  let component: FrutasContainer;
  let fixture: ComponentFixture<FrutasContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrutasContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutasContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
