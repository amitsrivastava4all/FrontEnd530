import React from 'react';
export const Item = (props)=>{
    return (
        <div >
            <p>{props.item.id} {props.item.name} {props.item.price}</p>
        </div>    
    );
}