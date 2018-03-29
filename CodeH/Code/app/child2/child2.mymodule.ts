import { Child2Component } from './child2.component';
import { NgModule } from "@angular/core";
import {UrlPipe} from './child2.pipe';

@NgModule({
  declarations : [Child2Component,UrlPipe],
  exports:[Child2Component,UrlPipe]
})
export class Child2Module{

}
