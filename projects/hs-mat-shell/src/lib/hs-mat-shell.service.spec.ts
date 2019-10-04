import { TestBed } from '@angular/core/testing';

import { HsMatShellService } from './hs-mat-shell.service';

describe('HsMatShellService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HsMatShellService = TestBed.get(HsMatShellService);
    expect(service).toBeTruthy();
  });
});
