import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  
}
