import { Component, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  private http = inject(HttpClient);
  readonly profile = signal<any>(null)

  ngOnInit(): void {
    
    this.http.get('https://randomuser.me/api/').subscribe((res : any) => {
      this.profile.set(res.results[0]);
    })

  }

}
