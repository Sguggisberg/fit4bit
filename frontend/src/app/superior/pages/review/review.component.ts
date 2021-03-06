import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PayrollDto } from '../../../commons/dto/payroll-dto.model';
import { PayrollService } from '../../../commons/service/payroll.service';

@Component({
  selector: 'fit4bit-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  public filteredList: PayrollDto[];

  constructor(
    private payrollService: PayrollService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  public initData(): void {
    this.payrollService.getOpenPayrolls$().subscribe((list) => {
      this.filteredList = list;
      this.ref.detectChanges();
    });
  }
}
