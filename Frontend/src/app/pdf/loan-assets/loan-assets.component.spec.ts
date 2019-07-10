import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAssetsComponent } from './loan-assets.component';

describe('LoanAssetsComponent', () => {
  let component: LoanAssetsComponent;
  let fixture: ComponentFixture<LoanAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
