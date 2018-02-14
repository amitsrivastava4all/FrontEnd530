import React from "react";
import {Search} from '../components/Search';
import {List} from '../components/List';
import {itemOperations} from '../models/itemoperations';
export class Shop extends React.Component{
    constructor(props){
        super(props);
        this.itemList = itemOperations.loadItems();
    }
    render(){
        return (<div>
            <Search/>
            <List items={this.itemList}/>
            </div>)
    }
}