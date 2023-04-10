import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user: User = {
    id: 0,
    username: '',
    email: '',
    password: '',
    roleId: '',
    salary: null,
    description: '',
  };
  roles = ['Freelancer', 'Client'];
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  onSubmit(form: NgForm) {
    this.authService.register(form.value).subscribe(
      (data) => {
        if (form.value.role == 'Freelancer') {
          form.value.role = 1;
        } else {
          form.value.role = 2;
        }
        localStorage.setItem('Token', data.token);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/app-login']);
      },
      (err) => {
        console.log(err.error.message);
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  constructor(private authService: AuthService, private router: Router) {}
}
