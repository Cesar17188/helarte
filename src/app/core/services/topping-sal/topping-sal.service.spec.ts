import { TestBed } from '@angular/core/testing';

import { ToppingSalService } from './topping-sal.service';

describe('ToppingSalService', () => {
  let service: ToppingSalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToppingSalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
