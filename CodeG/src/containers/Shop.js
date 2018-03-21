import React from 'react';
import {Search} from '../components/Search';
import {crudOperations} from '../models/Crud';
import {List} from '../components/List';
export class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state = {search:''};
        this.searchInput = '';
        this.bindEvents();
        this.itemList = crudOperations.load();
    }
    render(){
        return(<div>
            <h2>{this.props.title}</h2>
            <Search takeSearchInput={this.takeSearchInput}/>
            {this.state.search}
            <br/>
            <List items = {this.itemList}/>
            </div>);
    }
    bindEvents(){
       this.takeSearchInput =  this.takeSearchInput.bind(this);
    }
    takeSearchInput(event){
        console.log("Value is ",event.target.value);
        this.searchInput = event.target.value;
        this.setState({search:this.searchInput});
    }
}