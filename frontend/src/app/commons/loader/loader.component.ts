import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from '../service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  isLoading: BehaviorSubject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) {}
  ngOnInit(): void {}
}
