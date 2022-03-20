import { PayrollDto } from '../../../commons/dto/payroll-dto.model';
import { Component, OnInit } from '@angular/core';
import { PayrollService } from 'src/app/commons/service/payroll.service';

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
  constructor(private payrollService: PayrollService) {}

  ngOnInit(): void {
    this.payrollService
      .getAll$()
      .subscribe((payrollList) => (this.payrollList = payrollList));
  }
  public resetOverlay(): void {
    this.showOverlay = false;
  }

  public loadItem(payroll: PayrollDto): void {
    console.log(
      'loadItem: ' + payroll.id + ' ' + payroll.month + ' ' + payroll.year
    );
    this.payroll = payroll;
    this.month = payroll.month;
    this.year = payroll.year;
    this.showOverlay = true;
  }
}
