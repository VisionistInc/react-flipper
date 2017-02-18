!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("react"), require("react-dom")) : "function" == typeof define && define.amd ? define([ "react", "react-dom" ], t) : "object" == typeof exports ? exports["react-flipper"] = t(require("react"), require("react-dom")) : e["react-flipper"] = t(e.react, e["react-dom"]);
}(this, function(e, t) {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.i = function(e) {
            return e;
        }, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            });
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return t.d(n, "a", n), n;
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, t.p = "", t(t.s = 10);
    }([ function(t, n) {
        t.exports = e;
    }, function(e, n) {
        e.exports = t;
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(5);
        Object.defineProperty(t, "Flipper", {
            enumerable: !0,
            get: function() {
                return r(o).default;
            }
        });
        var i = n(6);
        Object.defineProperty(t, "Front", {
            enumerable: !0,
            get: function() {
                return r(i).default;
            }
        });
        var a = n(4);
        Object.defineProperty(t, "Back", {
            enumerable: !0,
            get: function() {
                return r(a).default;
            }
        });
    }, function(e, t, n) {
        "use strict";
        var r = n(7);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]);
        n(9)(r, {});
        r.locals && (e.exports = r.locals);
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n;
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), p = n(0), c = r(p), l = n(1), d = r(l), m = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n._resize = function() {
                    n.props.isFront || n.props.resize(n._getHeight());
                }, n._getHeight = function() {
                    return d.default.findDOMNode(n.refs.backTile).offsetHeight;
                }, n._getClassName = function() {
                    return n.props.className ? "back tile " + n.props.className : "back tile";
                }, n;
            }
            return s(t, e), u(t, [ {
                key: "componentDidMount",
                value: function() {
                    this._resize(), d.default.findDOMNode(this).addEventListener("DOMSubtreeModified", this._resize);
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    d.default.findDOMNode(this).removeEventListener("DOMSubtreeModified", this._resize);
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this._resize();
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    return this.props.isFront !== e.isFront;
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props, t = (e.className, e.isFront, e.resize, o(e, [ "className", "isFront", "resize" ]));
                    return c.default.createElement("div", f({
                        className: this._getClassName(),
                        ref: "backTile"
                    }, t), this.props.children);
                }
            } ]), t;
        }(p.Component);
        t.default = m, e.exports = t.default;
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), f = n(0), u = r(f);
        n(3);
        var p = function(e) {
            function t(e) {
                o(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n._setHeight = function(e) {
                    n.setState({
                        height: e
                    });
                }, n._getStyles = function() {
                    return {
                        height: n.state.height
                    };
                }, n._getChildren = function() {
                    return u.default.Children.map(n.props.children, function(e) {
                        return u.default.cloneElement(e, {
                            isFront: !n.props.isFlipped,
                            resize: n._setHeight
                        });
                    });
                }, n.state = {
                    height: 30
                }, n;
            }
            return a(t, e), s(t, [ {
                key: "render",
                value: function() {
                    return u.default.createElement("div", {
                        style: this._getStyles(),
                        className: "flipper-container " + this.props.orientation,
                        ref: "flipperContainer"
                    }, u.default.createElement("div", {
                        className: "flipper" + (this.props.isFlipped ? " flipped" : ""),
                        ref: "flipper"
                    }, this._getChildren()));
                }
            } ]), t;
        }(f.Component);
        p.defaultProps = {
            isFlipped: !1,
            orientation: "horizontal"
        }, t.default = p, e.exports = t.default;
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n;
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), p = n(0), c = r(p), l = n(1), d = r(l), m = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n._resize = function() {
                    n.props.isFront && n.props.resize(n._getHeight());
                }, n._getHeight = function() {
                    return d.default.findDOMNode(n.refs.frontTile).offsetHeight;
                }, n._getClassName = function() {
                    return n.props.className ? "front tile " + n.props.className : "front tile";
                }, n;
            }
            return s(t, e), u(t, [ {
                key: "componentDidMount",
                value: function() {
                    this._resize(), d.default.findDOMNode(this).addEventListener("DOMSubtreeModified", this._resize);
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    d.default.findDOMNode(this).removeEventListener("DOMSubtreeModified", this._resize);
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this._resize();
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    return this.props.isFront !== e.isFront;
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props, t = (e.className, e.isFront, e.resize, o(e, [ "className", "isFront", "resize" ]));
                    return c.default.createElement("div", f({
                        className: this._getClassName(),
                        ref: "frontTile"
                    }, t), this.props.children);
                }
            } ]), t;
        }(p.Component);
        t.default = m, e.exports = t.default;
    }, function(e, t, n) {
        t = e.exports = n(8)(), t.push([ e.i, ".backface-visibility-hidden {\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n}\ndiv.button-container {\n  float: left;\n  width: 100%;\n  margin-top: 15px;\n}\ndiv.button-container button {\n  width: auto;\n  padding: 7px 22px;\n}\n.flipper-container {\n  z-index: 1;\n  float: left;\n  width: 250px;\n  margin-right: 15px;\n  display: block;\n  -webkit-transition: height 500ms cubic-bezier(0.77, 0, 0.02, 1);\n  -moz-transition: height 500ms cubic-bezier(0.77, 0, 0.02, 1);\n  -ms-transition: height 500ms cubic-bezier(0.77, 0, 0.02, 1);\n  -o-transition: height 500ms cubic-bezier(0.77, 0, 0.02, 1);\n  transition: height 500ms cubic-bezier(0.77, 0, 0.02, 1);\n  perspective: 1000px;\n  -webkit-perspective: 1000px;\n  -moz-perspective: 1000px;\n  -ms-perspective: 1000px;\n}\n.flipper-container span {\n  color: white;\n}\n.flipper-container > div.flipper {\n  z-index: 1;\n  float: left;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform-style: preserve-3d;\n  -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  -ms-transform-style: preserve-3d;\n}\n.flipper-container > div.flipper .front,\n.flipper-container > div.flipper .back {\n  float: left;\n  display: block;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform-style: preserve-3d;\n  -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  -ms-transform-style: preserve-3d;\n  -webkit-transition: -webkit-transform ease 500ms;\n  -moz-transition: -webkit-transform ease 500ms;\n  -ms-transition: -webkit-transform ease 500ms;\n  -o-transition: -webkit-transform ease 500ms;\n  transition: -webkit-transform ease 500ms;\n  -webkit-transition: transform ease 500ms;\n  -moz-transition: transform ease 500ms;\n  -ms-transition: transform ease 500ms;\n  -o-transition: transform ease 500ms;\n  transition: transform ease 500ms;\n}\n.flipper-container > div.flipper .front {\n  height: auto;\n}\n.flipper-container > div.flipper .back {\n  height: auto;\n}\n.flipper-container .tile {\n  color: white;\n  padding: 15px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n.flipper-container.horizontal .front {\n  transform: rotateY(0deg);\n  -ms-transform: rotateY(0deg);\n  -webkit-transform: rotateY(0deg);\n  -o-transform: rotateY(0deg);\n  -moz-transform: rotateY(0deg);\n}\n.flipper-container.horizontal .back {\n  transform: rotateY(-180deg);\n  -ms-transform: rotateY(-180deg);\n  -webkit-transform: rotateY(-180deg);\n  -o-transform: rotateY(-180deg);\n  -moz-transform: rotateY(-180deg);\n}\n.flipper-container.horizontal div.flipper.flipped .front {\n  transform: rotateY(180deg);\n  -ms-transform: rotateY(180deg);\n  -webkit-transform: rotateY(180deg);\n  -o-transform: rotateY(180deg);\n  -moz-transform: rotateY(180deg);\n}\n.flipper-container.horizontal div.flipper.flipped .back {\n  transform: rotateY(0deg);\n  -ms-transform: rotateY(0deg);\n  -webkit-transform: rotateY(0deg);\n  -o-transform: rotateY(0deg);\n  -moz-transform: rotateY(0deg);\n}\n.flipper-container.vertical .front {\n  transform: rotateX(0deg);\n  -ms-transform: rotateX(0deg);\n  -webkit-transform: rotateX(0deg);\n  -o-transform: rotateX(0deg);\n  -moz-transform: rotateX(0deg);\n}\n.flipper-container.vertical .back {\n  transform: rotateX(-180deg);\n  -ms-transform: rotateX(-180deg);\n  -webkit-transform: rotateX(-180deg);\n  -o-transform: rotateX(-180deg);\n  -moz-transform: rotateX(-180deg);\n}\n.flipper-container.vertical div.flipper.flipped .front {\n  transform: rotateX(180deg);\n  -ms-transform: rotateX(180deg);\n  -webkit-transform: rotateX(180deg);\n  -o-transform: rotateX(180deg);\n  -moz-transform: rotateX(180deg);\n}\n.flipper-container.vertical div.flipper.flipped .back {\n  transform: rotateX(0deg);\n  -ms-transform: rotateX(0deg);\n  -webkit-transform: rotateX(0deg);\n  -o-transform: rotateX(0deg);\n  -moz-transform: rotateX(0deg);\n}\n", "" ]);
    }, function(e, t) {
        e.exports = function() {
            var e = [];
            return e.toString = function() {
                for (var e = [], t = 0; t < this.length; t++) {
                    var n = this[t];
                    n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1]);
                }
                return e.join("");
            }, e.i = function(t, n) {
                "string" == typeof t && (t = [ [ null, t, "" ] ]);
                for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    "number" == typeof i && (r[i] = !0);
                }
                for (o = 0; o < t.length; o++) {
                    var a = t[o];
                    "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), 
                    e.push(a));
                }
            }, e;
        };
    }, function(e, t) {
        function n(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n], o = l[r.id];
                if (o) {
                    o.refs++;
                    for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
                    for (;i < r.parts.length; i++) o.parts.push(f(r.parts[i], t));
                } else {
                    for (var a = [], i = 0; i < r.parts.length; i++) a.push(f(r.parts[i], t));
                    l[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: a
                    };
                }
            }
        }
        function r(e) {
            for (var t = [], n = {}, r = 0; r < e.length; r++) {
                var o = e[r], i = o[0], a = o[1], s = o[2], f = o[3], u = {
                    css: a,
                    media: s,
                    sourceMap: f
                };
                n[i] ? n[i].parts.push(u) : t.push(n[i] = {
                    id: i,
                    parts: [ u ]
                });
            }
            return t;
        }
        function o(e, t) {
            var n = h(), r = g[g.length - 1];
            if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), 
            g.push(t); else {
                if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(t);
            }
        }
        function i(e) {
            e.parentNode.removeChild(e);
            var t = g.indexOf(e);
            t >= 0 && g.splice(t, 1);
        }
        function a(e) {
            var t = document.createElement("style");
            return t.type = "text/css", o(e, t), t;
        }
        function s(e) {
            var t = document.createElement("link");
            return t.rel = "stylesheet", o(e, t), t;
        }
        function f(e, t) {
            var n, r, o;
            if (t.singleton) {
                var f = v++;
                n = b || (b = a(t)), r = u.bind(null, n, f, !1), o = u.bind(null, n, f, !0);
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = s(t), 
            r = c.bind(null, n), o = function() {
                i(n), n.href && URL.revokeObjectURL(n.href);
            }) : (n = a(t), r = p.bind(null, n), o = function() {
                i(n);
            });
            return r(e), function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t);
                } else o();
            };
        }
        function u(e, t, n, r) {
            var o = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = y(t, o); else {
                var i = document.createTextNode(o), a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
            }
        }
        function p(e, t) {
            var n = t.css, r = t.media;
            if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n; else {
                for (;e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
            }
        }
        function c(e, t) {
            var n = t.css, r = t.sourceMap;
            r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var o = new Blob([ n ], {
                type: "text/css"
            }), i = e.href;
            e.href = URL.createObjectURL(o), i && URL.revokeObjectURL(i);
        }
        var l = {}, d = function(e) {
            var t;
            return function() {
                return "undefined" == typeof t && (t = e.apply(this, arguments)), t;
            };
        }, m = d(function() {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
        }), h = d(function() {
            return document.head || document.getElementsByTagName("head")[0];
        }), b = null, v = 0, g = [];
        e.exports = function(e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            t = t || {}, "undefined" == typeof t.singleton && (t.singleton = m()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
            var o = r(e);
            return n(o, t), function(e) {
                for (var i = [], a = 0; a < o.length; a++) {
                    var s = o[a], f = l[s.id];
                    f.refs--, i.push(f);
                }
                if (e) {
                    var u = r(e);
                    n(u, t);
                }
                for (var a = 0; a < i.length; a++) {
                    var f = i[a];
                    if (0 === f.refs) {
                        for (var p = 0; p < f.parts.length; p++) f.parts[p]();
                        delete l[f.id];
                    }
                }
            };
        };
        var y = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n, e.filter(Boolean).join("\n");
            };
        }();
    }, function(e, t, n) {
        e.exports = n(2);
    } ]);
});