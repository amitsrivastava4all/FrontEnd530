import { Child2Module } from './child2/child2.mymodule';
import { MyService } from './../myservice/MyService';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,ChildComponent
  ],
  imports: [
    BrowserModule,FormsModule,Child2Module,HttpModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
