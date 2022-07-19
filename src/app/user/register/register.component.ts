import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import IUser from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private auth: AuthService) {}

  inSubmission = false;

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);

  email = new FormControl('', [Validators.required, Validators.email]);

  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(120),
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
  ]);

  confirmPassword = new FormControl('', [Validators.required]);
  phone = new FormControl('', [
    Validators.required,
    Validators.maxLength(13),
    Validators.minLength(13),
  ]);

  showAlert = false;
  alertMsg = 'Please wait! Your account is being created.';
  alertColor = 'blue';

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirmPassword: this.confirmPassword,
    phone: this.phone,
  });

  async register() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being created.';
    this.alertColor = 'blue';
    this.inSubmission = true;

    // (await this.auth.createUser(this.registerForm.value as IUser)).subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (error) => {
    //     console.error(error);
    //     this.alertMsg = 'An unexpected error occurred. Please try again later';
    //     this.alertColor = 'red';
    //     this.inSubmission = false;
    //     return;
    //   }
    // );

    // this.alertMsg = 'Success!! Your account has been created.';
    // this.alertColor = 'green';

  }
}
