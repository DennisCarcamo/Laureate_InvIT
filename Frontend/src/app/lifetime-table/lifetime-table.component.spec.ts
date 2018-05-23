import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifetimeTableComponent } from './lifetime-table.component';

describe('LifetimeTableComponent', () => {
  let component: LifetimeTableComponent;
  let fixture: ComponentFixture<LifetimeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifetimeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifetimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
