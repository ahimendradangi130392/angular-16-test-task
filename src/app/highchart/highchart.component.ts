import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.scss'],
})
export class HighchartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;
  selectedChecbox = false;
  startYear: number = 1977;
  endYear: number = 2025;

  chartOptions: Highcharts.Options | any
  selectedOption: string = "Gross Domestic Product";
  selectedOption2: string = "Gross Domestic Product";
  selectedTargetYear: any = '1';
  selectedDiscription: string = 'line';
  releaseBy: string = 'Quarter'
  xAxisCategories: any[] = [];
  myComponent  = [
    {name : "Angelica", position : "Ramos", office : "Chief Executive Officer (CEO)", startDate : "London", salary: "$1,200,000"},
    {name : "Bradley", position : "Ramos", office : "Chief Executive Officer (CEO)", startDate : "Paris", salary: "$1,200,000"},
    {name : "Brielle", position : "Ramos", office : "Chief Executive Officer (CEO)", startDate : "Tokyo", salary: "$1,200,000"},
    {name : "Bruno", position : "Ramos", office : "Chief Executive Officer (CEO)", startDate : "San Francisco", salary: "$1,200,000"},
    {name : "Caesar", position : "Ramos", office : "Chief Executive Officer (CEO)", startDate : "New York", salary: "$1,200,000"},
  ];
  checkboxValues: { [key: number]: boolean } = {};
  constructor() {
    this.checkboxValues[1] = false;
    this.checkboxValues[2] = true;
    this.checkboxValues[3] = false;
    this.checkboxValues[4] = false;
  }

  ngOnInit() {
    this.highChartOptions(this.selectedOption + ' for t + ' + this.selectedTargetYear);
  }

  switchTab(selectedTabLink: HTMLAnchorElement, tabContentId: string): void {
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    selectedTabLink.classList.add('active');
    document.querySelectorAll('.tab-pane').forEach(tab => tab.classList.remove('show', 'active'));
    document.getElementById(tabContentId)?.classList.add('show', 'active');
    if (tabContentId == 'tab-2-content') {
      this.selectedChecbox = true;
      this.highChartOptions(this.selectedOption)
    } else {
      this.selectedChecbox = false;
      this.highChartOptions(this.selectedOption + ' for t + ' + this.selectedTargetYear)
    }
  }

  variableChange(event: Event): void {
    this.highChartOptions(this.selectedOption + ' for t + ' + this.selectedTargetYear)
  }

  targetYearChange(event: Event | any): void {
    this.highChartOptions(this.selectedOption + ' for t + ' + this.selectedTargetYear)
  }

  discriptionChange(event: Event | any): void {
    this.highChartOptions(this.selectedOption + ' for t + ' + this.selectedTargetYear)
  }

  releaseByChange(event: Event | any): void {
    this.highChartOptions(this.selectedOption + ' for t + ' + this.selectedTargetYear)
  }

  selectAll() {
    const allSelected = Object.values(this.checkboxValues).every(value => value);
    for (const key in this.checkboxValues) {
      if (this.checkboxValues.hasOwnProperty(key)) {
        this.checkboxValues[key] = !allSelected;
      }
    }

    this.highChartOptions(this.selectedOption + ' for t + ' + this.selectedTargetYear)
  }

  checkboxChange(): void {
    this.highChartOptions(this.selectedOption + ' for t + ' + this.selectedTargetYear)
  }
  getSelectedValues(): string {
    const selectedValues = Object.entries(this.checkboxValues)
      .filter(([key, value]) => value)
      .map(([key]) => key);
    return selectedValues.join(',');
  }

  receiveDataFromChild(event: any): void {
    this.startYear = event.fromValue;
    this.endYear = event.toValue;
    this.xAxisCategories = this.generateDataPoints();
    this.highChartOptions(this.selectedOption + ' for t + ' + this.selectedTargetYear)
  }


  generateDataPoints(): any[] {
    const institute = 'A';
    let v1 = this.startYear;
    const v2 = this.endYear;
    const vintage = 'V1';

    // Ensure v1 is a multiple of 10
    v1 -= v1 % 10;

    // Generate an array of objects
    const outputArray = [];
    for (let year = v1; year <= v2; year += 10) {
      const dataPoint = {
        institute: institute,
        year: year,
        value: Math.floor(Math.random() * 100) + 100, // Replace with your actual value calculation
        vintage: vintage
      };
      outputArray.push(dataPoint);
    }

    return outputArray;
  }

  highChartOptions(title?: string) {
    const xAxisCategories = this.generateXAxisCategories(this.startYear, this.endYear);
    const seriesData = this.generateRandomData(xAxisCategories.length);
    this.chartOptions = {
      title: {
        text: title ? title : this.selectedOption,
        align: 'left',
        y: 14,
        x: 30,
      },
      subtitle: {
        text: 'Released in:' + this.releaseBy + ' ' + this.getSelectedValues(),
        align: 'left',
        y: 35,
        x: 30,
      },
      chart: {
        type: this.selectedDiscription,
        zoomType: 'x', // Enable zoom along the x-axis
        panning: true, // Enable panning
        panKey: 'shift' // Hold down the shift key to pan
      },
      xAxis: {
        title: { text: 'Projected Year' },
        categories: xAxisCategories,
      },
      yAxis: {
        title: {
          text: 'Percent',
        },
      },
      series: [{
        name: ' observed (first release)',
        data: seriesData
      }],
      plotOptions: {
        line: {
          marker: {
            enabled: true
          }
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'up'
      },
      exporting: {
        enabled: true,
        buttons: {
          contextButton: {
            menuItems: ['downloadPNG']
          }
        }
      }
    };
  }


  generateRandomData(length: number) {
    var data = [];
    for (var i = 0; i < length; i++) {
      data.push(Math.floor(Math.random() * 100));
    }
    return data;
  }

  generateXAxisCategories(startYear: any, endYear: any) {
    var categories = [];
    for (let year = Math.ceil(startYear / 10) * 10; year <= endYear; year += 10) {
      categories.push(year);
    }
    return categories;
  }

}
