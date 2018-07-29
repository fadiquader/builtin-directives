import { Component } from '@angular/core';

const CHARACTERS: string[] = ['A', 'B', 'C', 'D'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  character: string = 'A';
  color: string;
  fontSize: number;
  isBordered: boolean;
  classesObj: Object;
  classList: string[];
  people: object[];
  constructor() {
    this.people = [
      {
        name: 'Anderson', age: 35,
        city: 'Sao Paulo',
        grade: ['A', 'B', 'C']
      },
      { name: 'John', age: 12, city: 'Miami', grade: ['C', 'A', 'B']  },
      { name: 'Peter', age: 22, city: 'New York', grade: ['B', 'A', 'C']  }
    ];
  }
  ngOnInit() {
    this.isBordered = true;
    this.classList = ['blue', 'round'];
    this.toggleBorder();
  }
  changeCharacter(): void {
    const random: number = Math.random() * 3;
    this.character = CHARACTERS[Math.round(random)];
  }
  applyStyle(color: string, fontSize: number): void {
    this.color = color;
    this.fontSize = fontSize;
  }
  toggleBorder(): void {
    this.isBordered = !this.isBordered;
    this.classesObj = {
    bordered: this.isBordered,
    };
  }
}
