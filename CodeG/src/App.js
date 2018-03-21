import React,{Component} from 'react';
import {Shop} from './containers/Shop';
export class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <Shop title="Online Shop"/>
      </div>  
    );
  }
}