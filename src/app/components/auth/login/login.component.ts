import { Component, inject } from '@angular/core';
import { LoginService } from '../../../services/fake-auth/login/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginService = inject(LoginService);

  login(username: string, password: string) {
    const credentials = { username, password };
    this.loginService.login(credentials).subscribe({
      next: () => {
        // Optionally navigate or show success
        // e.g., this.router.navigate(['/home']);
        alert('Login successful!');
        console.log('Login successful with credentials:', credentials);
      },
      error: (err) => {
        // Show error message
        alert('Login failed: ' + (err.error?.message || 'Unknown error'));
      }
    });
  }
}
