import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fit4bit-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss'],
})
export class BackdropComponent {
  @Output()
  closeEmitter: EventEmitter<void> = new EventEmitter();

  public close(): void {
    this.closeEmitter.emit();
  }
}
