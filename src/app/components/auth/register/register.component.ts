import { Component, inject, signal } from '@angular/core';
import { RegisterService } from '../../../services/auth/register/register.service';
import { User } from '../../../models/user.type';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  registerService = inject(RegisterService);
  router = inject(Router);

  user: User = { username: '', email: '', password: '' };
  
  // Error handling signals
  errorMessages = signal<string[]>([]);
  isLoading = signal(false);
  
  // Password requirements
  passwordRequirements = [
    'At least 6 characters long',
    'At least one uppercase letter (A-Z)',
    'At least one lowercase letter (a-z)',
    'At least one digit (0-9)',
    'At least one non-alphanumeric character (!, @, #, $, etc.)'
  ];

  register() {
    this.isLoading.set(true);
    this.errorMessages.set([]);
    
    this.registerService.register(this.user).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        if (response && response.token) {
          alert('Registration successful!');
          this.router.navigate(['/login']);
        } else {
          this.errorMessages.set(['Registration failed: User may already exist or invalid data.']);
        }
      },
      error: (err) => {
        this.isLoading.set(false);
        console.error('Registration error:', err);
        
        // Handle specific backend validation errors
        if (err.error && Array.isArray(err.error)) {
          const backendErrors = err.error.map((error: any) => error.description || error.message);
          this.errorMessages.set(backendErrors);
        } else if (err.error && err.error.message) {
          this.errorMessages.set([err.error.message]);
        } else if (err.message) {
          this.errorMessages.set([err.message]);
        } else {
          this.errorMessages.set(['Registration failed: Unknown error occurred.']);
        }
      }
    });
  }

  // Helper method to check if password meets requirements
  checkPasswordRequirements(password: string): boolean {
    const hasLength = password.length >= 6;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasNonAlphanumeric = /[^a-zA-Z0-9]/.test(password);
    
    return hasLength && hasUpper && hasLower && hasDigit && hasNonAlphanumeric;
  }

  // Get password requirement status for UI feedback
  getPasswordRequirementStatus(password: string) {
    return {
      hasLength: password.length >= 6,
      hasUpper: /[A-Z]/.test(password),
      hasLower: /[a-z]/.test(password),
      hasDigit: /[0-9]/.test(password),
      hasNonAlphanumeric: /[^a-zA-Z0-9]/.test(password)
    };
  }
}
