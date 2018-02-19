import React from 'react';
export const AboutUs = (props)=>{
return (<h1> This is About Us {props.match.params.ename}</h1>);
}