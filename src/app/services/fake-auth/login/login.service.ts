import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAuthenticated: boolean = true;

  constructor() { }

  login() : void{
    this.isAuthenticated = true;
  }

  logout(): void{
    this.isAuthenticated = false;
  }

  isLoggedIn() : boolean{
    return this.isAuthenticated;
  }
}
