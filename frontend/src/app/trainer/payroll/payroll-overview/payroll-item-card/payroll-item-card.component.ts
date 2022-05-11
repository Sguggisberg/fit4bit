import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PayrollDto } from '../../../../commons/dto/payroll-dto.model';

@Component({
  selector: 'fit4bit-payroll-item-card',
  templateUrl: './payroll-item-card.component.html',
  styleUrls: ['./payroll-item-card.component.scss'],
})
export class PayrollItemCardComponent implements OnInit {
  @Input()
  public payroll: PayrollDto;

  @Output()
  public loadItemClicked: EventEmitter<PayrollDto> = new EventEmitter<PayrollDto>();

  constructor() {}

  ngOnInit(): void {}

  public loadOverview() {
    this.loadItemClicked.emit(this.payroll);
  }
}
