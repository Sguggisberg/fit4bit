import { Injectable } from '@angular/core';
import { TrainingDto } from '../dto/training-dto.model';

@Injectable({
  providedIn: 'root',
})
export class CardItemService {
  public trainings: TrainingDto[];
  public clickedElements: TrainingDto[] = [];

  public addItem(training: TrainingDto): void {
    this.clickedElements.push(training);
  }

  public removeItem(training: TrainingDto): void {
    this.clickedElements.forEach((element2remove, index) => {
      if (element2remove.id === training.id) {
        this.clickedElements.splice(index, 1);
      }
    });
  }
}
