import React from 'react';
import './Search.css';
export const Search=(props)=>{
    return(
        <div>
            <label>Search</label>
            <input onChange={props.takeSearchInput} type="text" placeholder="Type To Search"/>
            <button className="mystyle">Search</button>
        </div>    
    )
}