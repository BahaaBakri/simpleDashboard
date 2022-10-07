import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDataComponent } from './main-data/main-data.component';
import { DataRoutingModule } from './data-routing.module';



@NgModule({
  declarations: [
    MainDataComponent
  ],
  imports: [
    CommonModule,
    DataRoutingModule
  ]
})
export class DataModule { }
