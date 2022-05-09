import { UserDto } from 'src/app/commons/dto/user-dto.model';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Subject } from 'rxjs';
import { JwtToken, DecodedJwtTokenData } from '../models/jwt-token.model';
import { User } from '../models/user.model';
import { Roles } from '../models/role.model';

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
    if (obj == null) {
      this.user$.next(undefined);
      return {
        token: '',
      };
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

  public hasAtLeastOneRole(roles: Roles): boolean {
    if (roles === undefined) {
      return false;
    }
    if (this.getUser()?.roles === undefined) {
      return false;
    }

    if (
      roles?.authority.some((x) =>
        this.getUser()!.roles!.pop()!.authority!.includes(x)
      )
    ) {
      return true;
    }
    return false;
  }

  public getUser(): User {
    let decodedToken: DecodedJwtTokenData = jwt_decode(this.getJwt().token);
    return {
      email: decodedToken.sub,
      roles: decodedToken.Roles,
    };
  }
}