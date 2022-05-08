import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStoreService } from '../../commons/service/jwt.service';
import { SnackbarService } from '../../commons/service/snackbar.service';
import {User} from "../../commons/models/user.model";
import {startWith} from "rxjs/operators";

@Component({
  selector: 'fit4bit-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.scss'],
})
export class MenuContentComponent implements OnInit {
  public user$: Observable<User>;
  public sideBarIsOpen = false;

  constructor(
    private localStoreService: LocalStoreService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.user$ = this.localStoreService.user$.pipe();
  }

  public logout(): void {
    this.localStoreService.clear();
    this.snackbar.info({ text: 'Du bist ausgeloggt', typ: 'info' });
  }
}
