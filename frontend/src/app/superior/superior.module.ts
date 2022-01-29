import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';



@NgModule({
  declarations: [
    NewUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewUserComponent
  ]
})
export class SuperiorModule { }
