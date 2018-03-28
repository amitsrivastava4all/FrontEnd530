import { Child2Component } from './child2.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations : [Child2Component],
  exports:[Child2Component]
})
export class Child2Module{

}
