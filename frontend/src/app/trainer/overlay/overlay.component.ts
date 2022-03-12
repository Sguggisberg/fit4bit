import { TrainingDto } from 'src/app/commons/dto/training-dto.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent {

  @Output() resetOverlayEmitter : EventEmitter<null> = new EventEmitter();

  @Input()
  public show: boolean;

  public closeMe(): void {
    this.show = false;
    this.resetOverlayEmitter.emit();
  }
}
