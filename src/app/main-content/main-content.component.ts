import { Component  } from '@angular/core';
import { StartComponent } from '../start/start.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [StartComponent, AboutMeComponent, SkillsComponent, ContactComponent, PortfolioComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  
  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, 
    { threshold: 0.32 });
    const elementsToObserve = document.querySelectorAll('.scroll-animation');
    elementsToObserve.forEach(element => {
      observer.observe(element);
    });
  }
}
