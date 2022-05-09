import { Component, Input, OnInit } from '@angular/core';
import { TrainingDto } from '../../../../commons/dto/training-dto.model';

@Component({
  selector: 'fit4bit-training-item-card',
  templateUrl: './training-item-card.component.html',
  styleUrls: ['./training-item-card.component.scss'],
})
export class TrainingItemCardComponent implements OnInit {
  @Input()
  public training: TrainingDto;

  constructor() {}

  ngOnInit(): void {}
}
