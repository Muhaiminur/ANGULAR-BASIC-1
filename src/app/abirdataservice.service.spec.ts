import { TestBed } from '@angular/core/testing';

import { AbirdataserviceService } from './abirdataservice.service';

describe('AbirdataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbirdataserviceService = TestBed.get(AbirdataserviceService);
    expect(service).toBeTruthy();
  });
});
