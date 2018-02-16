import React from "react";
import {Search} from '../components/Search';
import {List} from '../components/List';
import {itemOperations} from '../models/itemoperations';
export class Shop extends React.Component{
    constructor(props){
        super(props);
        this.itemList = itemOperations.loadItems();
    }
    componentWillMount(){
        var url = "";
        fetch(url).then((data)=>{
            itemOperations.itemList = data;
            this.setState({items:itemOperations.itemList});
        });
    }
    render(){
        return (<div>
            <Search/>
            <List items={this.state.items}/>
            </div>)
    }
}