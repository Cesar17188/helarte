import { TestBed } from '@angular/core/testing';

import { ToppingDulceService } from './topping-dulce.service';

describe('ToppingDulceService', () => {
  let service: ToppingDulceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToppingDulceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
