import { Roles } from './../../commons/dto/role-dto.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from 'src/app/commons/service/jwt.service';
import { UserDto } from 'src/app/commons/dto/user-dto.model';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  public user$: Observable<UserDto>;

  public hasRoles$: Observable<Roles>;

  constructor(private localStoreService:LocalStoreService) { }

  ngOnInit(): void {
    this.user$ = this.localStoreService.user$;

  }

}
