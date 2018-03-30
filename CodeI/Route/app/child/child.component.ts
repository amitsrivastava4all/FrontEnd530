import { MyService } from './../../myservice/MyService';
import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {Input} from '@angular/core';
import {Item} from '../../models/Item';
@Component({
  selector:'app-child-comp',

  templateUrl:'child.component.html',
 // encapsulation:ViewEncapsulation,
  styleUrls:['child.component.css']//,
 // providers:[MyService]
})
export class ChildComponent{
  @Input()
  sendtochild:string;
  title:string;
  itemArray:Item[];

  constructor(private myService:MyService){
    this.title='I am a Child... ';

    this.myService.callServer().then(item=>{
      console.log("Getting the Data in Promise ",item);
       this.itemArray=item;
       console.log("This is Item Array ",this.itemArray);
  })

  }
  @Output()
  callparent:EventEmitter<string> = new EventEmitter<string>();


callParent(event){
  this.callparent.emit('Hi I am Child....');
  this.title = this.myService.getData();
}
}
