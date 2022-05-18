import { RoomComponent } from './pages/room/room.component';
import { TrainingComponent } from './pages/training/training.component';
import { NewTraininTypComponent } from './pages/new-trainin-typ/new-trainin-typ.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardSuperior } from '../commons/guards/superior-guard';
import { ReviewComponent } from './pages/review/review.component';

const routes: Routes = [
  {
    path: 'newuser',
    component: NewUserComponent,
    canActivate: [AuthGuardSuperior],
  },
  {
    path: 'newtrainingtyp',
    component: NewTraininTypComponent,
    canActivate: [AuthGuardSuperior],
  },
  {
    path: 'newtraining',
    component: TrainingComponent,
    canActivate: [AuthGuardSuperior],
  },
  {
    path: 'room',
    component: RoomComponent,
    canActivate: [AuthGuardSuperior],
  },
  {
    path: 'review',
    component: ReviewComponent,
    canActivate: [AuthGuardSuperior],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperiorRoutingModule {}
