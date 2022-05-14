import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fit4bit-base-item-card',
  templateUrl: './base-item-card.component.html',
  styleUrls: ['./base-item-card.component.scss'],
})
export class BaseItemCardComponent implements OnInit {
  constructor() {}

  @Input()
  public large = false;

  ngOnInit(): void {}
}
