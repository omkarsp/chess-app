import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  if( !localStorage.getItem('token') ) {
    // User is not authenticated, redirect to login or show an error
    console.error('Access denied - User not authenticated');
    return false; // Prevent navigation
  }

  return true;
};
