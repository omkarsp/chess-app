import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { User } from '../../../models/user.type';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private http = inject(HttpClient);

  register(user: User): Observable<any>{
    return this.http.post<{ token: string }>('https://localhost:7037/Auth/register', user)
    .pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      }),
      tap(response => console.log('Backend response:', response)),
      catchError(err => {
        console.error('Backend error:', err);
        return of(null);
      })
    );
  }
}
