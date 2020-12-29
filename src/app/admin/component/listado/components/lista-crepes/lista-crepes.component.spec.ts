import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCrepesComponent } from './lista-crepes.component';

describe('ListaCrepesComponent', () => {
  let component: ListaCrepesComponent;
  let fixture: ComponentFixture<ListaCrepesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCrepesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCrepesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
