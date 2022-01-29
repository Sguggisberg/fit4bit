import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTrainingComponent } from './my-training/my-training.component';



@NgModule({
  declarations: [
    MyTrainingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyTrainingComponent
  ]
})
export class TrainerModule { }
