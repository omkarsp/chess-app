import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HamburgerMenuService {

  isMenuOpen = signal(false);

  toggleMenu(){
    this.isMenuOpen.set(!this.isMenuOpen());
    console.log(this.isMenuOpen());
  }
}
