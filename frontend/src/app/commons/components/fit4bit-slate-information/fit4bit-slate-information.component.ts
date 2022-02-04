import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fit4bit-slate-information',
  templateUrl: './fit4bit-slate-information.component.html',
  styleUrls: ['./fit4bit-slate-information.component.scss'],
})
export class Fit4bitSlateInformationComponent implements OnInit {

  @Input()
  content: string = '';

  @Input()
  isVisible: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  closeMe(e: Event){
    this.isVisible = false;
  }

  rememberMe() {
    console.log('Nicht mehr anzeigen!');
  }
}
