import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  portfolioItems = [
    {
      direction: 'TL',
      title: 'Join',
      subtitle: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      imageUrl: './../../assets/img/portfolio/join.png',
      serverLink: '',
      gitLink:'https://github.com/Simon-Kral/join',

    },
    {
      direction: 'TR',
      title: 'El Pollo Loco',
      subtitle: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      imageUrl: './../../assets/img/portfolio/elpolloloco.png',
      serverLink: '',
      gitLink:'https://github.com/Simon-Kral/join',
    },
  ];
}
