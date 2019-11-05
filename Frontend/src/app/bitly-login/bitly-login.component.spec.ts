import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitlyLoginComponent } from './bitly-login.component';

describe('BitlyLoginComponent', () => {
  let component: BitlyLoginComponent;
  let fixture: ComponentFixture<BitlyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitlyLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitlyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
