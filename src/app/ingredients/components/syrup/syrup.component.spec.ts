import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyrupComponent } from './syrup.component';

describe('SyrupComponent', () => {
  let component: SyrupComponent;
  let fixture: ComponentFixture<SyrupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyrupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyrupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
