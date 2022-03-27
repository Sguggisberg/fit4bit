import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fit4bit-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent {

  @Output() public resetOverlayEmitter: EventEmitter<null> = new EventEmitter();
  @Input() public show: boolean;
  @Input() public title: string;

  public closeMe(): void {
    this.show = false;
    this.resetOverlayEmitter.emit();
  }


}
