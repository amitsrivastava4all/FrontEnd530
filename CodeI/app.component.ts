import { Component ,ViewChild, ViewChildren, QueryList} from '@angular/core';
import {ChildComponent} from './child/child.component';

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
   msg:string;
   @ViewChildren(ChildComponent)
   childrens:QueryList<ChildComponent> ;
   @ViewChild(ChildComponent)
   object:ChildComponent;
   lastName :string;
   printLastName(lastNameTxtBox){
  this.lastName = lastNameTxtBox.value;
   }
   takeDataForChild(event){
    this.msg = event.target.value;
   }
   parentCall(data):void{
    //this.firstname = ;
    this.firstname = data;
  console.log(" Data is ",data);
  }
   constructor() {
    this.msg = 'Parent Sending data to Child';
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
  this.childrens.forEach((obj)=>obj.title = 'Counter Child '+this.counter);
    //this.object.title = ' Counter CHILD '+this.counter;
    this.counter++;
  }
  takeInput(event) {
    this.name = event.target.value;
  }
}
