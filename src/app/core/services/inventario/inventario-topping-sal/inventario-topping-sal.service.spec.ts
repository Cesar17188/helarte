import { TestBed } from '@angular/core/testing';

import { InventarioToppingSalService } from './inventario-topping-sal.service';

describe('InventarioToppingSalService', () => {
  let service: InventarioToppingSalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioToppingSalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
