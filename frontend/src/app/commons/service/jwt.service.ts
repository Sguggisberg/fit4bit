import { UserDto } from 'src/app/commons/dto/user-dto.model';
import { Roles } from './../dto/role-dto.model';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Subject } from 'rxjs';

export interface JwtToken {
  token: string;
}

 interface DecodedJwtTokenData {
  sub: string;
  roles: Roles[];
  exp: number;
  iat: number;
}
@Injectable({
  providedIn: 'root',
})
export class LocalStoreService {
  public user$ = new Subject<UserDto>();

  public storeJwt(jwt: JwtToken): void {
    localStorage.setItem('token', jwt.token);
    this.user$.next(this.getUser());
  }

  public getJwt(): JwtToken {
    let jwtToken: JwtToken;
    let obj = localStorage!.getItem('token');
    if (obj == null || obj == undefined) {
      this.user$.next(undefined);
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
    this.user$.next(undefined);
  }

  private getUser(): UserDto {
    let decodedToken: DecodedJwtTokenData = jwt_decode(this.getJwt().token);
    let user:  UserDto = {
      email: decodedToken.sub,
      roles: decodedToken.roles
    }
    return user;
  }
}
