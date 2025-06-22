import { Component } from '@angular/core';
import { PlayMenuComponent } from "../components/play-menu/play-menu.component";
import { HeaderComponent } from "../components/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlayMenuComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
