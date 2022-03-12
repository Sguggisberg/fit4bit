import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerRoutingModule } from './trainer-routing.module';
import { TrainingOverviewComponent } from './training-overview/training-overview.component';
import { PayrollListComponent } from './payroll-list/payroll-list.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { OverlayComponent } from './overlay/overlay.component';

@NgModule({
  declarations: [
    TrainingOverviewComponent,
    PayrollListComponent,
    BackdropComponent,
    OverlayComponent
  ],
  imports: [
    CommonModule,
    TrainerRoutingModule,
  ],
  exports: [
  ]
})
export class TrainerModule { }
