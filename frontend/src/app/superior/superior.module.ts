import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { SuperiorRoutingModule } from './superior-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrainingComponent } from './pages/training/training.component';
import { NewTrainingTypComponent } from './pages/new-training-typ/new-training-typ.component';
import { RoomComponent } from './pages/room/room.component';
import { Fit4BitCommonsModule } from '../commons/commons.module';
import { AuthGuardSuperior } from '../commons/guards/superior-guard';
import { ReviewComponent } from './pages/review/review.component';
import { PayrollReviewItemCardComponent } from './pages/review/payroll-review-item-card/payroll-review-item-card.component';

@NgModule({
  declarations: [
    NewUserComponent,
    TrainingComponent,
    NewTrainingTypComponent,
    RoomComponent,
    ReviewComponent,
    PayrollReviewItemCardComponent,
  ],
  imports: [
    CommonModule,
    SuperiorRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    Fit4BitCommonsModule,
  ],
  exports: [NewUserComponent, TrainingComponent, NewTrainingTypComponent],
  providers: [AuthGuardSuperior],
})
export class SuperiorModule {}
