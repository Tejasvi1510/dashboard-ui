import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearfilterchartComponent } from './yearfilterchart.component';

describe('YearfilterchartComponent', () => {
  let component: YearfilterchartComponent;
  let fixture: ComponentFixture<YearfilterchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearfilterchartComponent]
    });
    fixture = TestBed.createComponent(YearfilterchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
