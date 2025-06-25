import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: "login",
        loadComponent: () =>{
            return import('./components/auth/login/login.component').then(m => m.LoginComponent);
        }
    }
];
