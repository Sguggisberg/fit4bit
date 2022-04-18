import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { UserLoginDto } from '../dto/userlogin-dto.model';
import { BaseHttpService } from './base-http.service';
import { JwtService, JwtToken } from './jwt.service';
import { HEADER } from './service.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseHttpService<UserLoginDto> {

  protected path: string = 'authenticate';

  constructor(httpClient: HttpClient, private jwtService:JwtService) {
    super(httpClient)
  }

  public login$(userLoginDto:UserLoginDto): Observable<any> {
    const body = JSON.stringify(userLoginDto);
    const headers = new HttpHeaders(HEADER);
    return this.httpClient.post<JwtToken>(
      this.createBackendEndpoint(), body, {
      headers,
    }).pipe(tap(resposne => {this.jwtService.storeJwt(resposne)
    console.log('store: ' ,this.jwtService.getJwt())
    }

    ))
    ;
  }
}


