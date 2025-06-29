import { Component, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProfileService } from '../../services/fake-profile/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  constructor(public profileService: ProfileService){}

  ngOnInit(): void {
    this.profileService.fetchProfile();
  }

}
