import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fit4bit-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  @Input()
  public name: string;

  ngOnInit(): void {}
}
