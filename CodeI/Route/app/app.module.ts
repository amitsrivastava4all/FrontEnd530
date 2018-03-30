import { Child3Component } from './child3/child3.component';
import { AuthService } from './../myservice/AuthService';

import { Child2Component } from './child2/child2.component';
import { Child2Module } from './child2/child2.mymodule';
import { MyService } from './../myservice/MyService';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {routes} from './routes';


@NgModule({
  declarations: [
    AppComponent,ChildComponent,Child3Component
  ],
  imports: [
    BrowserModule,FormsModule,Child2Module,HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [MyService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
