import { UserDto } from './../../commons/dto/user-dto.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email])
  });

constructor(private userServiceService: UserServiceService){

}

  create() {
    let user:UserDto = {
      name: 'abc'
    }
    this.userServiceService.$create(user).subscribe();
  }
}
