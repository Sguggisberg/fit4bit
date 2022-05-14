import { TrainingDto } from 'src/app/commons/dto/training-dto.model';
import { Component, Input, OnInit } from '@angular/core';
import { CardItemService } from '../../../trainer/payroll/payroll-overview/card-item.service';

@Component({
  selector: 'fit4bit-checkbox-card',
  templateUrl: './checkbox-card.component.html',
  styleUrls: ['./checkbox-card.component.scss'],
})
export class CheckboxCardComponent implements OnInit {

  @Input()
  public active: boolean;

  @Input()
  public trainingDto: TrainingDto;

  constructor(private cardItemService: CardItemService) {

  }

  ngOnInit(): void {
    if (this.active){
      this.cardItemService.addItem(this.trainingDto);
    }
  }

  public toggle(): void {
    this.active = !this.active;
    if (this.active) {
      this.cardItemService.addItem(this.trainingDto);
    } else {
      this.cardItemService.removeItem(this.trainingDto);
    }
  }
}
