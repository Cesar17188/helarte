import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaShakesComponent } from './lista-shakes.component';

describe('ListaShakesComponent', () => {
  let component: ListaShakesComponent;
  let fixture: ComponentFixture<ListaShakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaShakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaShakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
