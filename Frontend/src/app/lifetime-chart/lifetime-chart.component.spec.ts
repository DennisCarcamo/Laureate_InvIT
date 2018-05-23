import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifetimeChartComponent } from './lifetime-chart.component';

describe('LifetimeChartComponent', () => {
  let component: LifetimeChartComponent;
  let fixture: ComponentFixture<LifetimeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifetimeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifetimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
