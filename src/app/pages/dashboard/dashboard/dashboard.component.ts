import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userName = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userName = localStorage.getItem('userLoggedIn') || '';
  }

  logout() {
    localStorage.removeItem('userLoggedIn');
    this.router.navigate(['/auth']);
  }
}
