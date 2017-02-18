/* @flow */

import React, { Component } from 'react';
import { Flipper, Front, Back } from '../components/';

type State = {
  isFlipped: boolean
}

export default class Example extends Component {
  state: State = {
    isFlipped: false
  };
  flip = (): void => {
    this.setState ({ isFlipped: !this.state.isFlipped });
  }
  render (): ?React$Element<any> {
    return <div>
      <Flipper isFlipped={this.state.isFlipped} orientation="horizontal">
        <Front />
        <Back />
      </Flipper>
      <Flipper isFlipped={this.state.isFlipped} orientation="vertical">
        <Front />
        <Back />
      </Flipper>
      <div className="button-container">
        <button onClick={this.flip}>Flip!</button>
      </div>
    </div>;
  }
}
