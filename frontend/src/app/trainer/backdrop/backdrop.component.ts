import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss'],
})
export class BackdropComponent {

  @Output()
  closeEmitter: EventEmitter<null> = new EventEmitter();

  public close(): void {
    this.closeEmitter.emit();
  }
}
