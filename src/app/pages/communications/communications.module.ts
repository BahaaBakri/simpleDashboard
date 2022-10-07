import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCommunicationsComponent } from './main-communications/main-communications.component';
import { CommunicationsRoutingModule } from './communications-routing.module';



@NgModule({
  declarations: [
    MainCommunicationsComponent
  ],
  imports: [
    CommonModule,
    CommunicationsRoutingModule
  ]
})
export class CommunicationsModule { }
