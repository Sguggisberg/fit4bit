import { RoomComponent } from './pages/room/room.component';
import { NewTrainingComponent } from './pages/new-training/new-training.component';
import { NewTraininTypComponent } from './pages/new-trainin-typ/new-trainin-typ.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
    path: 'training',
    component: NewTrainingComponent
  },
  {
    path: 'room',
    component: RoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperiorRoutingModule { }
