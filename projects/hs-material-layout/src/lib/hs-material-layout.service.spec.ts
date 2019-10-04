import { TestBed } from '@angular/core/testing';

import { HsMaterialLayoutService } from './hs-material-layout.service';

describe('HsMaterialLayoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HsMaterialLayoutService = TestBed.get(HsMaterialLayoutService);
    expect(service).toBeTruthy();
  });
});
