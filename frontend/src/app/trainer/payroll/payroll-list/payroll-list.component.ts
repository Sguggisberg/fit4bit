import { TrainingDto } from 'src/app/commons/dto/training-dto.model';
import { Component, Input, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/commons/service/training.service';
import { CardItemService } from 'src/app/commons/service/card-item.service';

@Component({
  selector: 'fit4bit-payroll-list',
  templateUrl: './payroll-list.component.html',
  styleUrls: ['./payroll-list.component.scss'],
})
export class PayrollListComponent implements OnInit {
  public ownTrainings: TrainingDto[];

  @Input()
  public month: number;

  @Input()
  public year: number;

  constructor(
    private trainingService: TrainingService,
    private cardItemService: CardItemService
  ) {}

  ngOnInit(): void {
    this.trainingService.getAllOwnTraining$().subscribe((trainingTyp) => {
      this.ownTrainings = trainingTyp;
      this.cardItemService.trainings = trainingTyp;
    });
  }
}
