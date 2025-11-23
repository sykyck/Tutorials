import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../../../../../services/auth.service';

@Component({
  selector: 'app-public-layout',
  standalone: false,
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.css']
})
export class PublicLayoutComponent implements OnInit {
  isLoggedIn = false;
  username = '';
  menuOpen = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.isLoggedIn$().subscribe((isLogged:boolean) => {
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
