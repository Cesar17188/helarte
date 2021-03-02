import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CremaContainerComponent } from './crema-container.component';

describe('CremaContainerComponent', () => {
  let component: CremaContainerComponent;
  let fixture: ComponentFixture<CremaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CremaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CremaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
