import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input()
  public personalMenuIsOpen = false;

  @Output() public personalMenuEmitter: EventEmitter<boolean> =
    new EventEmitter();

  public user$: Observable<User | undefined>;

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
    this.closeAll();
  }

  public personalMenuOpen($event: Event): void {
    $event.stopPropagation();
    this.personalMenuIsOpen = !this.personalMenuIsOpen;
    this.personalMenuEmitter.emit(this.personalMenuIsOpen);
  }

  private closeAll(): void {
    this.personalMenuIsOpen = false;
    this.personalMenuEmitter.emit(this.personalMenuIsOpen);
  }
}
