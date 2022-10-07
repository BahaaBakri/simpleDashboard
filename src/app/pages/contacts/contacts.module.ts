import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContactsComponent } from './main-contacts/main-contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';



@NgModule({
  declarations: [
    MainContactsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
