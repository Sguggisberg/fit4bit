import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingOverviewComponent } from './training-overview/training-overview.component';



const routes: Routes = [

  {
  path: 'overview',
  component: TrainingOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule { }
