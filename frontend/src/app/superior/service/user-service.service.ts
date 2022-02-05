import { HEADER } from './../../commons/service/service.constants';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDto } from 'src/app/commons/dto/user-dto.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private path: string = 'user';

  constructor(private httpClient: HttpClient) {}

  $create(userDto: UserDto): Observable<any> {
    const body = JSON.stringify(userDto);
    console.log('data: ' + body);
    console.log('url:' + environment.BACKEND_URL);
    const headers = new HttpHeaders(HEADER);
    const backendEndpoint = `${environment.BACKEND_URL}${this.path}`;
    return this.httpClient.post(backendEndpoint, body, {
      headers,
    });
  }
}
