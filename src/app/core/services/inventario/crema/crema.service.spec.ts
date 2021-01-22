import { TestBed } from '@angular/core/testing';

import { CremaService } from './crema.service';

describe('CremaService', () => {
  let service: CremaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CremaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
