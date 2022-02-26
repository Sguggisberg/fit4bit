import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientServiceService {

  constructor(private httpClient: HttpClient) {}


  create(httpPath: string):void {

  }
}
