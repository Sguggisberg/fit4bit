import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent {
  fileName = '';
  file: File;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.file = event.target.files[0];

    if (this.file) {
      this.fileName = this.file.name;

      const formData = new FormData();

      formData.append('image', this.file);

      const upload$ = this.http.post(
        'http://localhost:8080/api/room',
        formData
      );

      upload$.subscribe();
    }
  }
}
