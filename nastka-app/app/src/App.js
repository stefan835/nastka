import React, {Component} from 'react';
import './App.css';

import MathClassesView from "./components/views/MathClassesView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MathClassesView/>
      </div>
    );
  }
}

export default App;
