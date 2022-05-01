import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'fit4bit-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  @Output() public resetOverlayEmitter: EventEmitter<null> = new EventEmitter();
  @Input() public show: boolean;

  public closeMe(): void {
    this.show = false;
    this.resetOverlayEmitter.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
