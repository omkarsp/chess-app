import { Component, inject, OnInit, signal } from '@angular/core';
import { ProfileService } from '../../services/fake-profile/profile.service';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/auth/login/login.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  loginService = inject(LoginService);
  profileService = inject(ProfileService);

  ngOnInit(): void {
    this.profileService.fetchProfile();
  }

}
