import { TrainingDto } from 'src/app/commons/dto/training-dto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HEADER } from './service.constants';
import { environment } from 'src/environments/environment';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root',
})
export class TrainingService extends BaseHttpService<TrainingDto>{
  protected path: string = 'training';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  patch$(trainingDto: TrainingDto): Observable<any> {
    const backendEndpoint = `${environment.BACKEND_URL}${this.path}`;
    const body = JSON.stringify(trainingDto);
    const headers = new HttpHeaders(HEADER);
    return this.httpClient.put(backendEndpoint, body, {
      headers,
    });
  }
}
