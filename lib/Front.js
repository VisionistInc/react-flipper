'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Front = (function (_React$Component) {
  _inherits(Front, _React$Component);

  function Front(props) {
    _classCallCheck(this, Front);

    _get(Object.getPrototypeOf(Front.prototype), 'constructor', this).call(this, props);
    this._resize = this._resize.bind(this);
    this._getHeight = this._getHeight.bind(this);
  }

  _createClass(Front, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this = this;

      _react2['default'].findDOMNode(this).addEventListener('DOMSubtreeModified', (function () {
        if (_this.props.isFront) _this._resize();
      }).bind(this));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.isFront) this._resize();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.isFront !== nextProps.isFront;
    }
  }, {
    key: '_resize',
    value: function _resize() {
      this.props.resize(this._getHeight());
    }
  }, {
    key: '_getHeight',
    value: function _getHeight() {
      return _react2['default'].findDOMNode(this.refs.frontTile).offsetHeight;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'front tile', ref: 'frontTile' },
        this.props.children
      );
    }
  }]);

  return Front;
})(_react2['default'].Component);

exports['default'] = Front;
module.exports = exports['default'];