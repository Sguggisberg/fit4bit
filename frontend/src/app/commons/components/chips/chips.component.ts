import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fit4bit-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class ChipsComponent implements OnInit {
  @Input()
  public text: string;

  @Input()
  public isActive = false;

  @Input()
  public length: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
