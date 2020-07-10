import { Component } from '@angular/core';

const generateNumbers = (length: number, offset = 0): number[] =>
  Array.from({ length }, (_, idx) => idx + offset);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: number[];

  constructor() {
    this.items = generateNumbers(20);
  }

  onScroll(): void {
    this.items.push(...generateNumbers(10, this.items.length));
  }

  identify(index: number, item: number): number {
    return item;
  }
}
