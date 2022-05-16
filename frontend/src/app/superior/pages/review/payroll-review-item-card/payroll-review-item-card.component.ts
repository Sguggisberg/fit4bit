import { Component, Input, OnInit } from '@angular/core';
import { PayrollDto } from '../../../../commons/dto/payroll-dto.model';
import { PayrollService } from '../../../../commons/service/payroll.service';
import { SnackbarService } from '../../../../commons/service/snackbar.service';

@Component({
  selector: 'fit4bit-payroll-review-item-card',
  templateUrl: './payroll-review-item-card.component.html',
  styleUrls: ['./payroll-review-item-card.component.scss'],
})
export class PayrollReviewItemCardComponent implements OnInit {
  @Input()
  public payroll: PayrollDto;

  constructor(
    private payrollService: PayrollService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {}

  public release(payroll: PayrollDto): void {
    const toUpdate: PayrollDto = {
      id: payroll.id,
      billState: 'FREIGABE_SUPERIOR',
    };
    this.payrollService.updateState(toUpdate).subscribe(
      () => this.snackbarService.sendDataSaveOk(),
      () => this.snackbarService.sendStandardNok()
    );
  }

  public reject(payroll: PayrollDto): void {
    const toUpdate: PayrollDto = {
      id: payroll.id,
      billState: 'ABGELEHNT',
    };
    this.payrollService.updateState(toUpdate).subscribe(
      () => this.snackbarService.sendDataSaveOk(),
      () => this.snackbarService.sendStandardNok()
    );
  }
}
