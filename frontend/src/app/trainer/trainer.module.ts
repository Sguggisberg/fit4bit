import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerRoutingModule } from './trainer-routing.module';
import { TrainingOverviewComponent } from './training-overview/training-overview.component';
import { PayrollListComponent } from './payroll-list/payroll-list.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { OverlayComponent } from './overlay/overlay.component';
import { EditTrainingComponent } from './edit-training/edit-training.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TrainingOverviewComponent,
    PayrollListComponent,
    BackdropComponent,
    OverlayComponent,
    EditTrainingComponent,

  ],
  imports: [
    CommonModule,
    TrainerRoutingModule,
    MaterialModule,
    ReactiveFormsModule

  ],
  exports: [
  ]
})
export class TrainerModule { }
