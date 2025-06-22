import { Component } from '@angular/core';
import { PlaymenuComponent } from "../components/playmenu/playmenu.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlaymenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
