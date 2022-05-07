import { RoomDto } from 'src/app/commons/dto/room-dto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root',
})
export class RoomService extends BaseHttpService<RoomDto> {
  protected path: string = 'room';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
