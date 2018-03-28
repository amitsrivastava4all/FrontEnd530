import { Component ,Input} from '@angular/core';
@Component({
  selector:'app-child2-comp',
  templateUrl:'child2.component.html'
})
export class Child2Component{
  title:string;
  @Input()
  mydata:string;
  constructor(){
    this.title = " I am Child 2";
  }
}
