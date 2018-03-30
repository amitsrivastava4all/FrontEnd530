import { Component } from '@angular/core';

@Component({
  selector:'app-child3-comp',
  template:`
  <h2>I am Child3 Comp</h2>
  {{title}}
  `

})
export class Child3Component{
  title :string;
}
