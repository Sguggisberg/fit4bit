import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginDto } from '../dto/userlogin-dto.model';
import { BaseHttpService } from './base-http.service';
import { HEADER } from './service.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseHttpService<UserLoginDto> {

  protected path: string = 'authenticate';


  public login$(userLoginDto:UserLoginDto): Observable<any> {
    const body = JSON.stringify(userLoginDto);
    const headers = new HttpHeaders(HEADER);
    return this.httpClient.post(this.createBackendEndpoint(), body, {
      headers,
    });
  }
}
