/* @flow */

import React, { Component } from "react";
import { Flipper, Front, Back } from "../components/";

require ("./Website.less");

export default class Website extends Component {
  state = {
    isFlipped: false
  };
  flip = () => {
    this.setState ({ isFlipped: !this.state.isFlipped });
  };
  fork = () => {
    window.location = "https://github.com/VisionistInc/react-flipper";
  };
  render () {
    return (
      <div className="content">
        <div className="title">
          React-Flipper
        </div>
        <div className="description">
          React flipper component that just gets it
        </div>
        <div className="example">
          <div className="flipper-containers">
            <Flipper isFlipped={this.state.isFlipped} orientation="horizontal">
              <Front style={{ minHeight: 250, background: "#19489E" }}>
                I flip horizontally . . .
              </Front>
              <Back style={{ background: "#9E1919", minHeight: 400 }} />
            </Flipper>
            <Flipper isFlipped={this.state.isFlipped} orientation="vertical">
              <Front style={{ minHeight: 250, background: "#19489E" }}>
                . . . and I flip vertically
              </Front>
              <Back style={{ background: "#9E1919", minHeight: 325 }} />
            </Flipper>
          </div>
          <div className="flipper-toggle">
            <button onClick={this.flip}>Click me to flip!</button>
          </div>
        </div>
        <div className="links">
          {/* eslint-disable jsx-a11y/no-static-element-interactions */}
          <i className="fa fa-github" onClick={this.fork} />
          {/* eslint-enable jsx-a11y/no-static-element-interactions */}
        </div>
        <div className="footer">
          <i className="fa fa-code" /> with <i className="fa fa-heart" /> by
          <a href="http://www.visionistinc.com">Visionist, Inc.</a>
        </div>
      </div>
    );
  }
}
