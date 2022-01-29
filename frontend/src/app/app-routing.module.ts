import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './superior/new-user/new-user.component';
import { MyTrainingComponent } from './trainer/my-training/my-training.component';

const routes: Routes = [

  {
    path: 'trainer',
    loadChildren: () => import('./trainer/trainer.module').then(m => m.TrainerModule)
  },
  {
    path: 'superior',
    loadChildren: () => import('./superior/superior.module').then(m => m.SuperiorModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
