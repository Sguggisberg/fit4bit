import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PayrollAddTrainingDto } from '../dto/payroll-add-training-dto';
import { PayrollDto } from '../dto/payroll-dto.model';
import { BaseHttpService } from './base-http.service';
import { HEADER } from './service.constants';

@Injectable({
  providedIn: 'root',
})
export class PayrollService extends BaseHttpService<PayrollDto> {
  protected path: string = 'payroll';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public addTrainings$(payroll: PayrollAddTrainingDto): Observable<any> {
    const body = JSON.stringify(payroll);
    const headers = new HttpHeaders(HEADER);
    return this.httpClient.put(this.createBackendEndpoint(), body, {
      headers,
    });
  }

  public submitPayroll$(payroll: PayrollDto): Observable<any> {
    const body = JSON.stringify(payroll);
    const headers = new HttpHeaders(HEADER);
    return this.httpClient.put(
      this.createBackendEndpoint() + '/submit/' + payroll.id,
      body,
      {
        headers,
      }
    );
  }

  public getOpenPayrolls$(): Observable<PayrollDto[]> {
    return this.httpClient.get<any>(
      this.createBackendEndpoint() + '/superior?filter=ZUR_FREIGABE_1'
    );
  }

  public updateState(payroll: PayrollDto): Observable<any> {
    const body = JSON.stringify(payroll);
    const headers = new HttpHeaders(HEADER);
    return this.httpClient.put(
      this.createBackendEndpoint() + '/release/',
      body,
      {
        headers,
      }
    );
  }
}
