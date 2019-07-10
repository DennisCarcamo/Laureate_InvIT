import { TestBed, inject } from '@angular/core/testing';

import { PdfSheetService } from './pdf-sheet.service';

describe('PdfSheetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PdfSheetService]
    });
  });

  it('should be created', inject([PdfSheetService], (service: PdfSheetService) => {
    expect(service).toBeTruthy();
  }));
});
