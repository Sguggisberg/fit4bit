import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomComponent } from './room.component';
import {RoomService} from "../../../commons/service/room.service";
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {SnackbarService} from "../../../commons/service/snackbar.service";

describe('RoomComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let component: RoomComponent;
  let fixture: ComponentFixture<RoomComponent>;
  let roomService: RoomService;
  let snackbarService: SnackbarService;

  beforeEach( () => {
     TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        RoomService,SnackbarService

      ]
    });

    // https://testing-angular.com/testing-complex-forms/
    // https://simpleweblearning.com/form-testing-in-angular/
    // https://chariotsolutions.com/blog/post/testing-angular-2-0-x-services-http-jasmine-karma/
     httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    roomService = TestBed.inject(RoomService);
    snackbarService = TestBed.inject(SnackbarService);
    fixture = TestBed.createComponent(RoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('form invalid when empty', () => {
    component.formGroup.controls.name.setValue('');
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('form invalid when input to short', () => {
    component.formGroup.controls.name.setValue('aa');
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('form invalid when input to long', () => {
    component.formGroup.controls.name.setValue('012345678901234567890123456789X');
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('form valid when input ok', () => {
    component.formGroup.controls.name.setValue('abc');
    expect(component.formGroup.valid).toBeTruthy();
  });

  it('form invalid when input regex nok', () => {
    component.formGroup.controls.name.setValue('abc&&');
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('form invalid when input regex nok', () => {
    component.formGroup.controls.name.setValue('** 1=1');
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('should test form validity', () => {
    const form = component.formGroup;
    //expect(service.findByNameIgnroreCase$('abc').subscribe()).toBe(true);

    expect(form.valid).toBeFalsy();

    const nameInput = form.controls.name;
    nameInput.setValue('abc');

    expect(form.valid).toBeTruthy();
  })

});
