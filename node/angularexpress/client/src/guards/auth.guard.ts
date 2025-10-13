import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const token = this.authService.getToken();

    if (token && !this.authService.isTokenExpired(token)) {
      return true; // ✅ User is authenticated
    }

    // ❌ Not logged in → redirect to login
    this.router.navigate(['/login']);
    return false;
  }
}
