import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TrainingTypDto } from 'src/app/commons/dto/training-typ-dto.model';
import { BaseHttpService } from 'src/app/commons/service/base-http.service';


@Injectable({
  providedIn: 'root'
})
export class TrainingTypService extends BaseHttpService<TrainingTypDto> {
  protected path: string = 'trainingtyp';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

}
