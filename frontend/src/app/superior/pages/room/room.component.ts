import { RoomDto } from '../../../commons/dto/room-dto.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoomService } from 'src/app/commons/service/room.service';

@Component({
  selector: 'fit4bit-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  formGroup: FormGroup;
  file: File;

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  create(): void {
    const newRoom: RoomDto = this.formGroup.value;
    this.roomService.create$(newRoom).subscribe();
  }
}
