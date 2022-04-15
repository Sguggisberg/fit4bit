import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  public create$(dto: T): Observable<any> {
    const body = JSON.stringify(dto);
    const headers = new HttpHeaders(HEADER);
    return this.httpClient.post(this.createBackendEndpoint(), body, {
      headers,
    });
  }

  public createFromFormData$(formData: FormData): Observable<any> {
    return this.httpClient.post(this.createBackendEndpoint(), formData);
  }

  public getAll$(): Observable<T[]> {
    return this.httpClient.get<any>(this.createBackendEndpoint());
  }

  protected createBackendEndpoint(): string {
    return `${environment.BACKEND_URL}${this.path}`;
  }

  // https://medium.com/@rameez.s.shaikh/upload-and-retrieve-images-using-spring-boot-angular-8-mysql-18c166f7bc98
  uploadImage$(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('id', '1');
    return this.httpClient.post(
      this.createBackendEndpoint() + '/image',
      formData
    );
  }
}
