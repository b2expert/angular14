import { TestBed } from '@angular/core/testing';

import { B2eGridService } from './b2e-grid.service';

describe('B2eGridService', () => {
  let service: B2eGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(B2eGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
