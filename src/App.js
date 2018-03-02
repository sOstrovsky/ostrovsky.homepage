import React, { Component } from 'react';
import './App.css';

// import carpenter from './svg/carpenter.svg';
// import nail from './svg/nail.svg';
// import trolley from './svg/trolley.svg';
import welder from './svg/welder.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm Sergey Ostrovsky!</h1>
        <img src={welder} alt="" className="welder"/>
        <p>This page is under construction...</p>
      </div>
    );
  }
}

export default App;
