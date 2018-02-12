import React from 'react';
import './App.css';
import {Header}  from '../components/header';
import {Section}  from '../components/section';
import {Footer}  from '../components/footer';

export  const App = ()=>{
return (<div><Header/><Section/><Footer/><h1 className="red">Hi React JS </h1><h1 className="green">Hello ReactJS Component</h1></div>);
}

//export const PI = 3.14;

