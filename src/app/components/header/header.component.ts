import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HamburgerMenuService } from '../../services/hamburger-menu/hamburger-menu.service';
import { LoginService } from '../../services/auth/login/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  //dark mode toggle
  toggleDarkMode(){
    document.documentElement.classList.toggle('dark');
  }

  //responsiveness
  isMobile = signal<boolean | null>(window.innerWidth < 800);

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.isMobile.set(window.innerWidth < 800);
    })
  }

  hamburgerMenuService = inject(HamburgerMenuService);

  toggleHamburgerMenu() {
    this.hamburgerMenuService.toggleMenu();
  }

  //show/hide login and register
  loginService = inject(LoginService);
  
}
