import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TrainingDto } from 'src/app/commons/dto/training-dto.model';
import { TrainingService } from 'src/app/commons/service/training.service';

@Component({
  selector: 'app-edit-training',
  templateUrl: './edit-training.component.html',
  styleUrls: ['./edit-training.component.scss'],
})
export class EditTrainingComponent implements OnInit {
  public profileForm: FormGroup;

  @Input()
  public receivedTraining: TrainingDto;

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      amountCustomer: new FormControl('', [Validators.required]),
    });
  }

  public setAmountOfCustomer(): void {
    const amountCustomer = this.profileForm.value.amountCustomer;
    let training: TrainingDto = {
      id: this.receivedTraining.id,
      amountOfCustomer: amountCustomer,
    };
    this.trainingService.patch$(training).subscribe();
  }
}
