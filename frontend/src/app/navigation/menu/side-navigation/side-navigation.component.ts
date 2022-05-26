import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fit4bit-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent {
  @Output() public resetOverlayEmitter: EventEmitter<EventEmitter<any>> =
    new EventEmitter();
  @Input() public showOverlay: boolean;

  public closeMe(): void {
    this.showOverlay = false;
    this.resetOverlayEmitter.emit();
  }
}
