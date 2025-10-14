import { Component, OnInit, signal } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  username = '';
  menuOpen = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.isLoggedIn$().subscribe(isLogged => {
       this.isLoggedIn = isLogged;
    });

    const token = this.authService.getToken();
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        this.username = decoded.username || decoded.email || 'User';
      } catch (e) {
        console.error('Invalid token');
      }
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.authService.onLogout();
    this.menuOpen = false;
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
