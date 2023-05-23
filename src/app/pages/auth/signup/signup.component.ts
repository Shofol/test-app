import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from 'src/app/in-memory-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(private authService: AuthService) {}

  signupForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  addNewUser() {
    let newUser: User = { id: '', name: '', password: '' };

    newUser.id = '1';
    newUser.name = this.signupForm.controls.name.value || '';
    newUser.password = this.signupForm.controls.password.value || '';
    this.authService.addUser(newUser).subscribe((res) => {
      alert('User Created');
    });
  }
}
