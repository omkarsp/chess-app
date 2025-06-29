import { Routes } from '@angular/router';
// import { AuthGuardService } from './services/fake-auth/auth-guard/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { PlayMenuComponent } from './components/play-menu/play-menu.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     pathMatch: 'full',
    //     loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    // },
    // {
    //     path: "login",
    //     loadComponent: () => import('./components/auth/login/login.component').then(m => m.LoginComponent)
        
    // },
    // {
    //     path: 'register',
    //     loadComponent: () => import('./components/auth/register/register.component').then(m => m.RegisterComponent)
    // },
    // {
    //     path: 'profile',
    //     loadComponent: () => import('./components/profile/profile.component').then(m => m.ProfileComponent),
    //     canActivate: [AuthGuardService]
    // },
    // {
    //     path: 'forgot-password',
    //     loadComponent: () =>  import('./components/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
    // },
    {
        path:'',
        component:HomeComponent,
        children:[
            {path: '', component: PlayMenuComponent},
            {path: 'play-menu', component: PlayMenuComponent},
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent},
            {path: 'profile', component: ProfileComponent},
            {path: 'forgot-password', component: ForgotPasswordComponent}
        ]
    }
];
