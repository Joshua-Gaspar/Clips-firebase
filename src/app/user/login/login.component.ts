import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  // credentials = {
  //   email: '',
  //   password: '',
  // };

  showAlert =false ;
  alertMsg = 'Please wait! We are logging you in';
  alertColor = 'blue';
  inSubmission = false;

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [Validators.required]);

  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  async login() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! We are logging you in';
    this.alertColor = 'blue';
    this.inSubmission = true;

    try {
      await this.auth.signInWithEmailAndPassword(
        this.email.value,
        this.password.value
      );
    } catch (err) {
      console.log(err)
      this.alertMsg = 'Unexpected error occur';
      this.alertColor = 'red';
      this.inSubmission = false;
      return
  
    }

    this.alertMsg = 'You are logging ';
    this.alertColor = 'green';
    this.inSubmission = true;


  }
}
