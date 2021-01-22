import { TestBed } from '@angular/core/testing';

import { SyrupsService } from './syrups.service';

describe('SyrupsService', () => {
  let service: SyrupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyrupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
