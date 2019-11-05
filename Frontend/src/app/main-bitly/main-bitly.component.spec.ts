import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBitlyComponent } from './main-bitly.component';

describe('MainBitlyComponent', () => {
  let component: MainBitlyComponent;
  let fixture: ComponentFixture<MainBitlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBitlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBitlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
