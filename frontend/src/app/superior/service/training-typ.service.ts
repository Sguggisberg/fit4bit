import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainingDto } from 'src/app/commons/dto/training-dto.model';
import { TrainingTypDto } from 'src/app/commons/dto/training-typ-dto.model';
import { HEADER } from 'src/app/commons/service/service.constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainingTypService {
  private path: string = 'trainingtyp';

  constructor(private httpClient: HttpClient) {}

  $create(trainingTypDto: TrainingTypDto): Observable<any> {
    const body = JSON.stringify(trainingTypDto);
    const headers = new HttpHeaders(HEADER);
    const backendEndpoint = `${environment.BACKEND_URL}${this.path}`;
    return this.httpClient.post(backendEndpoint, body, {
      headers,
    });
  }

  getAllTraininngTyps$(): Observable<TrainingTypDto[]> {
    const backendEndpoint = `${environment.BACKEND_URL}${this.path}`;
    return this.httpClient.get<any>(backendEndpoint);
  }
}
