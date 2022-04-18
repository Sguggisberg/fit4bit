import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'fit4bit-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public profileForm: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public login(): void {
    this.authService.login$(this.profileForm.value).subscribe();
  }
}
