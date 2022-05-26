import { Component,  Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStoreService } from '../../../commons/service/jwt.service';
import { SnackbarService } from '../../../commons/service/snackbar.service';
import { User } from '../../../commons/models/user.model';

@Component({
  selector: 'fit4bit-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.scss'],
})
export class MenuContentComponent implements OnInit {
  @Input()
  public sideBarIsOpen: boolean;

  public user$: Observable<User | undefined>;
  public myMenu = false;

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

  public closeAll(): void {
    this.myMenu = false;
  }

  public openMyMenu($event: Event): void {
    $event.stopPropagation();
    this.myMenu = !this.myMenu;
  }
}
