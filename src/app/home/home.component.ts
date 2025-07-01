import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { HamburgerMenuService } from '../services/hamburger-menu/hamburger-menu.service';
import { HamburgerComponent } from '../components/hamburger/hamburger.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterModule, HamburgerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  constructor(public hamburgerMenuService:HamburgerMenuService){}
}
