import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyrupsContainerComponent } from './syrups-container.component';

describe('SyrupsContainerComponent', () => {
  let component: SyrupsContainerComponent;
  let fixture: ComponentFixture<SyrupsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyrupsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyrupsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
