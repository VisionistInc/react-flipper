import React from 'react';
import { findDOMNode } from 'react-dom';

class Front extends React.Component {
  constructor (props) {
    super (props);
    this._resize = this._resize.bind (this);
    this._getHeight = this._getHeight.bind (this);
  }
  componentDidMount () {
    findDOMNode (this).addEventListener ('DOMSubtreeModified', () => {
      if (this.props.isFront) this._resize ();
    }.bind (this));
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
