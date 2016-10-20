import React, { Component } from 'react';
import { render } from 'react-dom';
import { Flipper, Front, Back } from '../components/';

require ('./index.less');

class App extends Component {
  constructor (props) {
    super (props);
    this._flip = this._flip.bind (this);
    this.state = { isFlipped: false };
  }
  _flip () {
    this.setState ({ isFlipped: !this.state.isFlipped });
  }
  _fork () {
    window.location = "https://github.com/VisionistInc/react-flipper";
  }
  render () {
    return <div className="content">
        <div className="title">
          React-Flipper
        </div>
        <div className="description">
          React 'flipper' component that just gets it
        </div>
        <div className="example">
          <div className="flipper-containers">
            <Flipper isFlipped={this.state.isFlipped} orientation="horizontal">
              <Front> I flip horizontally . . . </Front>
              <Back></Back>
            </Flipper>
            <Flipper isFlipped={this.state.isFlipped} orientation="vertical">
              <Front> . . . and I flip vertically </Front>
              <Back></Back>
            </Flipper>
          </div>
          <div className="flipper-toggle">
            <button onClick={this._flip}>Click me to flip!</button>
          </div>
        </div>
        <div className="links">
          <i className="fa fa-github" onClick={this._fork}></i>
        </div>
        <div className="footer">
          <i className="fa fa-code"></i> with <i className="fa fa-heart"></i> by
          <a href="http://www.visionistinc.com">Visionist, Inc.</a>
        </div>
      </div>
  }
}

render (
  <App />,
  document.getElementById ('app-content')
);
