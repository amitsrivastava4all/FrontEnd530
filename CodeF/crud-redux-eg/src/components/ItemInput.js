import React from 'react';
import {store} from '../store/store';

export class ItemInput extends React.Component{
  
    constructor(props){
        super(props);
      
    }

    doAddDelete(event){
        var eventValue=event.target.innerHTML;
        if(eventValue=="ADD"){
            store.dispatch({
              type:'ADD' ,
              payload:{
                 item:{
                     name:this.refs.name.value,
                     url:this.refs.url.value,
                     price:this.refs.price.value
                 } 
              } 
            })
        } 


       


    }


 render(){
     return(
         <div>
          <input  type='text' placeholder='Enter product name' ref='name'/>
          <input type ='text' placeholder='enter url' ref= 'url'/>
          <input type='text' placeholder='enter price' ref='price'/>
           <button onClick={this.doAddDelete.bind(this)}>ADD</button> 
           <button onClick={this.doAddDelete.bind(this)}>Delete</button>
          </div>   
     )
 }
}