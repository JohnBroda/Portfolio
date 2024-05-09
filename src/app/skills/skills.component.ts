import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  images = [
    { name: 'Angular', number: 0},  
    { name: 'TypeScript', number: 1},
    { name: 'JavaScript', number: 2},
    { name: 'HTML', number: 3},
    { name: 'Firebase', number: 4},
    { name: 'Git', number: 5},
    { name: 'CSS', number: 6},
    { name: 'REST API', number: 7},
    { name: 'Scrum', number: 8},
    { name: 'Material Design', number: 9},
  ];
}
