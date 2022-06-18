import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/commons/service/user.service';
import { SnackbarService } from '../../../commons/service/snackbar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { standardFormRegex } from '../constants';

@Component({
  selector: 'fit4bit-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  public profileForm: FormGroup;

  constructor(
    private userServiceService: UserService,
    private snackbarService: SnackbarService
  ) {}

  public ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern(standardFormRegex),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern(standardFormRegex),
      ]),
      username: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  public create(): void {
    const newUser = this.profileForm.value;
    this.userServiceService.create$(newUser).subscribe(
      () => {
        this.snackbarService.sendDataSaveOk();
      },
      (error: HttpErrorResponse) => {
        switch (error.status) {
          case 409:
            this.snackbarService.info({
              text: 'Email bereits vorhanden!',
              typ: 'error',
            });
            break;
          default:
            this.snackbarService.sendStandardNok();
        }
      }
    );
  }
}
