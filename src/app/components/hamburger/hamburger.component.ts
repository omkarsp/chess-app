import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/auth/login/login.service';

@Component({
  selector: 'app-hamburger',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hamburger.component.html',
  styleUrl: './hamburger.component.scss'
})
export class HamburgerComponent {
  loginService = inject(LoginService);
}
