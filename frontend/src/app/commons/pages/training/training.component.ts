import { UserDto } from 'src/app/commons/dto/user-dto.model';
import { TrainingTypDto } from './../../dto/training-typ-dto.model';
import { TrainingTypService } from './../../../superior/service/training-typ.service';
import { TrainingDto } from './../../dto/training-dto.model';
import { TrainingService } from './../../service/training.service';
import { RoomDto } from './../../dto/room-dto.model';
import { RoomService } from './../../service/room.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-training',
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
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      roomId: new FormControl(''),
      trainingTypId: new FormControl(''),
      userId: new FormControl(''),
      duration: new FormControl('')
    });

    this.roomService
      .getAllRooms$()
      .subscribe(data => this.roomsDtoList = data);

    this.trainingTypService
      .getAllTraininngTyps$()
      .subscribe(data => this.trainingTypList = data);

    this.userService
      .getAllUsers$()
      .subscribe(users => this.userList = users);
  }

  create(): void {
    const roomDto: RoomDto = {
      id: this.formGroup.value.roomId,
    };

    const trainingTypDto: TrainingTypDto = {
      id: this.formGroup.value.trainingTypId,
    };

    const userDto: UserDto = {
      id: this.formGroup.value.userId
    };
    const newTraining: TrainingDto = {
      room: roomDto,
      trainingTyp: trainingTypDto,
      user: userDto,
      duration: this.formGroup.value.duration

    };
    this.trainingService.create$(newTraining).subscribe();
  }
}
