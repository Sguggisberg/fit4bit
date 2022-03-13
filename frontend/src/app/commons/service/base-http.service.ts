import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dto } from '../dto/dto.model';
import { HEADER } from './service.constants';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseHttpService<T> {
  protected path: string;
  protected httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  create$(dto: Dto): Observable<any> {
    const body = JSON.stringify(dto);
    const headers = new HttpHeaders(HEADER);
    return this.httpClient.post(this.createBackendEndpoint(), body, {
      headers,
    });
  }

  getAll$(): Observable<T[]> {
    return this.httpClient.get<any>(this.createBackendEndpoint());
  }

  private createBackendEndpoint(): string {
    return `${environment.BACKEND_URL}${this.path}`;
  }
}
