import { TestBed, inject } from '@angular/core/testing';

import { SearchEmployeeService } from './search-employee.service';

describe('SearchEmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchEmployeeService]
    });
  });

  it('should be created', inject([SearchEmployeeService], (service: SearchEmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
