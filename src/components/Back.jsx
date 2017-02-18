import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Back extends Component {
  constructor (props) {
    super (props);
  }
  componentDidMount () {
    this._resize ();

    /** Adds an event listener to the contents inside the subtree;
        this will resize the flipper whenever the subtree contents change **/
    ReactDOM.findDOMNode (this)
      .addEventListener ('DOMSubtreeModified', this._resize);
  }
  componentWillUnmount () {
    /** As our component will unmount, the active event listener
        is no longer needed, therefore it is important to remove it **/
    ReactDOM.findDOMNode (this)
      .removeEventListener ('DOMSubtreeModified', this._resize);
  }
  componentDidUpdate () {
    this._resize ();
  }
  shouldComponentUpdate (nextProps, nextState) {
    return this.props.isFront !== nextProps.isFront;
  }
  _resize = () => {
    if (!this.props.isFront) this.props.resize (this._getHeight ());
  }
  _getHeight = () => {
    return findDOMNode (this.refs.backTile).offsetHeight;
  }
  _getClassName = () => {
    return this.props.className
      ? ('back tile ' + this.props.className)
      : 'back tile';
  }
  render () {
    let { className, ...props } = this.props;
    return <div className={this._getClassName ()} ref="backTile" {...props}>
      {this.props.children}
    </div>;
  }
}
