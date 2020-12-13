import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyrupsContainer } from './syrups.container';

describe('SyrupsComponent', () => {
  let component: SyrupsContainer;
  let fixture: ComponentFixture<SyrupsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyrupsContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyrupsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
