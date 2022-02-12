import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { SuperiorRoutingModule } from './superior-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewTrainingComponent } from './pages/new-training/new-training.component';
import { NewTraininTypComponent } from './pages/new-trainin-typ/new-trainin-typ.component';

@NgModule({
  declarations: [NewUserComponent, NewTrainingComponent, NewTraininTypComponent],
  imports: [
    CommonModule,
    SuperiorRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [NewUserComponent, NewTrainingComponent, NewTraininTypComponent],
})
export class SuperiorModule {}
