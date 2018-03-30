import { ActivatedRoute } from '@angular/router';
import { Component ,Input, OnInit} from '@angular/core';

@Component({
  selector:'app-child2-comp',
  templateUrl:'child2.component.html'
})
export class Child2Component implements OnInit {
  title:string;
  mypath:string;
  @Input()
  mydata:string;
  constructor(private activatedRoute:ActivatedRoute){

    //this.mypath = 'https://n4.sdlcdn.com/imgs/f/n/r/Gionee-A1-64GB-Black-SDL352791824-1-ff379.jpeg';
    this.title = " I am Child 2";
  }
  ngOnInit(){
    this.activatedRoute.params.subscribe(param=>{
      this.title = 'Param Rec For Price is '+param.price;
    });
  }

}
