import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Crud } from './containers/crud';

class App extends Component {
  render() {
    return (
      <div>
        <h1>CRUD EXAMPLE</h1>
        <Crud/>
      
      </div>
    );
  }
}

export default App;
