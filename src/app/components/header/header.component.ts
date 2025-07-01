import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HamburgerComponent } from '../hamburger/hamburger.component';
import { HamburgerMenuService } from '../../services/hamburger-menu/hamburger-menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Output() sectionChange = new EventEmitter<string>();

  toggleDarkMode(){
    document.documentElement.classList.toggle('dark');
  }

  isMobile = signal<boolean | null>(window.innerWidth < 800);

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.isMobile.set(window.innerWidth < 800);
    })
  }

  constructor(public hamburgerMenuService: HamburgerMenuService){}
}
