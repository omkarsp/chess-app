import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  toggleLoginEl = false;
  toggleRegisterEl = false;

  toggleLoginView() : void{

  }

  toggleRegisterView() : void{

  }
}
