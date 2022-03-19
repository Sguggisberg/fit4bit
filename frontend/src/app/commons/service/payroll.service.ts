import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PayrollDto } from '../dto/payroll-dto.model';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class PayrollService extends BaseHttpService<PayrollDto>{
  protected path: string = 'payroll';

  constructor(httpClient: HttpClient) {
    super(httpClient)
  }
}
