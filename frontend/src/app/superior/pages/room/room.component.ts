import { RoomDto } from '../../../commons/dto/room-dto.model';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { RoomService } from 'src/app/commons/service/room.service';
import { SnackbarService } from '../../../commons/service/snackbar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'fit4bit-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  public formGroup: FormGroup;
  public file: File;
  public regex: string | RegExp = '[\\w\\d]*';
  public constructor(
    private roomService: RoomService,
    private snackbarService: SnackbarService
  ) {}

  public ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
          Validators.pattern(this.regex),
        ],
        this.usernameValidator()
      ),
    });
  }

  public onFileSelected(event: any): void {
    this.file = event.target.files[0];
  }

  public create(): void {
    const newRoom: RoomDto = this.formGroup.value;
    this.roomService.create$(newRoom).subscribe(
      () => {
        this.snackbarService.sendDataSaveOk();
      },
      (error: HttpErrorResponse) => {
        switch (error.status) {
          case 400:
            this.snackbarService.info({
              text: 'Daten ungültig!',
              typ: 'error',
            });
            break;
          case 409:
            this.snackbarService.info({
              text: 'Name bereits vorhanden!',
              typ: 'error',
            });
            break;
          default:
            this.snackbarService.sendStandardNok();
        }
      }
    );
  }

  usernameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.roomService.findByNameIgnroreCase$(control.value).pipe(
        map((res) => {
          return res ? { roomExists: true } : null;
        })
      );
    };
  }
}
