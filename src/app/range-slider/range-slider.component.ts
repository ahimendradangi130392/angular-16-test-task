// range-slider.component.ts
import { Component, ElementRef, AfterViewInit, Output, EventEmitter, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
})
export class RangeSliderComponent implements OnInit {
  @Output() dataToParent:EventEmitter<any> = new EventEmitter();
  startYear:number =  1977;
  endYear:number =  2025;
  constructor(private el: ElementRef) {
    
  }

  ngOnInit() {
    $('#one-range').ionRangeSlider({
      type: "double",
      grid: true,
      grid_num: 0,
      min: 0,
      max: 24,
      from: 2,
      to: 8,
      values: [1965, 1971, 1977, 1983, 1995, 2001, 2007, 2019, 2025],
      prefix: "",
      values_separator: " to ",
      decorate_both: true,
      force_edges: true,
      grid_snap: true,
      min_interval: 1,
      onStart: (data: any) => {
        this.startYear = data.from_value;
        this.endYear = data.to_value;
        this.dataToParent.emit({fromValue:this.startYear,toValue:this.endYear})
      },
      onChange: (data: any) => {
        // console.log("onChange: ", data);
      },
      onFinish: (data: any) => {
        this.startYear = data.from_value;
        this.endYear = data.to_value;
        this.dataToParent.emit({fromValue:this.startYear,toValue:this.endYear})
      },
      onUpdate: (data: any) => {
        // console.log("onUpdate: ", data);
      }
    });

  }
}
