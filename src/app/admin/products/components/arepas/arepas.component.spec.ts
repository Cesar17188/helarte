import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArepasComponent } from './arepas.component';

describe('ArepasComponent', () => {
  let component: ArepasComponent;
  let fixture: ComponentFixture<ArepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArepasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
