import {RoomDto} from '../../../commons/dto/room-dto.model';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RoomService} from 'src/app/commons/service/room.service';
import {SnackbarService} from "../../../commons/service/snackbar.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'fit4bit-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  formGroup: FormGroup;
  file: File;

  public constructor(private roomService: RoomService, private snackbarService: SnackbarService) {
  }

  public ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  public onFileSelected(event: any): void {
    this.file = event.target.files[0];
  }

  public create(): void {
    const newRoom: RoomDto = this.formGroup.value;
    this.roomService.create$(newRoom).subscribe(() => {
        this.snackbarService.sendDataSaveOk();
      },
      (error: HttpErrorResponse) => {
        switch (error.status) {
          case 400:
            this.snackbarService.info({
              text: 'Daten ungültig!',
              typ: 'error',
            });
            break;
          case 409:
            this.snackbarService.info({
              text: 'Name bereits vorhanden!',
              typ: 'error',
            });
            break;
          default:
            this.snackbarService.sendStandardNok();
        }
      }
    );
  }
}
