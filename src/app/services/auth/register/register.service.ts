import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { User } from '../../../models/user.type';
import { environment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  register(user: User): Observable<any>{
    return this.http.post<{ token: string }>(`${this.apiUrl}/Auth/register`, user)
    .pipe(
      tap(response => {
        localStorage.setItem('chess-login-token', response.token);
      }),
      tap(response => console.log('Backend response:', response)),
      catchError(err => {
        console.error('Backend error:', err);
        return of(null);
      })
    );
  }
}
