import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomDto } from 'src/app/commons/dto/room-dto.model';
import { HEADER } from 'src/app/commons/service/service.constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private path: string = 'room';

  constructor(private httpClient: HttpClient) {}

  $create(roomDto: RoomDto): Observable<any> {
    const body = JSON.stringify(roomDto);
    const headers = new HttpHeaders(HEADER);
    const backendEndpoint = `${environment.BACKEND_URL}${this.path}`;
    console.log('data:' + body);
    return this.httpClient.post(backendEndpoint, body, {
      headers,
    });
  }
}
