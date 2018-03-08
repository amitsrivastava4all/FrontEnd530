import React from 'react';
import { ItemInput } from '../components/ItemInput';
import ItemList from '../components/ItemList';
export class Crud extends React.Component{
render(){
    return(
        <div>
            <ItemInput/>
            <ItemList/>
       </div>     
    )
}
} 