(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["react-flipper"] = factory(require("react"), require("react-dom"));
	else
		root["react-flipper"] = factory(root["react"], root["react-dom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Flipper = __webpack_require__(2);

	var _Flipper2 = _interopRequireDefault(_Flipper);

	var _Front = __webpack_require__(8);

	var _Front2 = _interopRequireDefault(_Front);

	var _Back = __webpack_require__(10);

	var _Back2 = _interopRequireDefault(_Back);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { Flipper: _Flipper2.default, Front: _Front2.default, Back: _Back2.default };
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(4);

	var Flipper = function (_React$Component) {
	  _inherits(Flipper, _React$Component);

	  function Flipper(props) {
	    _classCallCheck(this, Flipper);

	    var _this = _possibleConstructorReturn(this, (Flipper.__proto__ || Object.getPrototypeOf(Flipper)).call(this, props));

	    _this._setHeight = _this._setHeight.bind(_this);
	    _this._getStyles = _this._getStyles.bind(_this);
	    _this._getChildren = _this._getChildren.bind(_this);
	    _this.state = { height: 250 };
	    return _this;
	  }

	  _createClass(Flipper, [{
	    key: '_setHeight',
	    value: function _setHeight(height) {
	      this.setState({ height: height });
	    }
	  }, {
	    key: '_getStyles',
	    value: function _getStyles() {
	      return { height: this.state.height };
	    }
	  }, {
	    key: '_getChildren',
	    value: function _getChildren() {
	      var _this2 = this;

	      return _react2.default.Children.map(this.props.children, function (child) {
	        return _react2.default.cloneElement(child, {
	          isFront: !_this2.props.isFlipped,
	          resize: _this2._setHeight
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        {
	          style: this._getStyles(),
	          className: "flipper-container " + this.props.orientation, ref: 'flipperContainer' },
	        _react2.default.createElement(
	          'div',
	          {
	            className: "flipper" + (this.props.isFlipped ? " flipped" : ""), ref: 'flipper' },
	          this._getChildren()
	        )
	      );
	    }
	  }]);

	  return Flipper;
	}(_react2.default.Component);

	Flipper.defaultProps = {
	  isFlipped: false,
	  orientation: 'horizontal'
	};

	exports.default = Flipper;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".backface-visibility-hidden {\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n}\ndiv.button-container {\n  float: left;\n  width: 100%;\n  margin-top: 15px;\n}\ndiv.button-container button {\n  width: auto;\n  padding: 7px 22px;\n}\n.flipper-container {\n  z-index: 1;\n  float: left;\n  width: 250px;\n  margin-right: 15px;\n  display: block;\n  -webkit-transition: height 500ms cubic-bezier(0.77, 0, 0.02, 1);\n  -moz-transition: height 500ms cubic-bezier(0.77, 0, 0.02, 1);\n  -ms-transition: height 500ms cubic-bezier(0.77, 0, 0.02, 1);\n  -o-transition: height 500ms cubic-bezier(0.77, 0, 0.02, 1);\n  transition: height 500ms cubic-bezier(0.77, 0, 0.02, 1);\n  perspective: 1000px;\n  -webkit-perspective: 1000px;\n  -moz-perspective: 1000px;\n  -ms-perspective: 1000px;\n}\n.flipper-container span {\n  color: white;\n}\n.flipper-container > div.flipper {\n  z-index: 1;\n  float: left;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform-style: preserve-3d;\n  -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  -ms-transform-style: preserve-3d;\n}\n.flipper-container > div.flipper .front,\n.flipper-container > div.flipper .back {\n  float: left;\n  display: block;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform-style: preserve-3d;\n  -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  -ms-transform-style: preserve-3d;\n  -webkit-transition: -webkit-transform ease 500ms;\n  -moz-transition: -webkit-transform ease 500ms;\n  -ms-transition: -webkit-transform ease 500ms;\n  -o-transition: -webkit-transform ease 500ms;\n  transition: -webkit-transform ease 500ms;\n  -webkit-transition: transform ease 500ms;\n  -moz-transition: transform ease 500ms;\n  -ms-transition: transform ease 500ms;\n  -o-transition: transform ease 500ms;\n  transition: transform ease 500ms;\n}\n.flipper-container > div.flipper .front {\n  z-index: 1;\n  background: #19489E;\n  min-height: 250px;\n  height: auto;\n  /** Front tile\n          styles go here **/\n}\n.flipper-container > div.flipper .back {\n  background: #9E1919;\n  min-height: 350px;\n  height: auto;\n  /** Back tile\n          styles go here **/\n}\n.flipper-container .tile {\n  color: white;\n  padding: 15px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n.flipper-container.horizontal .front {\n  transform: rotateY(0deg);\n  -ms-transform: rotateY(0deg);\n  -webkit-transform: rotateY(0deg);\n  -o-transform: rotateY(0deg);\n  -moz-transform: rotateY(0deg);\n}\n.flipper-container.horizontal .back {\n  transform: rotateY(-180deg);\n  -ms-transform: rotateY(-180deg);\n  -webkit-transform: rotateY(-180deg);\n  -o-transform: rotateY(-180deg);\n  -moz-transform: rotateY(-180deg);\n}\n.flipper-container.horizontal div.flipper.flipped .front {\n  transform: rotateY(180deg);\n  -ms-transform: rotateY(180deg);\n  -webkit-transform: rotateY(180deg);\n  -o-transform: rotateY(180deg);\n  -moz-transform: rotateY(180deg);\n}\n.flipper-container.horizontal div.flipper.flipped .back {\n  transform: rotateY(0deg);\n  -ms-transform: rotateY(0deg);\n  -webkit-transform: rotateY(0deg);\n  -o-transform: rotateY(0deg);\n  -moz-transform: rotateY(0deg);\n}\n.flipper-container.vertical .front {\n  transform: rotateX(0deg);\n  -ms-transform: rotateX(0deg);\n  -webkit-transform: rotateX(0deg);\n  -o-transform: rotateX(0deg);\n  -moz-transform: rotateX(0deg);\n}\n.flipper-container.vertical .back {\n  transform: rotateX(-180deg);\n  -ms-transform: rotateX(-180deg);\n  -webkit-transform: rotateX(-180deg);\n  -o-transform: rotateX(-180deg);\n  -moz-transform: rotateX(-180deg);\n}\n.flipper-container.vertical div.flipper.flipped .front {\n  transform: rotateX(180deg);\n  -ms-transform: rotateX(180deg);\n  -webkit-transform: rotateX(180deg);\n  -o-transform: rotateX(180deg);\n  -moz-transform: rotateX(180deg);\n}\n.flipper-container.vertical div.flipper.flipped .back {\n  transform: rotateX(0deg);\n  -ms-transform: rotateX(0deg);\n  -webkit-transform: rotateX(0deg);\n  -o-transform: rotateX(0deg);\n  -moz-transform: rotateX(0deg);\n}\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Front = function (_React$Component) {
	  _inherits(Front, _React$Component);

	  function Front(props) {
	    _classCallCheck(this, Front);

	    var _this = _possibleConstructorReturn(this, (Front.__proto__ || Object.getPrototypeOf(Front)).call(this, props));

	    _this._resize = _this._resize.bind(_this);
	    _this._getHeight = _this._getHeight.bind(_this);
	    return _this;
	  }

	  _createClass(Front, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      (0, _reactDom.findDOMNode)(this).addEventListener('DOMSubtreeModified', function () {
	        if (_this2.props.isFront) _this2._resize();
	      });
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
	      return (0, _reactDom.findDOMNode)(this.refs.frontTile).offsetHeight;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'front tile', ref: 'frontTile' },
	        this.props.children
	      );
	    }
	  }]);

	  return Front;
	}(_react2.default.Component);

	exports.default = Front;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Back = function (_React$Component) {
	  _inherits(Back, _React$Component);

	  function Back(props) {
	    _classCallCheck(this, Back);

	    var _this = _possibleConstructorReturn(this, (Back.__proto__ || Object.getPrototypeOf(Back)).call(this, props));

	    _this._resize = _this._resize.bind(_this);
	    _this._getHeight = _this._getHeight.bind(_this);
	    return _this;
	  }

	  _createClass(Back, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      (0, _reactDom.findDOMNode)(this).addEventListener('DOMSubtreeModified', function () {
	        if (!_this2.props.isFront) _this2._resize();
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (!this.props.isFront) this._resize();
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
	      return (0, _reactDom.findDOMNode)(this.refs.backTile).offsetHeight;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'back tile', ref: 'backTile' },
	        this.props.children
	      );
	    }
	  }]);

	  return Back;
	}(_react2.default.Component);

	exports.default = Back;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;