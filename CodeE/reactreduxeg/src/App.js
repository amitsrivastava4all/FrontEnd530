import React, { Component } from 'react';
import Like from './components/Like';
import LikeResult from './components/LikeResult';

class App extends Component {
  render() {
    return (
    <div>
      <h2>React Redux Example</h2>
      <Like/>
      <LikeResult/>
     </div> 
    );
  }
}

export default App;
