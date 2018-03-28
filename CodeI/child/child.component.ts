import { MyService } from './../../myservice/MyService';
import { Component, Output, EventEmitter } from '@angular/core';
import {Input} from '@angular/core';
@Component({
  selector:'app-child-comp',
  templateUrl:'child.component.html',
  styleUrls:['child.component.css']//,
 // providers:[MyService]
})
export class ChildComponent{
  @Input()
  sendtochild:string;
  title:string;

  constructor(private myService:MyService){
    this.title='I am a Child...';
  }
  @Output()
  callparent:EventEmitter<string> = new EventEmitter<string>();


callParent(event){
  this.callparent.emit('Hi I am Child....');
  this.title = this.myService.getData();
}
}
