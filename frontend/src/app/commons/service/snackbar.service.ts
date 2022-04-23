import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Message } from '../models/messagebox.model';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  infoSubject = new BehaviorSubject<Message | undefined>(undefined);

  public info(msg: Message): void {
    this.infoSubject.next(msg);
    this.delay();
  }

  private delay(): void {
    setTimeout(() => {
      this.infoSubject.next(undefined);
    }, 3000);
  }
}
