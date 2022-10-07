import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCommunityComponent } from './main-community/main-community.component';
import { CommunityRoutingModule } from './community-routing.module';



@NgModule({
  declarations: [
    MainCommunityComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule
  ]
})
export class CommunityModule { }
