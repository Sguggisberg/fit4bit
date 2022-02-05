import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './superior/new-user/new-user.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'trainer',
    loadChildren: () =>
      import('./trainer/trainer.module').then((m) => m.TrainerModule),
  },
  {
    path: 'superior',
    loadChildren: () =>
      import('./superior/superior.module').then((m) => m.SuperiorModule),
  },
  { path: 'test', component: NewUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
