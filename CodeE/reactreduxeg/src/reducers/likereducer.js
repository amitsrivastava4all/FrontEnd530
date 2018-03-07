const LikeObject = {
    like:0
};
export const LikeReducer =(state=LikeObject,action)=>{
    var currentLike =0;
    if(action.type=='L'){
        currentLike = state.like + action.payload.value;
    }
    else
    if(action.type=='U'){
        currentLike = state.like - action.payload.value;
    }
    return {like:currentLike};
}