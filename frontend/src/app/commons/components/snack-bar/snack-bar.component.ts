import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SnackbarService } from '../../service/snackbar.service';
import { Message } from '../../models/messagebox.model';

@Component({
  selector: 'fit4bit-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
})
export class SnackBarComponent {

public infoSubject: BehaviorSubject<Message | undefined> =
  this.snackbarService.infoSubject;

public goOpen:boolean=this.snackbarService.infoSubject!==undefined;
  constructor(private snackbarService: SnackbarService) {}
}
