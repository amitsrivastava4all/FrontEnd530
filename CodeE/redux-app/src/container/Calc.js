import React from 'react';
import {Component} from 'react';
import CalcInput from '../components/CalcInput';
import CalcOutput from '../components/CalcOutput';
import {connect} from 'react-redux';
 class Calc extends Component{
    constructor(){
        super();
        this.title = "Calc React Redux Example";
    }
    render(){
        return(
            <div className="container">
             <h1 className="alert-success">{this.title}</h1>
             <CalcInput add={this.props.add}/>
             <CalcOutput result={this.props.result}/>
             </div>
        );
    }
}

// Mapping of Redux State with Component Properties 
function mapStateToProps(state){
    return {
                result : state.result
            }
}
// const mapStateToProps = state=>{	
//     return {
//         result : state.result
//     }
//     };
    
    // Mapping of Action with Props
    const mapDispatchToProps = dispatch=>{
    return {
        add:()=>dispatch({type:'+',payload:{firstval:10,secondval:20}}),
        subtract:()=>dispatch({type:'-',payload:{firstval:10,secondval:20}})
    }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(Calc);