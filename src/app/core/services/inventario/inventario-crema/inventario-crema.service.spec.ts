import { TestBed } from '@angular/core/testing';

import { InventarioCremaService } from './inventario-crema.service';

describe('InventarioCremaService', () => {
  let service: InventarioCremaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioCremaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
