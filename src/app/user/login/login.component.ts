import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import IUser from 'src/app/models/user.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  inSubmission = false;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [Validators.required]);

  showAlert = false;
  alertMsg = 'Signing in.';
  alertColor = 'blue';

  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  async login() {
    this.showAlert = true;
    this.alertMsg = 'Signing in.';
    this.alertColor = 'blue';
    this.inSubmission = true;

    console.log(this.loginForm.value);

    // (await this.auth.LoginUser(this.loginForm.value)).subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.alertMsg = 'Login succesful';
    //     this.alertColor = 'green';
    //   },
    //   (error) => {
    //     this.alertMsg = 'An unexpected error occurred. Please try again later';
    //     this.alertColor = 'red';
    //     this.inSubmission = false;
    //     return
    //   }

    // );
 
  }
}
