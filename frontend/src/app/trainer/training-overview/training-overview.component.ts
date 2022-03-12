import { TrainingDto } from 'src/app/commons/dto/training-dto.model';
import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/commons/service/training.service';

@Component({
  selector: 'app-training-overview',
  templateUrl: './training-overview.component.html',
  styleUrls: ['./training-overview.component.scss'],
})
export class TrainingOverviewComponent implements OnInit {
  public showOverlay: boolean;
  public training: TrainingDto;
  public trainings: TrainingDto[];

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.trainingService
      .getAll$()
      .subscribe((trainings) => (this.trainings = trainings));
  }

  public loadItem(training: TrainingDto): void {
    console.log('loadItem: ' + training.id + " " + training.amountOfCustomer);
    this.training = training;
       this.showOverlay = true;
  }

  public resetOverlay():void {
    this.showOverlay = false;
  }
}
