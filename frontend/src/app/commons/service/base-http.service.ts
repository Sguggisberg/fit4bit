import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dto } from '../dto/dto.model';
import { RoomDto } from '../dto/room-dto.model';
import { HEADER } from './service.constants';



@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  path: any;

   constructor(private httpClient: HttpClient) {}


   create$(dto: Dto): Observable<any> {
    const body = JSON.stringify(dto);
    const headers = new HttpHeaders(HEADER);
    const backendEndpoint = `${environment.BACKEND_URL}${this.path}`;
    console.log('data:' + body);
    return this.httpClient.post(backendEndpoint, body, {
      headers,
    });
  }

  getAllRooms$(): Observable<RoomDto[]> {
    const backendEndpoint = `${environment.BACKEND_URL}${this.path}`;
    return this.httpClient.get<any>(backendEndpoint);
  }

}
