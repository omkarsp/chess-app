import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAuthenticated: boolean = true;

  private http = inject(HttpClient);

  login(credentials: {email:string, password:string}) : Observable<any>{
    // this.isAuthenticated = true;
    return this.http.post('https://localhost:5011/login',credentials)
  }

  logout(): void{
    this.isAuthenticated = false;
  }

  isLoggedIn() : boolean{
    return this.isAuthenticated;
  }
}
