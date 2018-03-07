const initialState= {
    firstNumber:0,
    secondNumber:0,
    result:0
}
const calcReducer = (state=initialState, action)=>{
    if(action.type=="+")
    {	
        let sum = parseInt(action.payload.firstval)  + parseInt(action.payload.secondval);
        return {
            firstNumber:action.payload.firstval,
            secondNumber:action.payload.secondval,
            result:sum
        }
        // Always Do in Immutable Way , do not modify the state directly same as React Funda
    }
    else
    if(action.type=="-")
    {	
        return {
            firstNumber:action.payload.firstval,
            secondNumber:action.payload.secondval,
            result:action.payload.firstval - action.payload.secondval
        }
        // Always Do in Immutable Way , do not modify the state directly same as React Funda
    }
    return state;
}
export default calcReducer;