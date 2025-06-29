import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  @Output() sectionChange = new EventEmitter<string>();

  toggleDarkMode(){
    document.documentElement.classList.toggle('dark');
  }
  
}
