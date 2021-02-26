import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaboresContainerComponent } from './sabores-container.component';

describe('SaboresContainerComponent', () => {
  let component: SaboresContainerComponent;
  let fixture: ComponentFixture<SaboresContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaboresContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaboresContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
