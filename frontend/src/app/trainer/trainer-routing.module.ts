import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayrollOverviewComponent } from './payroll/payroll-overview/payroll-overview.component';
import { TrainingOverviewComponent } from './training/training-overview/training-overview.component';

const routes: Routes = [
  {
    path: 'overview',
    component: TrainingOverviewComponent,
  },
  {
    path: 'payroll',
    component: PayrollOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerRoutingModule {}
