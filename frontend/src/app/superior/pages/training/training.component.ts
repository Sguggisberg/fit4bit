import { UserDto } from 'src/app/commons/dto/user-dto.model';
import { TrainingTypDto } from '../../../commons/dto/training-typ-dto.model';
import { TrainingTypService } from '../../service/training-typ.service';
import { TrainingDto } from '../../../commons/dto/training-dto.model';
import { TrainingService } from '../../../commons/service/training.service';
import { RoomDto } from '../../../commons/dto/room-dto.model';
import { RoomService } from '../../../commons/service/room.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../../commons/service/user.service';
import { SnackbarService } from '../../../commons/service/snackbar.service';

@Component({
  selector: 'fit4bit-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit {
  roomsDtoList: RoomDto[] = [];
  trainingTypList: TrainingTypDto[] = [];
  userList: UserDto[] = [];
  formGroup: FormGroup;

  constructor(
    private roomService: RoomService,
    private formBuilder: FormBuilder,
    private trainingService: TrainingService,
    private trainingTypService: TrainingTypService,
    private userService: UserService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      roomId: new FormControl(''),
      trainingTypId: new FormControl(''),
      userId: new FormControl(''),
      startDate: new FormControl(''),
      duration: new FormControl(''),
      startHour: new FormControl(''),
      startMinutes: new FormControl(''),
    });

    let init = {
      startHour: 0,
      startMinutes: 0,
      duration: 0,
    };

    this.formGroup.patchValue(init);

    this.roomService.getAll$().subscribe((data) => (this.roomsDtoList = data));

    this.trainingTypService
      .getAll$()
      .subscribe((data) => (this.trainingTypList = data));

    this.userService.getAll$().subscribe((users) => (this.userList = users));
  }

  create(): void {
    const roomDto: RoomDto = {
      id: this.formGroup.value.roomId,
    };

    const trainingTypDto: TrainingTypDto = {
      id: this.formGroup.value.trainingTypId,
    };

    const userDto: UserDto = {
      id: this.formGroup.value.userId,
    };
    const newTraining: TrainingDto = {
      room: roomDto,
      trainingTyp: trainingTypDto,
      user: userDto,
      duration: this.formGroup.value.duration,
      runningDate: this.dateTimeConverter(),
    };
    this.trainingService.create$(newTraining).subscribe(
      () => this.snackbarService.sendDataSaveOk(),
      () => this.snackbarService.sendStandardNok()
    );
  }

  private dateTimeConverter(): Date {
    let date: Date = this.formGroup.value.startDate;
    date.setUTCHours(parseInt(this.formGroup.value.startHour));
    date.setMinutes(parseInt(this.formGroup.value.startMinutes));
    return date;
  }
}
