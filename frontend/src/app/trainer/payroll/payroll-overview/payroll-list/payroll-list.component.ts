import { TrainingDto } from 'src/app/commons/dto/training-dto.model';
import { Component, Input, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/commons/service/training.service';
import { CardItemService } from 'src/app/trainer/payroll/payroll-overview/card-item.service';
import { PayrollDto } from '../../../../commons/dto/payroll-dto.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'fit4bit-payroll-list',
  templateUrl: './payroll-list.component.html',
  styleUrls: ['./payroll-list.component.scss'],
})
export class PayrollListComponent implements OnInit {
  @Input()
  public selectedPayroll: PayrollDto;

  public selectedTrainings: Observable<TrainingDto[]>;
  public openTrainings: Observable<TrainingDto[]>;

  constructor(
    private trainingService: TrainingService,
    private cardItemService: CardItemService
  ) {}

  ngOnInit(): void {
    this.selectedTrainings = this.trainingService.getAllTrainingInPayroll$(
      this.selectedPayroll.id!
    );
    this.openTrainings = this.trainingService.getAllOwnOpenTrainings$();
  }

  public allOwnTrainings(): TrainingDto[] {
    return this.cardItemService.trainings;
  }
}
