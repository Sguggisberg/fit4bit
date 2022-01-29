import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { SuperiorRoutingModule } from './superior-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewUserComponent
  ],
  imports: [
    CommonModule,
    SuperiorRoutingModule,
    MaterialModule,
    ReactiveFormsModule

  ],
  exports: [
    NewUserComponent
  ]
})
export class SuperiorModule { }
