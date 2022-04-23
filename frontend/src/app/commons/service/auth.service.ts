import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { UserLoginDto } from '../dto/userlogin-dto.model';
import { BaseHttpService } from './base-http.service';
import { LocalStoreService, JwtToken } from './jwt.service';
import { HEADER } from './service.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseHttpService<UserLoginDto> {
  protected path: string = 'authenticate';

  constructor(httpClient: HttpClient, private jwtService: LocalStoreService, private router: Router) {
    super(httpClient);
  }

  public login$(userLoginDto: UserLoginDto): Observable<any> {
    const body = JSON.stringify(userLoginDto);
    const headers = new HttpHeaders(HEADER);

    const post$ = this.httpClient.post<JwtToken>(
      this.createBackendEndpoint(),
      body,
      {
        headers,
      }
    );

    return post$.pipe(
      catchError((err) => {
        console.log('Logn failed', err);
        this.jwtService.clear();
        return throwError(err);
      }),
      tap((resposne) => {
        this.jwtService.storeJwt(resposne);
        this.router.navigateByUrl('/welcome');
      })
    );
  }
}
