import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component'; 
import { AboutMeComponent } from './about-me/about-me.component'; 
import { ContactComponent } from './contact/contact.component'; 
import { FooterComponent } from './footer/footer.component'; 
import { StartComponent } from './start/start.component';
import { SkillsComponent } from './skills/skills.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SkillsComponent ,CommonModule, RouterOutlet, HeaderComponent, PortfolioComponent, AboutMeComponent, ContactComponent, FooterComponent, StartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
