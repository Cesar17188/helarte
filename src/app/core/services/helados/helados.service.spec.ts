import { TestBed } from '@angular/core/testing';

import { HeladosService } from './helados.service';

describe('HeladosService', () => {
  let service: HeladosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeladosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
