import { TestBed } from '@angular/core/testing';

import { ToppingsSalService } from './toppings-sal.service';

describe('ToppingsSalService', () => {
  let service: ToppingsSalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToppingsSalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
