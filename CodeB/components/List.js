import React from 'react';
import {Item} from './Item';

export const List =(props)=>{
    return (
        <div>
          {props.items.map(itemObject=><Item item={itemObject}/>)} 
        </div>    
    )
}

