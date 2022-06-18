import { TrainingTypDto } from 'src/app/commons/dto/training-typ-dto.model';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TrainingTypService } from '../../service/training-typ.service';

@Component({
  selector: 'fit4bit-new-trainin-typ',
  templateUrl: './new-training-typ.component.html',
  styleUrls: ['./new-training-typ.component.scss'],
})
export class NewTrainingTypComponent {
  profileForm: FormGroup;

  constructor(private trainingTypService: TrainingTypService) {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  create(): void {
    const newTrainingTyp: TrainingTypDto = this.profileForm.value;
     this.trainingTypService.create$(newTrainingTyp).subscribe();
  }

}
