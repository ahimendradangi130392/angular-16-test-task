import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartComponent } from './highchart/highchart.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { RangeSlideTwoComponent } from './range-slide-two/range-slide-two.component';
import { HighchartsChartModule } from 'highcharts-angular';
@NgModule({
  declarations: [
    AppComponent,
    HighchartComponent,
    HeaderComponent,
    RangeSliderComponent,
    RangeSlideTwoComponent
  ],
  imports: [
    MatTabsModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
