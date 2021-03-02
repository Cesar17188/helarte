import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CremaComponent } from './crema.component';

describe('CremaComponent', () => {
  let component: CremaComponent;
  let fixture: ComponentFixture<CremaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CremaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CremaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
