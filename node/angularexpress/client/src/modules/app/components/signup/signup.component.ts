import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.css',
  standalone:false
})
export class SignupComponent {
  username = '';
  password = '';
  role = 'user';

  constructor(private http: HttpClient) {}

  signup() {
    this.http.post(`${environment.apiUrl}/auth/signup`, {
      username: this.username,
      password: this.password,
      role: this.role
    }).subscribe({
      next: () => alert('Signup successful!'),
      error: (err) => alert(err.error.message)
    });
  }
}
