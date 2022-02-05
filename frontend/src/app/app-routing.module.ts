import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
