import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fit4bit-main-content-container',
  templateUrl: './main-content-container.component.html',
  styleUrls: ['./main-content-container.component.scss'],
})
export class MainContentContainerComponent implements OnInit {
  @Input()
  public title: string;

  constructor() {}

  ngOnInit(): void {}
}
