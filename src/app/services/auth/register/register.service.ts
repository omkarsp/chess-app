import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
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
        
        // Enhanced error handling - preserve the original error structure
        // so the component can access the detailed validation errors
        if (err.error && err.error.error) {
          // If the backend returns errors in a nested structure
          return throwError(() => ({
            ...err,
            error: err.error.error
          }));
        }
        
        return throwError(() => err);
      })
    );
  }
}
