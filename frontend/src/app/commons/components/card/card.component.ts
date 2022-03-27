import { TrainingDto } from 'src/app/commons/dto/training-dto.model';
import { Component, Input, OnInit } from '@angular/core';
import { CardItemService } from '../../service/card-item.service';

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

  constructor(private cardItemService: CardItemService) {}

  ngOnInit(): void {}

  public toggle(): void {
    this.active = !this.active;
    if (this.active) {
      this.cardItemService.addItem(this.trainingDto);
    } else {
      this.cardItemService.removeItem(this.trainingDto);
    }
  }
}
