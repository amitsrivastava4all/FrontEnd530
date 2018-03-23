import { Component } from '@angular/core';
@Component({
  selector:'app-child-comp',
  templateUrl:'child.component.html',
  styleUrls:['child.component.css']
})
export class ChildComponent{
title:string;
constructor(){
  this.title='I am a Child...';
}
}
