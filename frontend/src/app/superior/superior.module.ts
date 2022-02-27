import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { SuperiorRoutingModule } from './superior-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrainingComponent } from '../commons/pages/training/training.component';
import { NewTraininTypComponent } from './pages/new-trainin-typ/new-trainin-typ.component';
import { RoomComponent } from './pages/room/room.component';

@NgModule({
  declarations: [NewUserComponent, TrainingComponent, NewTraininTypComponent, RoomComponent],
  imports: [
    CommonModule,
    SuperiorRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [NewUserComponent, TrainingComponent, NewTraininTypComponent],
})
export class SuperiorModule {}
