import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @Output() sectionChange = new EventEmitter<string>();

  toggleDarkMode(){
    document.documentElement.classList.toggle('dark');
  }

  selectSection(section: string) {
    this.sectionChange.emit(section);
    console.log(section);
  }
}
