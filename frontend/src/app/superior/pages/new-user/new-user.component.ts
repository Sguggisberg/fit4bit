import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private userServiceService: UserServiceService) {}
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  create() {
    const newUser = this.profileForm.value;
    this.userServiceService.$create(newUser).subscribe();
  }

}
