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
import { Fit4BitCommonsModule } from '../commons/commons.module';
import { AuthGuardSuperior } from '../commons/guards/superior-guard';
import { ReviewComponent } from './pages/review/review.component';

@NgModule({
  declarations: [
    NewUserComponent,
    TrainingComponent,
    NewTraininTypComponent,
    RoomComponent,
    ReviewComponent,
  ],
  imports: [
    CommonModule,
    SuperiorRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    Fit4BitCommonsModule,
  ],
  exports: [NewUserComponent, TrainingComponent, NewTraininTypComponent],
  providers: [AuthGuardSuperior],
})
export class SuperiorModule {}
