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
  firstname:string;
   empNames:string[];
  constructor() {
    this.empNames= ["ram","shyam","mike","tim"];
    this.counter = 0;
    this.name = '';
    this.flag = false;
    this.myclass = 'red';
    this.title = 'My First Application....';
  }
  getEmpName():string{
  return "ram";
  }
  increment(event: Event): void {
    this.counter++;
  }
  takeInput(event) {
    this.name = event.target.value;
  }
}
