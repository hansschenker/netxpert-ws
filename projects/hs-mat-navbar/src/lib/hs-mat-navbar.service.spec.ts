import { TestBed } from '@angular/core/testing';

import { HsMatNavbarService } from './hs-mat-navbar.service';

describe('HsMatNavbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HsMatNavbarService = TestBed.get(HsMatNavbarService);
    expect(service).toBeTruthy();
  });
});
