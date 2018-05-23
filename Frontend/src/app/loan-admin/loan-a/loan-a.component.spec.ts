import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAComponent } from './loan-a.component';

describe('LoanAComponent', () => {
  let component: LoanAComponent;
  let fixture: ComponentFixture<LoanAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
