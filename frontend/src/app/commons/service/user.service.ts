import { Observable } from 'rxjs';
import { UserLoginDto } from './../dto/userlogin-dto.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDto } from 'src/app/commons/dto/user-dto.model';
import { BaseHttpService } from './base-http.service';
import { HEADER } from './service.constants';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseHttpService<UserDto> {
  protected path: string = 'user';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }


}
