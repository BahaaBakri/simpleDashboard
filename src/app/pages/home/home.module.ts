import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './main-home/main-home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { StatisticsComponent } from './statistics/statistics.component';
import { ChartsComponent } from './charts/charts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsFigureComponent } from './charts/charts-figure/charts-figure.component';



@NgModule({
  declarations: [
    MainHomeComponent,
    StatisticsComponent,
    ChartsComponent,
    ChartsFigureComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
