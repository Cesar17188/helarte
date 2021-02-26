import { TestBed } from '@angular/core/testing';

import { InventarioFrutasService } from './inventario-frutas.service';

describe('InventarioFrutasService', () => {
  let service: InventarioFrutasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioFrutasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
