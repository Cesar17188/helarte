import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCafesComponent } from './lista-cafes.component';

describe('ListaCafesComponent', () => {
  let component: ListaCafesComponent;
  let fixture: ComponentFixture<ListaCafesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCafesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCafesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
