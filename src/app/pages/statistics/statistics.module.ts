import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainStatisticsComponent } from './main-statistics/main-statistics.component';
import { StatisticsRoutingModule } from './statistics-routing.module';



@NgModule({
  declarations: [
    MainStatisticsComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }
