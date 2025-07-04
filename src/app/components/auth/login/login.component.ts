import { Component, inject } from '@angular/core';
import { LoginService } from '../../../services/fake-auth/login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginService = inject(LoginService);

  login(email: string, password: string){
    const credentials :  {email:string, password:string} = {email, password};
    this.loginService.login(credentials)
  }

}
