import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAuthenticated: boolean = true;

  private http = inject(HttpClient);

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<{ token: string, expiration: string }>(
      'https://localhost:7037/Auth/login',
      credentials
    ).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  logout(): void{
    this.isAuthenticated = false;
  }

  isLoggedIn() : boolean{
    return this.isAuthenticated;
  }
}
