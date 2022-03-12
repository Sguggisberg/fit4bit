import { TrainingDto } from 'src/app/commons/dto/training-dto.model';
import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/commons/service/training.service';

@Component({
  selector: 'app-training-overview',
  templateUrl: './training-overview.component.html',
  styleUrls: ['./training-overview.component.scss']
})
export class TrainingOverviewComponent implements OnInit {


  public trainings: TrainingDto[];

  constructor(private trainingService:TrainingService) { }

  ngOnInit(): void {
     this.trainingService.getAll$().subscribe(trainings => this.trainings = trainings);
  }

}
