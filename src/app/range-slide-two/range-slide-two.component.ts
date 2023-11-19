// range-slider-two.component.ts
import { Component, ElementRef, AfterViewInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-range-slide-two',
  templateUrl: './range-slide-two.component.html',
  styleUrls: ['./range-slide-two.component.scss']
})
export class RangeSlideTwoComponent {
  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    $('#two-range').ionRangeSlider({
      type: "double",
      grid: true,
      grid_num: 0,
      min: 0,
      max: 24,
      from: 8,
      to: 20,
      values: [1965, 1971, 1977, 1983, 1995, 2001, 2007, 2019, 2025],
      prefix: "",
      values_separator: " to ",
      // decorate_both: true,
      force_edges: true,
      grid_snap: true,
      min_interval: 1,
      onStart: function (data: any) {
        // console.log("onStart: ", data);
      },
      onChange: function (data: any) {
        // console.log("onChange: ", data);
      },
      onFinish: function (data: any) {
        // console.log("onFinish: ", data);
      },
      onUpdate: function (data: any) {
        // console.log("onUpdate: ", data);
      }
    });
  }
}
