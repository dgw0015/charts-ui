import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./layout/home/home.component";
import {LineChartComponent} from "./layout/line-chart/line-chart.component";
import {RadarChartComponent} from "./layout/radar-chart/radar-chart.component";
import {PolarAreaChartComponent} from "./layout/polar-area-chart/polar-area-chart.component";
import {FinancialChartComponent} from "./layout/donut-chart/donut-chart.component";
import {ScatterChartComponent} from "./layout/scatter-chart/scatter-chart.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'line-chart',
    component: LineChartComponent,
  },
  {
    path: 'radar-chart',
    component: RadarChartComponent,
  },
  {
    path: 'polar-area-chart',
    component: PolarAreaChartComponent,
  },
  {
    path: 'doughnut-chart',
    component: FinancialChartComponent,
  },
  {
    path: 'scatter-chart',
    component: ScatterChartComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
