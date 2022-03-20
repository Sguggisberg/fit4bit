import { TrainingDto } from 'src/app/commons/dto/training-dto.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fit4bit-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  public active: boolean;

  @Input()
  public trainingDto: TrainingDto;

  ngOnInit(): void {}

  public toggle(): void {
    console.log('click');
    this.active = !this.active;
    console.log(this.active);
  }
}
