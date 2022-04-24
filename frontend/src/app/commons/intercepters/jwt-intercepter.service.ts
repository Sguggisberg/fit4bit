import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtToken } from '../models/jwt-token.model';
import { LocalStoreService } from '../service/jwt.service';

@Injectable({
  providedIn: 'root',
})
export class JwtIntercepterService implements HttpInterceptor {
  constructor(private localStoreService: LocalStoreService) {}

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token: JwtToken = this.localStoreService.getJwt();
    if (token.token != '') {
      httpRequest = httpRequest.clone({
        setHeaders: { Authorization: `Bearer ${token.token}` },
      });
    }
    return next.handle(httpRequest);
  }
}
