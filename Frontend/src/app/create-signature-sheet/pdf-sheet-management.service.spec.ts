import { TestBed, inject } from '@angular/core/testing';

import { PdfSheetManagementService } from './pdf-sheet-management.service';

describe('PdfSheetManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PdfSheetManagementService]
    });
  });

  it('should be created', inject([PdfSheetManagementService], (service: PdfSheetManagementService) => {
    expect(service).toBeTruthy();
  }));
});
