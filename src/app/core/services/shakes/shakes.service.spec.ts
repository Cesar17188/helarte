import { TestBed } from '@angular/core/testing';

import { ShakesService } from './shakes.service';

describe('ShakesService', () => {
  let service: ShakesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShakesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
