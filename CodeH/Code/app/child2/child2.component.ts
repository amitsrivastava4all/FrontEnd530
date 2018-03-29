import { Component ,Input} from '@angular/core';
@Component({
  selector:'app-child2-comp',
  templateUrl:'child2.component.html'
})
export class Child2Component{
  title:string;
  mypath:string;
  @Input()
  mydata:string;
  constructor(){
    //this.mypath = 'https://n4.sdlcdn.com/imgs/f/n/r/Gionee-A1-64GB-Black-SDL352791824-1-ff379.jpeg';
    this.title = " I am Child 2";
  }
}
