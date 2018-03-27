import { MyService } from './../myservice/MyService';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,ChildComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
