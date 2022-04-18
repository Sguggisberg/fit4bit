import { Injectable } from '@angular/core';

export interface JwtToken {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor() {}

  public storeJwt(jwt: JwtToken): void {
    localStorage.setItem('token', jwt.token);
  }

  public getJwt(): JwtToken | undefined | null {
    let jwtToken: JwtToken;
    let obj = localStorage!.getItem('token');
    if (obj == null || obj == undefined) {
      return null;
    }

    jwtToken = {
      token: obj,
    };
    console.log('token: ', obj);

    return jwtToken;
  }
}
