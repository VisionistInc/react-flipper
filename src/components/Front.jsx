/* @flow */

import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

type Props = {
  isFront: boolean,
  resize: Function,
  className?: string,
  children?: any
};

export default class Front extends PureComponent {
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
    return ReactDOM.findDOMNode (this.refs.frontTile).offsetHeight;
  };
  getClassName = (): string => {
    return this.props.className
      ? `front tile ${this.props.className}`
      : "front tile";
  };
  resize = (): void => {
    if (this.props.isFront) this.props.resize (this.getHeight ());
  };
  render (): ?React$Element<any> {
    const { className, isFront, resize, ...props } = this.props;
    return (
      <div className={this.getClassName ()} ref="frontTile" {...props}>
        {this.props.children}
      </div>
    );
  }
}
