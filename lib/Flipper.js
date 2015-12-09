"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Flipper = (function (_React$Component) {
  _inherits(Flipper, _React$Component);

  function Flipper(props) {
    _classCallCheck(this, Flipper);

    _get(Object.getPrototypeOf(Flipper.prototype), "constructor", this).call(this, props);
    this._setHeight = this._setHeight.bind(this);
    this._getStyles = this._getStyles.bind(this);
    this._getChildren = this._getChildren.bind(this);
    this.state = { height: 250 };
  }

  _createClass(Flipper, [{
    key: "_setHeight",
    value: function _setHeight(height) {
      this.setState({ height: height });
    }
  }, {
    key: "_getStyles",
    value: function _getStyles() {
      return { height: this.state.height };
    }
  }, {
    key: "_getChildren",
    value: function _getChildren() {
      var _this = this;

      return _react2["default"].Children.map(this.props.children, (function (child) {
        return _react2["default"].cloneElement(child, {
          isFront: !_this.props.isFlipped,
          resize: _this._setHeight
        });
      }).bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        {
          style: this._getStyles(),
          className: "flipper-container " + this.props.orientation, ref: "flipperContainer" },
        _react2["default"].createElement(
          "div",
          {
            className: "flipper" + (this.props.isFlipped ? " flipped" : ""), ref: "flipper" },
          this._getChildren()
        )
      );
    }
  }]);

  return Flipper;
})(_react2["default"].Component);

Flipper.defaultProps = {
  isFlipped: false,
  orientation: 'horizontal'
};

exports["default"] = Flipper;
module.exports = exports["default"];