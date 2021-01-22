import { TestBed } from '@angular/core/testing';

import { ToppingsDulceService } from './toppings-dulce.service';

describe('ToppingsDulceService', () => {
  let service: ToppingsDulceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToppingsDulceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
