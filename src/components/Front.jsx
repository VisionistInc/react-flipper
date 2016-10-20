import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

class Front extends Component {
  constructor (props) {
    super (props);
    this._resize = this._resize.bind (this);
    this._getHeight = this._getHeight.bind (this);
  }
  componentDidMount () {
    findDOMNode (this).addEventListener ('DOMSubtreeModified', () => {
      if (this.props.isFront) this._resize ();
    });
  }
  componentDidUpdate () {
    if (this.props.isFront) this._resize ();
  }
  shouldComponentUpdate (nextProps, nextState) {
    return this.props.isFront !== nextProps.isFront;
  }
  _resize () {
    this.props.resize ( this._getHeight () );
  }
  _getHeight () {
    return findDOMNode (this.refs.frontTile).offsetHeight;
  }
  render () {
    return <div className="front tile" ref="frontTile">
      {this.props.children}
    </div>;
  }
}

export default Front;
