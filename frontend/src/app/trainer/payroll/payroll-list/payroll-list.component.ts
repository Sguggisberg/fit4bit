import { TrainingDto } from 'src/app/commons/dto/training-dto.model';
import { Component, Input, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/commons/service/training.service';
import { CardItemService } from 'src/app/commons/service/card-item.service';
import {PayrollDto} from "../../../commons/dto/payroll-dto.model";

@Component({
  selector: 'fit4bit-payroll-list',
  templateUrl: './payroll-list.component.html',
  styleUrls: ['./payroll-list.component.scss'],
})
export class PayrollListComponent implements OnInit {

  @Input()
  public selectedPayroll:PayrollDto;

  constructor(
    private trainingService: TrainingService,
    private cardItemService: CardItemService
  ) {}

  ngOnInit(): void {
    this.trainingService.getAllOwnTraining$().subscribe((training) => {
      this.cardItemService.trainings = training;
    });
  }

  public allOwnTrainings():TrainingDto[] {
    return this.cardItemService.trainings;
  }
}
