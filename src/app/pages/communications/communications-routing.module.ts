import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCommunicationsComponent } from './main-communications/main-communications.component';

const routes: Routes = [
  {
    path:'',
    component:MainCommunicationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationsRoutingModule { }