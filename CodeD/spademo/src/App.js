import React, { Component } from 'react';
import {Header} from './components/header';
import {Footer} from './components/footer';

import {Route,Switch} from 'react-router-dom';
import { AboutUs } from './components/aboutus';


class App extends Component {
  render() {
    return (
      <div>
        
        <Header/>
        <Switch>
          <Route path="/" exact render={()=>(<h1>This is Home Page</h1>)}/>
          <Route path="/aboutus/:ename" exact component= {AboutUs}/>
        </Switch>
        <Footer/>
       </div> 
    );
  }
}

export default App;
