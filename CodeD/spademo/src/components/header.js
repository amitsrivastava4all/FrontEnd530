import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
export const Header = (props)=>{
    return (<div>
        <ul>
            <li><NavLink to="/">Home</NavLink>
            </li>
            <li><NavLink to="/aboutus/Amit">Aboutus</NavLink>
            </li>
            <li></li>
        </ul>
        <h1>This is Header <button className="btn btn-primary">Login</button></h1>
        </div>);
}