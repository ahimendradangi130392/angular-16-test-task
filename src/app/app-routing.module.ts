import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighchartComponent } from './highchart/highchart.component';

const routes: Routes = [
  {path:'' , component: HighchartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
