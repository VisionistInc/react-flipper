import React from 'react';
import { Flipper, Front, Back } from '..'

class App extends React.Component {
  constructor (props) {
    super (props);
    this._flip = this._flip.bind (this);
    this.state = { isFlipped: false };
  }
  _flip () {
    this.setState ({ isFlipped: !this.state.isFlipped });
  }
  render () {
    return <div>
      <Flipper isFlipped={this.state.isFlipped} orientation="horizontal">
        <Front></Front>
        <Back></Back>
      </Flipper>
      <Flipper isFlipped={this.state.isFlipped} orientation="vertical">
        <Front></Front>
        <Back></Back>
      </Flipper>
      <div className="button-container">
        <button onClick={this._flip}>Flip!</button>
      </div>
    </div>
  }
}

React.render (
  <App />,
  document.body
);
