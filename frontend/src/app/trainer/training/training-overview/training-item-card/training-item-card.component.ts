import { Component, Input, OnInit } from '@angular/core';
import { TrainingDto } from '../../../../commons/dto/training-dto.model';
import { FormControl, FormGroup } from '@angular/forms';
import { TrainingService } from '../../../../commons/service/training.service';
import { SnackbarService } from '../../../../commons/service/snackbar.service';

@Component({
  selector: 'fit4bit-training-item-card',
  templateUrl: './training-item-card.component.html',
  styleUrls: ['./training-item-card.component.scss'],
})
export class TrainingItemCardComponent implements OnInit {
  public profileForm: FormGroup;

  @Input()
  public training: TrainingDto;

  constructor(
    private trainingService: TrainingService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      amountOfCustomer: new FormControl(),
    });
    this.profileForm.setValue({
      amountOfCustomer: this.training.amountOfCustomer,
    });
  }

  public save(): void {
    this.training.amountOfCustomer = this.profileForm.value.amountOfCustomer;
    this.trainingService.patch$(this.training).subscribe(
      () => {
        this.snackbar.sendDataSaveOk();
        this.profileForm.setValue({
          amountOfCustomer: this.training.amountOfCustomer,
        });
      },
      () => {
        this.snackbar.sendStandardNok();
      }
    );
    this.profileForm.reset();
  }
}
