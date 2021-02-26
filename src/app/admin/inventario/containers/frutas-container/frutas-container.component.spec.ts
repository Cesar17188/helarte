import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasContainerComponent } from './frutas-container.component';

describe('FrutasContainerComponent', () => {
  let component: FrutasContainerComponent;
  let fixture: ComponentFixture<FrutasContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrutasContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutasContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
