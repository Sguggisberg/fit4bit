import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from 'src/app/commons/service/jwt.service';
import { UserDto } from 'src/app/commons/dto/user-dto.model';
import {SnackbarService} from "../../commons/service/snackbar.service";

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  public user$: Observable<UserDto>;

  constructor(private localStoreService:LocalStoreService,  private snackbar: SnackbarService) { }

  ngOnInit(): void {
    this.user$ = this.localStoreService.user$;

  }

  public logout():void {
    this.localStoreService.clear();
    this.snackbar.info({ text: 'Du bist ausgeloggt', typ: 'info' })
  }

}
