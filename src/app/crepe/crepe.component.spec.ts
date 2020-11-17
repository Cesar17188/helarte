import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrepeComponent } from './crepe.component';

describe('CrepeComponent', () => {
  let component: CrepeComponent;
  let fixture: ComponentFixture<CrepeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrepeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrepeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
