/* @flow */
/* eslint-disable react/no-find-dom-node */
/* eslint-disable react/no-string-refs */

import React, { Component } from 'react';

require ('./index.less');

type Props = {
  isFlipped: boolean,
  orientation: string,
  children?: any
}

export default class Flipper extends Component {
  static defaultProps = {
    isFlipped: false,
    orientation: 'horizontal'
  }
  constructor (props: Props): void {
    super (props);
    this.state = { height: 30 };
  }
  state: {
    height: number
  }
  setHeight = (_height: number): void => {
    this.setState ({ height: _height });
  }
  getStyles = (): $Shape<{ height: number }> => {
    return { height: this.state.height };
  }
  getChildren = (): Array<React$Element<any>> => {
    return React.Children.map (this.props.children, (child) => {
      return React.cloneElement (child, {
        isFront: !this.props.isFlipped,
        resize: this.setHeight
      });
    });
  }
  render (): ?React$Element<any> {
    return <div
      style={this.getStyles ()}
      className={`flipper-container ${this.props.orientation}`}
      ref="flipperContainer"
    >
      <div
        className={`flipper${this.props.isFlipped ? ' flipped' : ''}`}
        ref="flipper"
      >
        {this.getChildren ()}
      </div>
    </div>;
  }
}
