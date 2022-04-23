import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Message } from '../models/messagebox.model';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  infoSubject = new BehaviorSubject<string | undefined>(undefined);

  public info(msg: string): void {

    this.infoSubject.next(msg);
    this.delay();
  }

  private delay(): void {
    setTimeout(() => {
      this.infoSubject.next(undefined);
    }, 2000);
  }
}
