import { RoomDto } from 'src/app/commons/dto/room-dto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomService extends BaseHttpService<RoomDto> {
  protected path: string = 'room';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public findByNameIgnroreCase$(name: string): Observable<RoomDto | null> {
    return this.httpClient.get(this.createBackendEndpoint() + '/' + name);
  }
}
