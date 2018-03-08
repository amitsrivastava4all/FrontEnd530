import React from 'react';


 export const Item=(props)=>{
     console.log(props);
     console.log(props.item.name);
    return(
        <div>
           {props.item.name}
           {props.item.price}
           {props.item.url}     
       </div>
    )

}


