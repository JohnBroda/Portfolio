import { Component, inject } from '@angular/core';
import { LanguageService } from '../language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  language = inject(LanguageService);

  images0to3 = [
    { name: 'Angular', number: 0},  
    { name: 'TypeScript', number: 1},
    { name: 'JavaScript', number: 2},
    { name: 'HTML', number: 3},
  ];

  images4to7 = [
    { name: 'Firebase', number: 4},
    { name: 'Git', number: 5},
    { name: 'CSS', number: 6},
    { name: 'REST API', number: 7}
  ]

  images8to9 = [
    { name: 'Scrum', number: 8},
    { name: 'Material Design', number: 9},
  ]
}
