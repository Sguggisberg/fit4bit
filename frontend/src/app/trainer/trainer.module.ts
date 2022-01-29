import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTrainingComponent } from './my-training/my-training.component';
import { TrainerRoutingModule } from './trainer-routing.module';



@NgModule({
  declarations: [
    MyTrainingComponent
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
