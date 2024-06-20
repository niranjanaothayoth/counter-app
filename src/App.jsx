import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrease = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  reset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <h2>{this.state.counter}</h2>
        <div>
          <button onClick={this.increase}>Increase</button>
          <button onClick={this.decrease}>Decrease</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
