import React from 'react';
import {Component} from 'react';
import Calc from './container/Calc';
export default class App extends Component{
  constructor(){
    super();
    
  }
  render(){
    return(
      <div>
        <Calc/>
      </div>
    )
  }
}