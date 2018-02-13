import React,{Component} from 'react';
import {Salary} from './containers/Salary';
export class App extends Component{
  constructor(props){
    super(props);
    this.state = {};
    this.a = 100;
  }
  render(){
    return (<div>
      <Salary title="Salary Calc"/>
    </div>);
  }
}
