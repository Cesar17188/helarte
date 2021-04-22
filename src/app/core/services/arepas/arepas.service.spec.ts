import { TestBed } from '@angular/core/testing';

import { ArepasService } from './arepas.service';

describe('ArepasService', () => {
  let service: ArepasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArepasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
