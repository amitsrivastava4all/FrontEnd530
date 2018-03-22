import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title: string;
  flag: boolean;
  myclass: string;
  name: string;
  counter: number;
  constructor() {
    this.counter = 0;
    this.name = '';
    this.flag = false;
    this.myclass = 'red';
    this.title = 'My First Application....';
  }
  increment(event: Event): void {
    this.counter++;
  }
  takeInput(event) {
    this.name = event.target.value;
  }
}
