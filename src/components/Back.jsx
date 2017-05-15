/* @flow */
/* eslint-disable react/no-find-dom-node */
/* eslint-disable react/no-string-refs */

import React, { Component } from "react";
import ReactDOM from "react-dom";

type Props = {
  isFront: boolean,
  resize: Function,
  className?: string,
  children?: any
};

export default class Back extends Component {
  constructor (props: Props): void {
    super (props);
  }
  componentDidMount (): void {
    this.resize ();
    ReactDOM.findDOMNode (this).addEventListener (
      "DOMSubtreeModified",
      this.resize
    );
  }
  shouldComponentUpdate (nextProps: Props): boolean {
    return this.props.isFront !== nextProps.isFront;
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
    return ReactDOM.findDOMNode (this.refs.backTile).offsetHeight;
  };
  getClassName = (): string => {
    return this.props.className
      ? `back tile ${this.props.className}`
      : "back tile";
  };
  resize = (): void => {
    if (!this.props.isFront) this.props.resize (this.getHeight ());
  };
  render (): ?React$Element<any> {
    const { className, isFront, resize, ...props } = this.props;
    return (
      <div className={this.getClassName ()} ref="backTile" {...props}>
        {this.props.children}
      </div>
    );
  }
}
