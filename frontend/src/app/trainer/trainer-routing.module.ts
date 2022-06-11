import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayrollOverviewComponent } from './payroll/payroll-overview/payroll-overview.component';
import { TrainingOverviewComponent } from './training/training-overview/training-overview.component';
import {AuthGuardTrainer} from "../commons/guards/trainer-guard";

const routes: Routes = [
  {
    path: 'overview',
    component: TrainingOverviewComponent,
    canActivate: [AuthGuardTrainer]
  },
  {
    path: 'payroll',
    component: PayrollOverviewComponent,
    canActivate: [AuthGuardTrainer]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerRoutingModule {}
