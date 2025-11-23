import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { AUTH_CONSTANTS } from '../../../../constants/auth.constants';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.css',
  standalone:false
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router, private authService:AuthService) {}

  login() {
    this.http.post<any>(`${environment.apiUrl}/auth/login`, {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res) => {
        this.authService.onLoginSuccess(res.token, res.role);
        this.router.navigate(['/app/asyncpipe']);
      },
      error: (err) => alert(err.error.message)
    });
  }
}
