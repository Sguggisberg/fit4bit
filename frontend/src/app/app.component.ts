import {Component, OnInit} from '@angular/core';
import {LocalStoreService} from "./commons/service/jwt.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private localStoreService: LocalStoreService
  ) {
  }

  ngOnInit(): void {
    this.localStoreService.clear();
  }

}
