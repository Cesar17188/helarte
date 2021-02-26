import { TestBed } from '@angular/core/testing';

import { InventarioSaboresService } from './inventario-sabores.service';

describe('InventarioSaboresService', () => {
  let service: InventarioSaboresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioSaboresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
