import { Roles } from './../dto/role-dto.model';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Observable, of } from 'rxjs';

export interface JwtToken {
  token: string;
}

export interface DecodedJwtTokenData {
  sub: string;
  roles: Roles[];
  exp: number;
  iat: number;
}
@Injectable({
  providedIn: 'root',
})
export class LocalStoreService {
  public storeJwt(jwt: JwtToken): void {
    localStorage.setItem('token', jwt.token);
   }

  public getJwt(): JwtToken {
    let jwtToken: JwtToken;
    let obj = localStorage!.getItem('token');
    if (obj == null || obj == undefined) {
      return (jwtToken = {
        token: '',
      });
    }

    jwtToken = {
      token: obj,
    };

    return jwtToken;
  }

  public clear(): void {
    localStorage.clear();
  }

  public getUseName$(): Observable<string> {
    let decodedToken: DecodedJwtTokenData = jwt_decode(this.getJwt().token);
    return of(decodedToken.sub);
  }
}
