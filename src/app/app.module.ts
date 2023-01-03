import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedComponent} from './shared/shared.component';
import {HomeComponent} from './layout/home/home.component';
import {NgChartsConfiguration, NgChartsModule} from "ng2-charts";
import {NgbModule, NgbNavConfig, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {LineChartComponent} from './layout/line-chart/line-chart.component';
import {RadarChartComponent} from './layout/radar-chart/radar-chart.component';
import {PolarAreaChartComponent} from './layout/polar-area-chart/polar-area-chart.component';
import {FinancialChartComponent} from './layout/donut-chart/donut-chart.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {ScatterChartComponent} from './layout/scatter-chart/scatter-chart.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HomeComponent,
    LineChartComponent,
    RadarChartComponent,
    PolarAreaChartComponent,
    FinancialChartComponent,
    ScatterChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    NgChartsModule,
    NgbNavModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NgChartsConfiguration,
      useValue: {
        generateColors: false }
    },
    {
      provide: NgbNavConfig,
      useValue: {
        destroyOnHide: false,
        roles: false
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
