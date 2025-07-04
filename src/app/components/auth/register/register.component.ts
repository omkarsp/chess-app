import { Component, inject, signal } from '@angular/core';
import { RegisterService } from '../../../services/fake-auth/register/register.service';
import { User } from '../../../models/user.type';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  registerService = inject(RegisterService);

  user = signal<User>({username: "", email: "", password: ""});

  register(username: string, email: string, password: string) : void{
    const user: User = {username, email, password};
    this.registerService.register(user);
  }

}
