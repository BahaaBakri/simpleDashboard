import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCommunityComponent } from './main-community/main-community.component';

const routes: Routes = [
  {
    path:'',
    component:MainCommunityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }