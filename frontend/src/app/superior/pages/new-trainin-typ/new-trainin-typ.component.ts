import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';


@Component({
  selector: 'app-new-trainin-typ',
  templateUrl: './new-trainin-typ.component.html',
  styleUrls: ['./new-trainin-typ.component.scss']
})
export class NewTraininTypComponent  {
  profileForm2: FormGroup;

  constructor(private userServiceService: UserServiceService) {}
  ngOnInit(): void {
    this.profileForm2 = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  create() {
    const newUser = this.profileForm2.value;
    this.userServiceService.$create(newUser).subscribe();
  }

}
