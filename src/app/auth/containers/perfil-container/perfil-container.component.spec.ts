import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilContainerComponent } from './perfil-container.component';

describe('PerfilContainerComponent', () => {
  let component: PerfilContainerComponent;
  let fixture: ComponentFixture<PerfilContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
