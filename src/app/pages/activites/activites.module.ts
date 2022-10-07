import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainActivitesComponent } from './main-activites/main-activites.component';
import { ActivitesRoutingModule } from './activites-routing.module';



@NgModule({
  declarations: [
    MainActivitesComponent
  ],
  imports: [
    CommonModule,
    ActivitesRoutingModule
  ]
})
export class ActivitesModule { }
