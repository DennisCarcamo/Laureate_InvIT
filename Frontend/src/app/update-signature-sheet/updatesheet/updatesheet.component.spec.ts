import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesheetComponent } from './updatesheet.component';

describe('UpdatesheetComponent', () => {
  let component: UpdatesheetComponent;
  let fixture: ComponentFixture<UpdatesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
