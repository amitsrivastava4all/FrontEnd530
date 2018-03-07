import React from 'react';
import {connect} from 'react-redux';
const LikeResult=(props)=>{
    return(
        <h3>Like is {props.likeCount}</h3>
    )
}
const mapStateToProps = state=>{
    return {
        likeCount:state.like
    }
}
export default connect(mapStateToProps)(LikeResult);
//export default LikeResult;

