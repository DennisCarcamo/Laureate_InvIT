import { TestBed } from '@angular/core/testing';

import { BitlyApiService } from '../../bitly-api.service';

describe('BitlyApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitlyApiService = TestBed.get(BitlyApiService);
    expect(service).toBeTruthy();
  });
});
