import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './superior/new-user/new-user.component';
import { MyTrainingComponent } from './trainer/my-training/my-training.component';

const routes: Routes = [
  { path: 'mytraining', component: MyTrainingComponent },
  { path: 'newuser', component: NewUserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
