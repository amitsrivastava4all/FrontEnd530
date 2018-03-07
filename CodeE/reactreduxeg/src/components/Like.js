import React , {Component} from 'react';
import {store} from '../store/likestore';
class Like extends Component{
    constructor(){
        super();

    }
    doOperation(event){
        var currentButton = event.target.innerHTML;
        console.log("Current Button is ",currentButton);
        if(currentButton=='Like'){
            store.dispatch({type:'L',payload:{value:1}});
        }
        else
        if(currentButton=='Dislike'){
            store.dispatch({type:'U',payload:{value:2}});
        }
    }
    render(){
        return(
            <div>
            <button onClick={this.doOperation.bind(this)}>Like</button>
            <button onClick={this.doOperation.bind(this)}>Dislike</button>
            </div>
        );
}
}
export default Like;