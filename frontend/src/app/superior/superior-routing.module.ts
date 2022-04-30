import { RoomComponent } from './pages/room/room.component';
import { TrainingComponent } from '../commons/pages/training/training.component';
import { NewTraininTypComponent } from './pages/new-trainin-typ/new-trainin-typ.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardSuperior} from "../commons/guards/superior-guard";


const routes: Routes = [
  {
    path: 'newuser',
    component: NewUserComponent
  },
  {
    path: 'newtrainingtyp',
    component: NewTraininTypComponent
  },
  {
    path: 'newtraining',
    component: TrainingComponent
  },
  {
    path: 'room',
    component: RoomComponent, canActivate: [AuthGuardSuperior]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperiorRoutingModule { }
