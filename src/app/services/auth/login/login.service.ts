import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Credentials } from '../../../models/credentials.type';
import { LoginResponse } from '../../../models/login-response.type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isAuthenticated = signal<boolean>(false);
  private router = inject(Router);
  private http = inject(HttpClient);

  constructor() {
    // Initialize authentication state from localStorage
    const token = localStorage.getItem('chess-login-token');
    this.isAuthenticated.set(!!token);
  }

  login(credentials: Credentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('https://localhost:7037/Auth/login', credentials)
      .pipe(
        tap((response: LoginResponse) => {
          if (response.token) {
            this.isAuthenticated.set(true);
            localStorage.setItem('chess-login-token', response.token);
          } else {
            this.isAuthenticated.set(false);
          }
        })
      );
  }

  logout(): void{
    this.isAuthenticated.set(false);
    // localStorage.removeItem('chess-login-token');
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  //used signal getter instead of isLoggedIn method
  public get isAuthenticatedSignal() {
    return this.isAuthenticated;
  }

  public init() {
    this.isAuthenticatedSignal.set(false);
    localStorage.clear(); // Clear local storage on initialization
  }
}
