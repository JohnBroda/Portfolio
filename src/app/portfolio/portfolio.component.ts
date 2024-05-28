import { Component, inject } from '@angular/core';
import { LanguageService } from '../language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  language = inject(LanguageService);

  portfolioItems = [
    {
      direction: 'TL',
      title: 'Join',
      subtitle: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      imageUrl: './../../assets/img/portfolio/join.png',
      serverLink: 'http://john-broda.ch/Join/',
      gitLink:'https://github.com/Simon-Kral/join',

    },
    {
      direction: 'TR',
      title: 'El Pollo Loco',
      subtitle: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      imageUrl: './../../assets/img/portfolio/elpolloloco.png',
      serverLink: 'http://john-broda.ch/ElPolloLoco/',
      gitLink:'https://github.com/JohnBroda/El-Pollo-Loco',
    },
  ];

  portfolioItemsDE = [
    {
      direction: 'TL',
      title: 'Join',
      subtitle: 'JavaScript | HTML | CSS',
      description: 'Aufgabenmanager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',
      imageUrl: './../../assets/img/portfolio/join.png',
      serverLink: 'http://john-broda.ch/Join/',
      gitLink:'https://github.com/Simon-Kral/join',

    },
    {
      direction: 'TR',
      title: 'El Pollo Loco',
      subtitle: 'JavaScript | HTML | CSS',
      description: 'Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen zu finden und Salsa zu sammeln, um gegen das verrückte Huhn zu kämpfen.',
      imageUrl: './../../assets/img/portfolio/elpolloloco.png',
      serverLink: 'http://john-broda.ch/ElPolloLoco/',
      gitLink:'https://github.com/JohnBroda/El-Pollo-Loco',
    },
  ];
}
