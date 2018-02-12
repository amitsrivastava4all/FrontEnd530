import React,{Component} from 'react';
import {Print} from './Print';
export class App extends Component{
  constructor(props){
    super(props);
    this.counter = 0;
    this.state= {count:this.counter};
  }
  add(){
    this.counter++;
    this.setState({count:this.counter});
    console.log("Count is ",this.counter);
  }
  render(){
    return (<div>
      <h1>{this.props.msg} </h1>
      <button onClick={this.add.bind(this)}>Count</button>
     <Print name={this.props.msg} counter={this.state.count}/>
      </div>);
  }
}