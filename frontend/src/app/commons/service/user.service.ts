import { HEADER } from './service.constants';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDto } from 'src/app/commons/dto/user-dto.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private path: string = 'user';

  constructor(private httpClient: HttpClient) {}

  $create(userDto: UserDto): Observable<any> {
    const body = JSON.stringify(userDto);
    const headers = new HttpHeaders(HEADER);
    const backendEndpoint = `${environment.BACKEND_URL}${this.path}`;
    console.log('data:' + body);
    return this.httpClient.post(backendEndpoint, body, {
      headers,
    });
  }

  getAllUsers$(): Observable<UserDto[]> {
    const backendEndpoint = `${environment.BACKEND_URL}${this.path}`;
    return this.httpClient.get<any>(backendEndpoint);
  }
}
