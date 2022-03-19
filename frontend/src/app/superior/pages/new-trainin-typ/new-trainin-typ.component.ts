import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TrainingTypService } from '../../service/training-typ.service';


@Component({
  selector: 'fit4bit-new-trainin-typ',
  templateUrl: './new-trainin-typ.component.html',
  styleUrls: ['./new-trainin-typ.component.scss']
})
export class NewTraininTypComponent  {
  profileForm: FormGroup;

  constructor(private trainingTypService: TrainingTypService) {}
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  create() {
    const newTrainingTyp = this.profileForm.value;
    this.trainingTypService.create$(newTrainingTyp).subscribe();
  }

}
