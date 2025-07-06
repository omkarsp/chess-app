import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Credentials } from '../../../models/credentials.type';
import { LoginResponse } from '../../../models/login-response.type';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private isAuthenticated: boolean = false;

  private isAuthenticated = signal<boolean>(false);

  private http = inject(HttpClient);

  login(credentials: Credentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('https://localhost:7037/Auth/login', credentials)
      .pipe(
        tap((response: LoginResponse) => {
          if (response.token) {
            this.isAuthenticated.set(true);
            localStorage.setItem('token', response.token);
          } else {
            this.isAuthenticated.set(false);
          }
        })
      );
  }

  logout(): void{
    this.isAuthenticated.set(false);
    localStorage.removeItem('token');
  }

  // public isLoggedIn() : boolean{
  //   return this.isAuthenticated();
  // }

  //used signal getter instead of isLoggedIn method
  public get isAuthenticatedSignal() {
    return this.isAuthenticated;
  }
}
