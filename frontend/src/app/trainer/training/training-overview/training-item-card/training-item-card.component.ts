import { Component, Input, OnInit } from '@angular/core';
import { TrainingDto } from '../../../../commons/dto/training-dto.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TrainingService } from '../../../../commons/service/training.service';
import { SnackbarService } from '../../../../commons/service/snackbar.service';

@Component({
  selector: 'fit4bit-training-item-card',
  templateUrl: './training-item-card.component.html',
  styleUrls: ['./training-item-card.component.scss'],
})
export class TrainingItemCardComponent implements OnInit {
  public formGroup: FormGroup;

  @Input()
  public training: TrainingDto;

  constructor(
    private trainingService: TrainingService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      amountOfCustomer: new FormControl(this.training.amountOfCustomer, [
        Validators.required,
        Validators.min(0),
        Validators.max(99),
      ]),
    });
  }

  public save(): void {
    this.training.amountOfCustomer = this.formGroup.value.amountOfCustomer;
    this.trainingService.patch$(this.training).subscribe(
      () => {
        this.snackbar.sendDataSaveOk();
        this.formGroup.setValue({
          amountOfCustomer: this.training.amountOfCustomer,
        });
      },
      () => {
        this.snackbar.sendStandardNok();
      }
    );
    this.formGroup.reset();
  }
}
