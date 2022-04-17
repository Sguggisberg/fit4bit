import { PayrollDto } from '../../../commons/dto/payroll-dto.model';
import { Component, OnInit } from '@angular/core';
import { PayrollService } from 'src/app/commons/service/payroll.service';
import { MatMonthView } from '@angular/material/datepicker';
import { CardItemService } from 'src/app/commons/service/card-item.service';
import { PayrollAddTrainingDto } from 'src/app/commons/dto/payroll-add-training-dto';

@Component({
  selector: 'fit4bit-payroll-overview',
  templateUrl: './payroll-overview.component.html',
  styleUrls: ['./payroll-overview.component.scss'],
})
export class PayrollOverviewComponent implements OnInit {
  public payrollList: PayrollDto[] = [];
  public payroll: PayrollDto;
  public showOverlay: boolean;
  public month: number;
  public year: number;
  public title: string;
  public displayedColumns: string[] = ['month', 'year'];
  constructor(
    private payrollService: PayrollService,
    private cardItemService: CardItemService
  ) {}

  ngOnInit(): void {
    this.payrollService
      .getAll$()
      .subscribe((payrollList) => (this.payrollList = payrollList));
  }
  public resetOverlay(): void {
    this.showOverlay = false;
  }

  public loadItem(payroll: PayrollDto): void {
    this.payroll = payroll;
    this.month = payroll.month;
    this.year = payroll.year;
    this.showOverlay = true;
    this.title = `${this.month}  ${this.year}`;
  }

  public addTrainingsToPayroll(): void {
    let listOfId: number[]=[];
    this.cardItemService.clickedElements.forEach(training=>
      listOfId.push(training.id!)
      );

    let payrollToAddTrainings:  PayrollAddTrainingDto = {
      id:  this.payroll.id!,
      trainingIds: listOfId
    }
    this.payrollService.addTrainings$(payrollToAddTrainings).subscribe();
    this.showOverlay=false;
  }
}
