import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component'; 
import { AboutMeComponent } from './about-me/about-me.component'; 
import { ContactComponent } from './contact/contact.component'; 
import { FooterComponent } from './footer/footer.component'; 
import { StartComponent } from './start/start.component';
import { SkillsComponent } from './skills/skills.component';
import { MainContentComponent } from './main-content/main-content.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainContentComponent, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
