import { TestBed } from '@angular/core/testing';

import { InventarioToppingDulceService } from './inventario-topping-dulce.service';

describe('InventarioToppingDulceService', () => {
  let service: InventarioToppingDulceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioToppingDulceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
