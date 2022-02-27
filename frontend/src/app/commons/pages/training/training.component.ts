import { TrainingTypDto } from './../../dto/training-typ-dto.model';
import { TrainingTypService } from './../../../superior/service/training-typ.service';
import { TrainingDto } from './../../dto/training-dto.model';
import { TrainingService } from './../../service/training.service';
import { RoomDto } from './../../dto/room-dto.model';
import { RoomService } from './../../service/room.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit {
  roomsDtoList: RoomDto[] = [];
  trainingTypList: TrainingTypDto[] = [];
  formGroup: FormGroup;

  constructor(
    private roomService: RoomService,
    private formBuilder: FormBuilder,
    private trainingService: TrainingService,
    private trainingTypService: TrainingTypService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      roomId: new FormControl(''),
      trainingTypId: new FormControl(''),
    });

    this.roomService
      .getAllRooms$()
      .pipe(tap(console.log))
      .subscribe(data => this.roomsDtoList = data);

      this.trainingTypService.getAllTraininngTyps$()
    .pipe(tap(console.log))
    .subscribe(data => this.trainingTypList = data);
  }

  create(): void {
    const roomDto: RoomDto = {
      id: this.formGroup.value.roomId,
    };

    const trainingTypDto: TrainingTypDto = {
      id: this.formGroup.value.trainingTypId
    }
    const newTraining: TrainingDto = {
      room: roomDto,
      trainingTyp: trainingTypDto
    };
    this.trainingService.create$(newTraining).subscribe();
  }
}
