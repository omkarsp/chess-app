import { Component, inject, signal } from '@angular/core';
import { RegisterService } from '../../../services/fake-auth/register/register.service';
import { User } from '../../../models/user.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  registerService = inject(RegisterService);

  user: User = { username: '', email: '', password: '' };

  private Response: any = {
    token:'',
    expiration: ""
  }

  register() {
    debugger
    this.registerService.register(this.user).subscribe({
      next: (response : Response) => {
        // alert('Registration successful!');
        console.log(response.status);
      },
      error: (err) => {
        alert('Registration failed: ' + (err.error?.message || 'Unknown error'));
      }
    });
  }

}
