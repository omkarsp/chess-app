import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const localData = localStorage.getItem('chess-login-token');
  const router = inject(Router);

  if(localData != null) {
    return true;
  }else{
    // User is not authenticated, redirect to login or show an error
    console.log('Access denied - User not authenticated');
    router.navigate(['/login']);
    return false; // Prevent navigation
  }
};

// export class AuthGuardService implements CanActivate {

//   constructor(private loginservice: LoginService, private router: Router) { }
//   private localData = localStorage.getItem('chess-login-token');

//   canActivate() : boolean{
//     if(this.loginservice.isAuthenticatedSignal()){
//       return true;
//     }else{
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }