import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { AUTH_CONSTANTS } from '../constants/auth.constants';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn$ = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) {}

   // ✅ Called after successful login
  onLoginSuccess(token: string, role: string) {
    localStorage.setItem(AUTH_CONSTANTS.TOKEN_KEY, token);
    localStorage.setItem(AUTH_CONSTANTS.USER_ROLE_KEY, role);
    this.loggedIn$.next(true);
  }

  // ✅ Called on logout
  onLogout() {
    localStorage.removeItem(AUTH_CONSTANTS.TOKEN_KEY);
    this.loggedIn$.next(false);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(AUTH_CONSTANTS.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(AUTH_CONSTANTS.TOKEN_KEY);
  }

  isTokenExpired(token: string): boolean {
    try {
      const decoded: any = jwtDecode(token);
      return decoded.exp * 1000 < Date.now();
    } catch {
      return true; // invalid or expired
    }
  }

  // ✅ Reactive login state (for layouts)
  isLoggedIn$() {
    return this.loggedIn$.asObservable();
  }
}
