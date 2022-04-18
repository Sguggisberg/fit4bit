import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDto } from 'src/app/commons/dto/user-dto.model';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseHttpService<UserDto> {
  protected path: string = 'user';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
