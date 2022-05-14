import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerRoutingModule } from './trainer-routing.module';
import { TrainingOverviewComponent } from './training/training-overview/training-overview.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Fit4BitCommonsModule } from '../commons/commons.module';
import { PayrollOverviewComponent } from './payroll/payroll-overview/payroll-overview.component';
import { NewpayrollComponent } from './payroll/create-payroll/newpayroll.component';
import { PayrollListComponent } from './payroll/payroll-overview/payroll-list/payroll-list.component';
import { TrainingItemCardComponent } from './training/training-overview/training-item-card/training-item-card.component';
import { PayrollItemCardComponent } from './payroll/payroll-overview/payroll-item-card/payroll-item-card.component';

@NgModule({
  declarations: [
    TrainingOverviewComponent,
    PayrollOverviewComponent,
    NewpayrollComponent,
    PayrollListComponent,
    TrainingItemCardComponent,
    PayrollItemCardComponent,
  ],
  imports: [
    CommonModule,
    TrainerRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    Fit4BitCommonsModule,
  ],
  exports: [],
})
export class TrainerModule {}
