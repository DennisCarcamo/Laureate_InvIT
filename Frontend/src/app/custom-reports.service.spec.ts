import { TestBed, inject } from '@angular/core/testing';

import { CustomReportsService } from './custom-reports.service';

describe('CustomReportsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomReportsService]
    });
  });

  it('should be created', inject([CustomReportsService], (service: CustomReportsService) => {
    expect(service).toBeTruthy();
  }));
});
