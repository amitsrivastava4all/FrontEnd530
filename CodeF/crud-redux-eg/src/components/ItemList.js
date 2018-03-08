import React from 'react';
import {connect} from 'react-redux';
import {Item} from './Item';

const ItemList=(props)=>{
    console.log("hello",props);
    return(
        <div>
    {props.items.map((item)=><Item item={item}/>
    )}
    </div>
    )

}
    
 const mapStateToProps=(state)=>{
  return{
      items:state.itemArray
  }
   
}



export default connect(mapStateToProps)(ItemList);