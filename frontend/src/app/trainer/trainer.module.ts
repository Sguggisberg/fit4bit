import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerRoutingModule } from './trainer-routing.module';
import { TrainingOverviewComponent } from './training-overview/training-overview.component';
import { EditTrainingComponent } from './edit-training/edit-training.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Fit4BitCommonsModule } from '../commons/commons.module';
import { PayrollListComponent } from './payroll/payroll-list/payroll-list.component';
import { NewpayrollComponent } from './payroll/newpayroll/newpayroll.component';

@NgModule({
  declarations: [
    TrainingOverviewComponent,
    PayrollListComponent,
    EditTrainingComponent,
    NewpayrollComponent,


  ],
  imports: [
    CommonModule,
    TrainerRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    Fit4BitCommonsModule


  ],
  exports: [
  ]
})
export class TrainerModule { }
