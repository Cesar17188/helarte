import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHeladosComponent } from './lista-helados.component';

describe('ListaHeladosComponent', () => {
  let component: ListaHeladosComponent;
  let fixture: ComponentFixture<ListaHeladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaHeladosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHeladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
