import React from 'react'
export const Item=(props)=>{
    var jsx ;
    if(props.item.price>40000){
        jsx =<p>Discount is 20%</p>;
    }
    else{
        jsx= <p>Discount is 10% </p>;
    }
    return(<div>     
        {props.item.id} &nbsp;
        {props.item.name}&nbsp;
        {props.item.price}
        {jsx}

    </div>);
}