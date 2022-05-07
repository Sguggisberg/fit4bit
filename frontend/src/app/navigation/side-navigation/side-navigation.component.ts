import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fit4bit-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent {
  @Output() public resetOverlayEmitter: EventEmitter<void> = new EventEmitter();
  @Input() public show: boolean;

  public closeMe(): void {
    this.show = false;
    this.resetOverlayEmitter.emit();
  }
}
