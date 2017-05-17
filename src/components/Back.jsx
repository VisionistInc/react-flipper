/* @flow */
/* eslint-disable react/no-find-dom-node */
/* eslint-disable react/no-string-refs */

import React from "react";
import cx from "classnames";
import Tile from "./Tile";

export default class Back extends Tile {
  static defaultProps = {
    position: "back"
  };
  render (): ?React$Element<any> {
    const { className, children, style } = this.props;
    return (
      <div className={cx ("back tile", className)} style={style}>
        {children}
      </div>
    );
  }
}
