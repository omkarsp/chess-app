import { Component, inject, signal } from '@angular/core';
import { RegisterService } from '../../../services/auth/register/register.service';
import { User } from '../../../models/user.type';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  router = inject(Router);

  register() {
    this.registerService.register(this.user).subscribe({
      next: (response) => {
        if (response && response.token) {
          alert('Registration successful!');
          this.router.navigate(['/login']);
        } else {
          alert('Registration failed: User may already exist or invalid data.');
        }
      },
      error: (err) => {
        alert('Registration failed: ' + (err.error?.message || 'Unknown error'));
      }
    });
  }

}
