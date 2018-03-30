import { AuthService } from './../myservice/AuthService';
import { Child2Component } from './child2/child2.component';
import { ChildComponent } from './child/child.component';
import {Child3Component} from './child3/child3.component';
import {Route} from '@angular/router';
export const routes:Route[]=[
  {
  path:'shoes',component:ChildComponent,canActivate:[AuthService],
  children:[{path:'sports',component:Child3Component}]

},
  {
  path:'mobiles/:price',component:Child2Component
  }
];

