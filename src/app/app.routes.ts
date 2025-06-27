import { Routes } from '@angular/router';
import { AuthGuardService } from './services/fake-auth/auth-guard/auth-guard.service';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: "login",
        loadComponent: () => import('./components/auth/login/login.component').then(m => m.LoginComponent)
        
    },
    {
        path: 'register',
        loadComponent: () => import('./components/auth/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'profile',
        loadComponent: () => import('./components/profile/profile.component').then(m => m.ProfileComponent),
        canActivate: [AuthGuardService]
    },
    {
        path: 'forgot-password',
        loadComponent: () =>  import('./components/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
    }
];
