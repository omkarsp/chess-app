import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../../services/auth/login/login.service';

export const authRedirectGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const loginService = inject(LoginService);

  if (loginService.isAuthenticatedSignal()) {
    router.navigate(['/play-menu']);
    return false; // Prevent navigation to the route if user is authenticated
  }

  return true;
};
