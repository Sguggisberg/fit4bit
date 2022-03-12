import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTrainingComponent } from './my-training/my-training.component';
import { TrainerRoutingModule } from './trainer-routing.module';
import { TrainingOverviewComponent } from './training-overview/training-overview.component';



@NgModule({
  declarations: [
    MyTrainingComponent,
    TrainingOverviewComponent
  ],
  imports: [
    CommonModule,
    TrainerRoutingModule
  ],
  exports: [
    MyTrainingComponent
  ]
})
export class TrainerModule { }
