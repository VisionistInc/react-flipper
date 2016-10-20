import React, { Component } from 'react';

require ('./index.less');

class Flipper extends Component {
  constructor (props) {
    super (props);
    this._setHeight = this._setHeight.bind (this);
    this._getStyles = this._getStyles.bind (this);
    this._getChildren = this._getChildren.bind (this);
    this.state = { height: 250 };
  }
  _setHeight (height) {
    this.setState ({ height: height });
  }
  _getStyles () {
    return { height: this.state.height }
  }
  _getChildren () {
    return React.Children.map (this.props.children, (child) => {
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

Flipper.defaultProps = {
  isFlipped: false,
  orientation: 'horizontal'
};

export default Flipper;
