import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrepeDetailComponent } from './crepe-detail.component';

describe('CrepeDetailComponent', () => {
  let component: CrepeDetailComponent;
  let fixture: ComponentFixture<CrepeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrepeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrepeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
