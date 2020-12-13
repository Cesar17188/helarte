import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaboresContainer } from './sabores.container';

describe('SaboresComponent', () => {
  let component: SaboresContainer;
  let fixture: ComponentFixture<SaboresContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaboresContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaboresContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
