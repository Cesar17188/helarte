import { TestBed } from '@angular/core/testing';

import { InventarioSyrupsService } from './inventario-syrups.service';

describe('InventarioSyrupsService', () => {
  let service: InventarioSyrupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioSyrupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
