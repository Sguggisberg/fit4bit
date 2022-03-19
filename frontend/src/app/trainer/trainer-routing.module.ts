import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayrollListComponent } from './payroll/payroll-list/payroll-list.component';
import { TrainingOverviewComponent } from './training-overview/training-overview.component';

const routes: Routes = [
  {
    path: 'overview',
    component: TrainingOverviewComponent,
  },
  {
    path: 'payroll',
    component: PayrollListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerRoutingModule {}
