import { Component, OnInit } from '@angular/core';
import { PlayMenuComponent } from "../components/play-menu/play-menu.component";
import { HeaderComponent } from "../components/header/header.component";
import { ProfileComponent } from "../components/profile/profile.component";
import { LoginComponent } from "../components/auth/login/login.component";
import { RegisterComponent } from "../components/auth/register/register.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlayMenuComponent, HeaderComponent, ProfileComponent, LoginComponent, RegisterComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  
  activeSection: string = 'app-play-menu';

  setSection(section: string){
    this.activeSection = section;
  }
}
