import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.type';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private http = inject(HttpClient);

  register(user: User): Observable<any>{
    return this.http.post('https://localhost:5011/register', user);
  }
}
