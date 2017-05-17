/* @flow */

import React, { PureComponent } from "react";
import cx from "classnames";

require ("./styles.less");

type Props = {
  isFlipped: boolean,
  orientation: string,
  children?: any
};

export default class Flipper extends PureComponent {
  static defaultProps = {
    isFlipped: false,
    orientation: "horizontal"
  };
  constructor (props: Props): void {
    super (props);
    this.state = { height: 30 };
  }
  state: {
    height: number
  };
  setHeight = (_height: number): void => {
    this.setState ({ height: _height });
  };
  render (): ?React$Element<any> {
    return (
      <div
        style={{ height: this.state.height }}
        className={cx ("flipper-container", this.props.orientation)}
      >
        <div
          className={cx ("flipper", {
            flipped: this.props.isFlipped === true
          })}
        >
          {React.Children.map (this.props.children, child => {
            return React.cloneElement (child, {
              isActive: !this.props.isFlipped,
              resize: this.setHeight
            });
          })}
        </div>
      </div>
    );
  }
}
