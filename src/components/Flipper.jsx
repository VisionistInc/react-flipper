import React, { Component } from 'react';

require ('./index.less');

export default class Flipper extends Component {
  static defaultProps = {
    isFlipped: false,
    orientation: 'horizontal'
  }
  constructor (props) {
    super (props);
    this.state = { height: 30 };
  }
  _setHeight = (_height) => {
    this.setState ({ height: _height });
  }
  _getStyles = () => {
    return { height: this.state.height }
  }
  _getChildren = () => {
    return React.Children.map (this.props.children, child => {
      return React.cloneElement (child, {
        isFront: !this.props.isFlipped,
        resize: this._setHeight
      });
    });
  }
  render () {
      return <div
        style={this._getStyles ()}
        className={"flipper-container " + this.props.orientation} ref="flipperContainer">
      <div
        className={"flipper" + (this.props.isFlipped ? " flipped" : "")} ref="flipper">
        {this._getChildren ()}
      </div>
    </div>;
  }
}
