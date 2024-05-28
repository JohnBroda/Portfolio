import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  isMenuOpen = false;
  language = inject(LanguageService);

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.isMenuOpen) return;
    const target = event.target as HTMLElement;
    const burgerMenu = document.getElementById('burgermenu');
    const burgerIcon = document.getElementById('burger');

    if (burgerMenu && burgerIcon && !burgerMenu.contains(target) && !burgerIcon.contains(target)) {
      this.isMenuOpen = false;
    }
  }

  openBurgerMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  changeLanguage(){
    this.language.currentLanguage = !this.language.currentLanguage;
  }
}
