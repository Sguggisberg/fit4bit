import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from 'src/app/commons/service/jwt.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  public userName$: Observable<string>;

  constructor(private localStoreService:LocalStoreService) { }

  ngOnInit(): void {
    this.userName$ = this.localStoreService.getUseName$();
  }

}
