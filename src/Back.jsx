import React from 'react';

class Back extends React.Component {
  constructor (props) {
    super (props);
    this._resize = this._resize.bind (this);
    this._getHeight = this._getHeight.bind (this);
  }
  componentDidMount () {
    React.findDOMNode (this).addEventListener ('DOMSubtreeModified', () => {
      if (!this.props.isFront) this._resize ();
    }.bind (this));
  }
  componentDidUpdate () {
    if (!this.props.isFront) this._resize ();
  }
  shouldComponentUpdate (nextProps, nextState) {
    return this.props.isFront !== nextProps.isFront;
  }
  _resize () {
    this.props.resize ( this._getHeight () );
  }
  _getHeight () {
    return React.findDOMNode (this.refs.backTile).offsetHeight;
  }
  render () {
    return <div className="back tile" ref="backTile">
      {this.props.children}
    </div>;
  }
}

export default Back;
