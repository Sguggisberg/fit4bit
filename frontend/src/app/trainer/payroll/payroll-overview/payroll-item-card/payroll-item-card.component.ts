import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fit4bit-payroll-item-card',
  templateUrl: './payroll-item-card.component.html',
  styleUrls: ['./payroll-item-card.component.scss'],
})
export class PayrollItemCardComponent implements OnInit {
  @Input()
  public year: number;

  @Input()
  public month: number;

  constructor() {}

  ngOnInit(): void {}
}
