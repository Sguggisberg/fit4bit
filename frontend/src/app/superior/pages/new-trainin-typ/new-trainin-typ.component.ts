import { TrainingTypDto } from 'src/app/commons/dto/training-typ-dto.model';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TrainingTypService } from '../../service/training-typ.service';

@Component({
  selector: 'fit4bit-new-trainin-typ',
  templateUrl: './new-trainin-typ.component.html',
  styleUrls: ['./new-trainin-typ.component.scss'],
})
export class NewTraininTypComponent {
  profileForm: FormGroup;
  retrievedImage: string;
  base64Data: string;
  retrieveResonse: any;
  file: File;

  constructor(private trainingTypService: TrainingTypService) {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });

    this.image();
  }

  create2() {
    const newTrainingTyp: TrainingTypDto = this.profileForm.value;
    console.log('formData: ', this.profileForm);
    let formData = new FormData();
    formData.append('name', newTrainingTyp.name!);
    if (this.file) {
      formData.append('file', this.file, this.file.name);
    }
    this.trainingTypService.createFromFormData$(formData).subscribe();
  }

  onUpload(event: any) {
    this.file = event.target.files[0];
  }

  // Bild lesen
  image() {
    this.trainingTypService.getImage$().subscribe((res) => {
      this.retrieveResonse = res;
      this.base64Data = this.retrieveResonse.image;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    });
  }
}
