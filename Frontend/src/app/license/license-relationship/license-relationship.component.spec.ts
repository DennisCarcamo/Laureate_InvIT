import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRelationshipComponent } from './license-relationship.component';

describe('LicenseRelationshipComponent', () => {
  let component: LicenseRelationshipComponent;
  let fixture: ComponentFixture<LicenseRelationshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseRelationshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
