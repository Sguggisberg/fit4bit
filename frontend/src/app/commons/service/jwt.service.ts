import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { JwtToken, DecodedJwtTokenData } from '../models/jwt-token.model';
import { User } from '../models/user.model';
import { Roles } from '../models/role.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LocalStoreService {
  public user$ = new BehaviorSubject<User | undefined>(undefined);

  constructor(private router: Router) {}

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

    if (LocalStoreService.tokenExpired(jwtToken.token)) {
      this.clear();
      this.router.navigateByUrl('/login');
    }

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

    return !!roles?.authority.some((x) =>
      this.getUser()!.roles!.pop()!.authority!.includes(x)
    );
  }

  public getUser(): User {
    let decodedToken: DecodedJwtTokenData = jwt_decode(this.getJwt().token);
    return {
      username: decodedToken.sub,
      roles: decodedToken.Roles,
    };
  }

  private static tokenExpired(token: string): boolean {
    const expiry = JSON.parse(atob(token.split('.')[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }
}
