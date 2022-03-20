import { PayrollDto } from '../../../commons/dto/payroll-dto.model';
import { Component, OnInit } from '@angular/core';
import { PayrollService } from 'src/app/commons/service/payroll.service';

@Component({
  selector: 'fit4bit-payroll-overview',
  templateUrl: './payroll-overview.component.html',
  styleUrls: ['./payroll-overview.component.scss'],
})
export class PayrollOverviewComponent implements OnInit {
  payrollList: PayrollDto[] = [];
  public showOverlay: boolean;

  constructor(private payrollService: PayrollService) {}

  ngOnInit(): void {
    this.payrollService
      .getAll$()
      .subscribe((payrollList) => (this.payrollList = payrollList));
      this.showOverlay = true;
  }
  public resetOverlay():void {
    this.showOverlay = false;
  }
}
