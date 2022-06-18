import { TrainingTypDto } from 'src/app/commons/dto/training-typ-dto.model';
import { Component } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { TrainingTypService } from '../../service/training-typ.service';
import { standardFormRegex } from '../constants';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SnackbarService } from '../../../commons/service/snackbar.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'fit4bit-new-trainin-typ',
  templateUrl: './new-training-typ.component.html',
  styleUrls: ['./new-training-typ.component.scss'],
})
export class NewTrainingTypComponent {
  formGroup: FormGroup;

  constructor(
    private trainingTypService: TrainingTypService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
          Validators.pattern(standardFormRegex),
        ],
        this.trainingTypNameValidator()
      ),
    });
  }

  create(): void {
    const newTrainingTyp: TrainingTypDto = this.formGroup.value;
    this.trainingTypService.create$(newTrainingTyp).subscribe(
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
              text: 'Kurs Typ bereits vorhanden!',
              typ: 'error',
            });
            break;
          default:
            this.snackbarService.sendStandardNok();
        }
      }
    );
  }

  trainingTypNameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.trainingTypService.findByNameIgnroreCase$(control.value).pipe(
        map((res) => {
          return res ? { trainingTypExist: true } : null;
        })
      );
    };
  }
}
