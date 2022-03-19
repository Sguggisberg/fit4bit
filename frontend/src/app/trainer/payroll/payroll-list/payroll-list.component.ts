import { PayrollDto } from '../../../commons/dto/payroll-dto.model';
import { Component, OnInit } from '@angular/core';
import { PayrollService } from 'src/app/commons/service/payroll.service';

@Component({
  selector: 'fit4bit-payroll-list',
  templateUrl: './payroll-list.component.html',
  styleUrls: ['./payroll-list.component.scss'],
})
export class PayrollListComponent implements OnInit {
  payrollList: PayrollDto[] = [];

  constructor(private payrollService: PayrollService) {}

  ngOnInit(): void {
    this.payrollService
      .getAll$()
      .subscribe((payrollList) => (this.payrollList = payrollList));
  }
}
