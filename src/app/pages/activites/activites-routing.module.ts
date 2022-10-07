import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainActivitesComponent } from './main-activites/main-activites.component';

const routes: Routes = [
  {
    path:'',
    component:MainActivitesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitesRoutingModule { }
