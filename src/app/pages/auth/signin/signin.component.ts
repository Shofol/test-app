import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/in-memory-data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signinForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  users: User[] = [];
  isSource = false;
  source = '';

  ngOnInit(): void {
    this.getUser();
    this.route.queryParams.subscribe((res) => {
      this.isSource = res['source'];
      if (this.isSource) {
        this.source = res['source'];
      }
    });
  }

  getUser() {
    this.authService.getUsers().subscribe((res) => {
      this.users = res;
      console.log(res);
    });
  }

  login() {
    this.signinForm.markAsDirty();
    this.signinForm.markAllAsTouched();

    if (this.signinForm.valid) {
      const filterdUsers = this.users.filter((user: User) => {
        if (
          user.name === this.signinForm.controls.name.value &&
          user.password === this.signinForm.controls.password.value
        ) {
          return true;
        }
        return false;
      });
      if (filterdUsers.length > 0) {
        localStorage.setItem(
          'userLoggedIn',
          this.signinForm.controls.name.value || ''
        );
        if (this.isSource) {
          this.router;
        }
        if (this.isSource) {
          this.router.navigate([this.source]);
        }
        this.router.navigate(['/dashboard']);
        // alert('success');
      } else {
        alert('No user found');
      }
    }
  }
}
