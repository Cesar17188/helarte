import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrepeFormComponent } from './crepe-form.component';

describe('CrepeFormComponent', () => {
  let component: CrepeFormComponent;
  let fixture: ComponentFixture<CrepeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrepeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrepeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
