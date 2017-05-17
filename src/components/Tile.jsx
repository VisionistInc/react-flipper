/* @flow */

import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

export default class Tile extends PureComponent<any, any, any> {
  componentDidMount (): void {
    this.resize ();
    ReactDOM.findDOMNode (this).addEventListener (
      "DOMSubtreeModified",
      this.resize
    );
  }
  shouldComponentUpdate (nextProps: Props): boolean {
    return this.props.isActive !== nextProps.isActive;
  }
  componentDidUpdate (): void {
    this.resize ();
  }
  componentWillUnmount (): void {
    ReactDOM.findDOMNode (this).removeEventListener (
      "DOMSubtreeModified",
      this.resize
    );
  }
  getHeight = (): number => {
    return ReactDOM.findDOMNode (this).offsetHeight;
  };
  resize = (): void => {
    const { isActive, resize, position } = this.props;
    if (
      (position === "front" && isActive) ||
      (position === "back" && !isActive)
    ) {
      resize (this.getHeight ());
    }
  };
}
