import React from 'react';
export const SalaryOutput= (props)=>{
    var hra = 0;
    hra = props.salary *0.30;
    var da = props.salary *0.20;
   var  ta = props.salary * 0.10;
    return (
        <div>
            Basic Salary is {props.salary}
            <br/>
            HRA {hra}
            <br/>
            DA {da}
            <br/>
            TA {ta}
            <br/>
            G.S {parseInt(props.salary) + hra + da + ta}
        </div>    
    )
}