import React from 'react';
import {Component} from 'react';
import {Button} from 'react-bootstrap';
import store from '../store/calcstrore';
export default class CalcInput extends Component{
    
    doOperation(operationName){
        let firstNumber = this.refs.firstno.value;
        let secondNumber = this.refs.secondno.value;
        // Dispatch Action
        operationName = operationName=="add"?"+":"-";
        store.dispatch({type:operationName, payload:{firstval:firstNumber,secondval:secondNumber}});
    }

    render(){
        return(
            <div>
                <div className="form-group">
                <label htmlFor="">First Number</label>
                <input type="text" className="form-control" placeholder="Type First Number Here" ref="firstno"/>

                </div>
                <div className="form-group">
                <label htmlFor="">Second Number</label>
                <input type="text" className="form-control" placeholder="Type Second Number Here" ref="secondno"/>

                </div>
                <div className="form-group">
                <Button onClick={this.doOperation.bind(this,'add')} className="btn btn-primary">Add</Button> &nbsp;
                <Button onClick={this.doOperation.bind(this,'subtract')} className="btn btn-danger">Subtract</Button>&nbsp;
                <Button className="btn btn-success">Multiply</Button>&nbsp;
                <Button className="btn btn-info">Divide</Button>

                <Button onClick={this.props.add}>Add Direct </Button>
                </div>
             </div>
        );
    }
}