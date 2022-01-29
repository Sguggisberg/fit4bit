import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { SuperiorRoutingModule } from './superior-routing.module';



@NgModule({
  declarations: [
    NewUserComponent
  ],
  imports: [
    CommonModule,
    SuperiorRoutingModule
  ],
  exports: [
    NewUserComponent
  ]
})
export class SuperiorModule { }
