import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContactsComponent } from './main-contacts/main-contacts.component';

const routes: Routes = [
  {
    path:'',
    component:MainContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }