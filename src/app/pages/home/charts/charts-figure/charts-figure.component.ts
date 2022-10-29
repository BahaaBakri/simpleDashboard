import { Component, Inject, NgZone, PLATFORM_ID, Input, AfterViewInit} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {Option} from '../charts.component'
// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'charts-figure',
  templateUrl: './charts-figure.component.html',
  styleUrls: ['./charts-figure.component.scss']
})
export class ChartsFigureComponent implements AfterViewInit {

  private chart: am4charts.XYChart | undefined;
  @Input() selectedOption:Option | undefined

  constructor(@Inject(PLATFORM_ID) private platformId: any, private zone: NgZone) {
  }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }
  ngAfterViewInit() {
    // Chart code goes in here
    console.log('DO CHECK');
    
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      const chart = am4core.create('chartdiv', am4charts.XYChart);

      chart.paddingRight = 20;

      const data = [];
      let visits1 = 10;
      let visits2 = 10;
      for (let i = 1; i < 31; i++) {
        visits1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        visits2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({ date1: new Date(2018, 0, i), name1: 'name' + i, value1: visits1,
        date2: new Date(2018, 0, i), name2: 'name' + i, value2: visits2,
      });
      }

      chart.data = data;

      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      const valueAxis:any = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;
      valueAxis.baseValue = 0;

      const series1 = chart.series.push(new am4charts.LineSeries());
      // eslint-disable-next-line quotes
      series1.dataFields.dateX = "date1";
      series1.dataFields.valueY = 'value1';
      series1.tooltipText = '{valueY.value}';
      series1.smoothing = 'monotoneX';
      series1.fillOpacity = 0.3;
      // series1.fill = am4core.color('#84e6f1')

      const series2 = chart.series.push(new am4charts.LineSeries());
      series2.dataFields.dateX = 'date2';
      series2.dataFields.valueY = 'value2';
      series2.tooltipText = '{valueY.value}';
      series2.smoothing = 'monotoneX';
      series2.fillOpacity = 0.3;
      // series1.fill = am4core.color('#c8afff')

      chart.cursor = new am4charts.XYCursor();
      chart.colors.list = [
        am4core.color('#84e6f1'),
        am4core.color('#c8afff')
      ];

      const scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series1);
      scrollbarX.series.push(series2);
      chart.scrollbarX = scrollbarX;

      this.chart = chart;
    });
  }
  onSelectOption(option:Option) {
    this.selectedOption = option
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
