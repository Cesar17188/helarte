import { TestBed } from '@angular/core/testing';

import { CrepesService } from './crepes.service';

describe('CrepesService', () => {
  let service: CrepesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrepesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
