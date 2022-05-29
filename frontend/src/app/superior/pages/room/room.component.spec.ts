import { RoomComponent } from './room.component';
import { RoomService } from '../../../commons/service/room.service';
import { SnackbarService } from '../../../commons/service/snackbar.service';
import { anything, instance, mock, when } from 'ts-mockito';
import { of } from 'rxjs';

describe('RoomComponent', () => {
  let component: RoomComponent;
  let roomService: RoomService;
  let snackbarService: SnackbarService;

  beforeEach(() => {
    snackbarService = mock(SnackbarService);
    roomService = mock(RoomService);
    component = new RoomComponent(
      instance(roomService),
      instance(snackbarService)
    );
    component.ngOnInit();
  });

  it('form invalid when empty', () => {
    // arrange
    when(roomService.findByNameIgnroreCase$(anything())).thenReturn(of(null));

    // act
    component.formGroup.controls.name.setValue('');

    //assert
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('form invalid when input to short', () => {
    // arrange
    when(roomService.findByNameIgnroreCase$(anything())).thenReturn(of(null));

    //act
    component.formGroup.controls.name.setValue('aa');

    //assert
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('form invalid when input to long', () => {
    // arrange
    when(roomService.findByNameIgnroreCase$(anything())).thenReturn(of(null));

    // act
    component.formGroup.controls.name.setValue(
      '012345678901234567890123456789X'
    );

    // assert
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('form valid when input ok', () => {
    // arrange
    when(roomService.findByNameIgnroreCase$(anything())).thenReturn(of(null));

    // act
    component.formGroup.controls.name.setValue('abc');

    //assert
    expect(component.formGroup.valid).toBeTruthy();
  });

  it('form invalid when input regex nok', () => {
    // arrange
    when(roomService.findByNameIgnroreCase$(anything())).thenReturn(of(null));

    // act
    component.formGroup.controls.name.setValue('abc&&');

    // assert
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('form invalid when input regex nok', () => {
    // arrange
    when(roomService.findByNameIgnroreCase$(anything())).thenReturn(of(null));

    // act
    component.formGroup.controls.name.setValue('** 1=1');

    // assert
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('form invalid when Room already exist', () => {
    // arrange
    when(roomService.findByNameIgnroreCase$(anything())).thenReturn(
      of({ name: 'red', id: 2 })
    );

    // act
    component.formGroup.controls.name.setValue('red');

    //assert
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('form valid when Room not already exist', () => {
    // arrange
    when(roomService.findByNameIgnroreCase$(anything())).thenReturn(of(null));

    // act
    component.formGroup.controls.name.setValue('red');

    //assert
    expect(component.formGroup.valid).toBeTrue();
  });
});
