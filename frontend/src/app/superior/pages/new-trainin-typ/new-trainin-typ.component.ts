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


  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  constructor(
    private trainingTypService: TrainingTypService
  ) {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });

    this. image();
  }

  create() {
    const newTrainingTyp = this.profileForm.value;
    this.trainingTypService.create$(newTrainingTyp).subscribe();
  }

  onUpload(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.trainingTypService.uploadImage$(file).subscribe();
    }
  }

  image() {
    this.trainingTypService.getImage$().subscribe(
      res => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.image;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      }


    );
  }
}
