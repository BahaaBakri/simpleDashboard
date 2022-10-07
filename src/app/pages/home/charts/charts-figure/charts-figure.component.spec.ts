import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsFigureComponent } from './charts-figure.component';

describe('ChartsFigureComponent', () => {
  let component: ChartsFigureComponent;
  let fixture: ComponentFixture<ChartsFigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsFigureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
