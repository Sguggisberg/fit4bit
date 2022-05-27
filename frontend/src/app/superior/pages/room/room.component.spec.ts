import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomComponent } from './room.component';
import {RoomService} from "../../../commons/service/room.service";
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('RoomComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let component: RoomComponent;
  let fixture: ComponentFixture<RoomComponent>;
  let service: RoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        RoomService,

      ]
    });
    // httpClient = TestBed.inject(HttpClient);
    // httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RoomService);
    fixture = TestBed.createComponent(RoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should test form validity', () => {
    const form = component.formGroup;
    expect(form.valid).toBeFalsy();

    const nameInput = form.controls.name;
    nameInput.setValue('John Peter');

    expect(form.valid).toBeTruthy();
  })

});
