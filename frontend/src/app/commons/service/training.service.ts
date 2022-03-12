import { TrainingDto } from 'src/app/commons/dto/training-dto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HEADER } from './service.constants';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  private path: string = 'training';

  constructor(private httpClient: HttpClient) {}

  create$(trainingDto: TrainingDto): Observable<any> {
    const body = JSON.stringify(trainingDto);
    const headers = new HttpHeaders(HEADER);
    const backendEndpoint = `${environment.BACKEND_URL}${this.path}`;
    console.log('data:' + body);

    return this.httpClient.post(backendEndpoint, body, {
      headers,
    });
  }
}
