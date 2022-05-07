import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './commons/pages/login/login.component';
import { WelcomePageComponent } from './commons/pages/welcome-page/welcome-page.component';

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
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'welcome',
    component: WelcomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
