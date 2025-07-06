import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from '../../../services/auth/login/login.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.loginService.init(); // Initialize the login service
  }

  loginService = inject(LoginService);
  router = inject(Router)

  login(username: string, password: string) {
    const credentials = { username, password };
    this.loginService.login(credentials).subscribe({
      next: () => {
        console.log('Login successful with credentials:', credentials);
        localStorage.setItem('token', 'fake-jwt-token'); // Simulate token storage
        this.router.navigate(['/play-menu']);
      },
      error: (err) => {
        alert('Login failed: ' + (err.error?.message || 'Wrong username and/or password.'));
      }
    });
  }
}
