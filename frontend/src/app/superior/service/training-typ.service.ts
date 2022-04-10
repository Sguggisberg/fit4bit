import { HEADER } from './../../commons/service/service.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TrainingTypDto } from 'src/app/commons/dto/training-typ-dto.model';
import { BaseHttpService } from 'src/app/commons/service/base-http.service';


@Injectable({
  providedIn: 'root'
})
export class TrainingTypService extends BaseHttpService<TrainingTypDto> {
  protected path: string = 'trainingtyp';
  headers = new HttpHeaders(HEADER);
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getImage$() {
    return this.httpClient.get('http://localhost:8080/api/trainingtyp/image/1')
  }

}

