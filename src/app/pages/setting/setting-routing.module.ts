import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSettingComponent } from './main-setting/main-setting.component';

const routes: Routes = [
  {
    path:'',
    component:MainSettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }