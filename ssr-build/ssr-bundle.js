module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		84: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({}[chunkId]||chunkId) + ".chunk." + {"0":"0df98","1":"92206","2":"6ade8","3":"cb499","4":"5eaa0","5":"62e8e","6":"e8e17","7":"816e3","8":"352c8","9":"993c7","10":"8ff10","11":"05c0f","12":"ddb75","13":"71481","14":"645b7","15":"932c4","16":"bd450","17":"0ea53","18":"8282a","19":"e9e20","20":"dc501","21":"4d80a","22":"8260f","23":"e863d","24":"30010","25":"9b8e3","26":"709ea","27":"7d60c","28":"7f493","29":"f9f4b","30":"53f3a","31":"1a956","32":"8864f","33":"61dbf","34":"9ebc2","35":"9e6ae","36":"2bbb8","37":"bcc1c","38":"bb35e","39":"cf12f","40":"2b300","41":"f0ac9","42":"be182","43":"d43e3","44":"857c8","45":"fb6dc","46":"9187d","47":"e9c3a","48":"4100c","49":"ba16c","50":"1909b","51":"abbbb","52":"e3e55","53":"9736d","54":"28b20","55":"421c9","56":"29d9d","57":"358d1","58":"32568","59":"a475f","60":"55ab4","61":"84ab7","62":"66464","63":"455fe","64":"bfbb0","65":"88e3d","66":"09bc4","67":"dde37","68":"a48d0","69":"e6d6c","70":"23209","71":"b9f64","72":"ae073","73":"75c84","74":"43427","75":"55474","76":"14fbd","77":"5f3ff","78":"d7955","79":"eed14","80":"8107c","81":"1163f","82":"032be","83":"0d8eb"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/cafune";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2IOQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isBrowser; });
/* unused harmony export isServer */
/* unused harmony export cookie */
/* unused harmony export QUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setPadding; });
var isBrowser = !!(typeof window !== 'undefined' && window);
var isServer = !isBrowser;

var cookie = {
  set: function set(name, value, expires) {
    var date = new Date();
    date.setTime(expires || date.getTime() + 24 * 60 * 60 * 1000);
    if (isBrowser) {
      document.cookie = name + '=' + (name === 'token' ? value : escape(value)) + ';expires=' + date.toGMTString() + ';path=/;';
    } else {
      if (ctx && ctx.cookies) {
        return ctx.cookies.set('name', value, {
          expires: expires,
          httpOnly: false
        });
      }
    }
    return this;
  },
  get: function get(name) {
    if (isBrowser) {
      var cookies = document.cookie.split('; ');
      var temp = void 0;

      for (var i = 0, len = cookies.length; i < len; i++) {
        temp = cookies[i].split('=');
        if (name === temp[0]) {
          temp.shift();
          return unescape(temp.join('='));
        }
      }
    } else if (ctx) {
      if (ctx.cookies) {
        return ctx.cookies.get(name);
      }
    }
    return '';
  },
  remove: function remove(name) {
    var date = new Date();
    date.getTime() + -1 * 24 * 60 * 60 * 1000;
    cookie.set(name, '', date);
  }
};

var QUrl = {
  getParam: function getParam(name) {
    if (isBrowser) {
      var reg = new RegExp('/[?&]' + name + '=([^&#]+)/');
      var result = location.href.match(reg);
      return result ? result[1] : '';
    } else if (ctx) {
      return ctx.query[name] || '';
    }
    return '';
  },
  redirectTo: function redirectTo(url) {
    if (isBrowser) {
      location.href = url;
    } else if (ctx) {
      ctx.redirect(url);
    }
  },
  getLocation: function getLocation() {
    if (isBrowser) {
      return location.href;
    } else if (ctx) {
      return ctx.href;
    }
    return '';
  }
};

var setPadding = function setPadding(size) {
  var wrapElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#qiujiang';

  if (isBrowser) {
    if (document.querySelector(wrapElement)) {
      document.querySelector(wrapElement).style.paddingBottom = size;
    }
  }
};

/***/ }),

/***/ "3mJm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5D9O":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var ReactIs = require('react-is');

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("wVGV")();
}

/***/ }),

/***/ "6E4v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var IconList = ['img', 'notice', 'arrow_right', 'arrow_left', 'check', 'wrong', 'more', 'more_o', 'search', 'back', 'next', 'menu', 'choice', 'upload', 'success', 'warning', 'error', 'like', 'like_o', 'browser', 'location', 'address', 'help', 'home', 'phone', 'password'];
/* harmony default export */ __webpack_exports__["default"] = (IconList);

/***/ }),

/***/ "8jGz":
/***/ (function(module, exports) {

module.exports = {"action-bar":{"desc":"动作栏","displayName":"ActionBar"},"action-sheet":{"desc":"动作面板","displayName":"ActionSheet"},"button":{"desc":"按钮","displayName":"Button"},"calendar":{"desc":"日历","displayName":"Calendar"},"cell":{"desc":"单元格","displayName":"Cell"},"checkbox":{"desc":"复选框","displayName":"Checkbox"},"collapse":{"desc":"折叠面板","displayName":"Collapse"},"grid":{"desc":"宫格","displayName":"Grid"},"icon":{"desc":"图标","displayName":"Icon"},"layout":{"desc":"布局","displayName":"Layout"},"lazyload":{"desc":"懒加载包裹组件","displayName":"Lazyload"},"loading":{"desc":"加载","displayName":"Loading"},"modal":{"desc":"模态框","displayName":"Modal"},"nav-bar":{"desc":"导航栏","displayName":"NavBar"},"notice-bar":{"desc":"通知栏","displayName":"NoticeBar"},"pagination":{"desc":"分页","displayName":"Pagination"},"pull-refresh":{"desc":"下拉刷新","displayName":"PullRefresh"},"scroller":{"desc":"","displayName":"Scroller"},"search-bar":{"desc":"搜索栏","displayName":"SearchBar"},"skeleton":{"desc":"骨架屏","displayName":"Skeleton"},"stepper":{"desc":"步进器","displayName":"Stepper"},"steps":{"desc":"步骤条","displayName":"Steps"},"swiper":{"desc":"轮播","displayName":"Swiper"},"switch":{"desc":"开关","displayName":"Switch"},"tab-bar":{"desc":"标签栏","displayName":"TabBar"},"tabs":{"desc":"标签卡","displayName":"Tabs"},"toast":{"desc":"消息提示","displayName":"Toast"}}

/***/ }),

/***/ "9qb7":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
})();

/***/ }),

/***/ "Asjh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "C7pb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "EBst":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = W;for (i = arguments.length; i-- > 2;) {
      P.push(arguments[i]);
    }t && null != t.children && (P.length || P.push(t.children), delete t.children);while (P.length) {
      if ((o = P.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        P.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === W ? l = [o] : l.push(o), n = r;
    }var a = new T();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== M.vnode && M.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(e, t) {
    null != e && ("function" == typeof e ? e(t) : e.current = t);
  }function o(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == V.push(e) && (M.debounceRendering || D)(i);
  }function i() {
    var e;while (e = V.pop()) {
      e.__d && x(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function c(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function s(e, t, o, r, i) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n(o, null), n(r, e);else if ("class" !== t || i) {
      if ("style" === t) {
        if (r && "string" != typeof r && "string" != typeof o || (e.style.cssText = r || ""), r && "object" == typeof r) {
          if ("string" != typeof o) for (var l in o) {
            l in r || (e.style[l] = "");
          }for (var l in r) {
            e.style[l] = "number" == typeof r[l] && !1 === E.test(l) ? r[l] + "px" : r[l];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var a = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), r ? o || e.addEventListener(t, _, a) : e.removeEventListener(t, _, a), (e.__l || (e.__l = {}))[t] = r;
      } else if ("list" !== t && "type" !== t && !i && t in e) {
        try {
          e[t] = null == r ? "" : r;
        } catch (e) {}null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var u = i && t !== (t = t.replace(/^xlink:?/, ""));null == r || !1 === r ? u ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (u ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r));
      }
    } else e.className = r || "";
  }function _(e) {
    return this.__l[e.type](M.event && M.event(e) || e);
  }function f() {
    var e;while (e = A.shift()) {
      M.afterMount && M.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, B = null != e && !("__preactattr_" in e));var l = h(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (B = !1, i || f()), l;
  }function h(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return N(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = c(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0);
    }var p = i.firstChild,
        s = i.__preactattr_,
        _ = t.children;if (null == s) {
      s = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        s[f[d].name] = f[d].value;
      }
    }return !B && _ && 1 === _.length && "string" == typeof _[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != _[0] && (p.nodeValue = _[0]) : (_ && _.length || null != p) && m(i, _, n, o, B || null != s.dangerouslySetInnerHTML), y(i, t.attributes, s), R = l, i;
  }function m(e, t, n, o, r) {
    var i,
        a,
        u,
        c,
        s,
        _ = e.childNodes,
        f = [],
        d = {},
        m = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (m++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      c = t[C], s = null;var k = c.key;if (null != k) m && void 0 !== d[k] && (s = d[k], d[k] = void 0, m--);else if (b < g) for (i = b; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], c, r)) {
          s = a, f[i] = void 0, i === g - 1 && g--, i === b && b++;break;
        }
      }s = h(s, c, n, o), u = _[C], s && s !== e && s !== u && (null == u ? e.appendChild(s) : s === u.nextSibling ? p(u) : e.insertBefore(s, u));
    }if (m) for (var C in d) {
      void 0 !== d[C] && v(d[C], !1);
    }while (b <= g) {
      void 0 !== (s = f[g--]) && v(s, !1);
    }
  }function v(e, t) {
    var o = e._component;o ? k(o) : (null != e.__preactattr_ && n(e.__preactattr_.ref, null), !1 !== t && null != e.__preactattr_ || p(e), b(e));
  }function b(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;v(e, !0), e = t;
    }
  }function y(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || s(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || s(e, o, n[o], n[o] = t[o], R);
    }
  }function g(e, t, n) {
    var o,
        r = F.length;e.prototype && e.prototype.render ? (o = new e(t, n), U.call(o, t, n)) : (o = new U(t, n), o.constructor = e, o.render = w);while (r--) {
      if (F[r].constructor === e) return o.__b = F[r].__b, F.splice(r, 1), o;
    }return o;
  }function w(e, t, n) {
    return this.constructor(e, n);
  }function C(e, t, o, i, l) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || l ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, i)), i && i !== e.context && (e.__c || (e.__c = e.context), e.context = i), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== o && (1 !== o && !1 === M.syncComponentUpdates && e.base ? r(e) : x(e, 1, l)), n(e.__r, e));
  }function x(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          c = e.props,
          p = e.state,
          s = e.context,
          _ = e.__p || c,
          h = e.__s || p,
          m = e.__c || s,
          b = e.base,
          y = e.__b,
          w = b || y,
          N = e._component,
          U = !1,
          S = m;if (e.constructor.getDerivedStateFromProps && (p = t(t({}, p), e.constructor.getDerivedStateFromProps(c, p)), e.state = p), b && (e.props = _, e.state = h, e.context = m, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, p, s) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(c, p, s), e.props = c, e.state = p, e.context = s), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(c, p, s), e.getChildContext && (s = t(t({}, s), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(_, h));var L,
            T,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = u(i);l = N, l && l.constructor === P && W.key == l.__k ? C(l, W, 1, s, !1) : (L = l, e._component = l = g(P, W, s), l.__b = l.__b || y, l.__u = e, C(l, W, 0, s, !1), x(l, 1, o, !0)), T = l.base;
        } else a = w, L = N, L && (a = e._component = null), (w || 1 === n) && (a && (a._component = null), T = d(a, i, s, o || !b, w && w.parentNode, !0));if (w && T !== w && l !== N) {
          var D = w.parentNode;D && T !== D && (D.replaceChild(T, w), L || (w._component = null, v(w, !1)));
        }if (L && k(L), e.base = T, T && !r) {
          var E = e,
              V = e;while (V = V.__u) {
            (E = V).base = T;
          }T._component = E, T._componentConstructor = E.constructor;
        }
      }!b || o ? A.push(e) : U || (e.componentDidUpdate && e.componentDidUpdate(_, h, S), M.afterUpdate && M.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || f();
    }
  }function N(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        c = a,
        p = u(t);while (r && !c && (r = r.__u)) {
      c = r.constructor === t.nodeName;
    }return r && c && (!o || r._component) ? (C(r, p, 3, n, o), e = r.base) : (i && !a && (k(i), e = l = null), r = g(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), C(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, v(l, !1))), e;
  }function k(e) {
    M.beforeUnmount && M.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var o = e._component;o ? k(o) : t && (null != t.__preactattr_ && n(t.__preactattr_.ref, null), e.__b = t, p(t), F.push(e), b(t)), n(e.__r, null);
  }function U(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function S(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }function L() {
    return {};
  }var T = function T() {},
      M = {},
      P = [],
      W = [],
      D = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      E = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      V = [],
      A = [],
      H = 0,
      R = !1,
      B = !1,
      F = [];t(U.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), x(this, 2);
    }, render: function render() {} });var j = { h: e, createElement: e, cloneElement: o, createRef: L, Component: U, render: S, rerender: i, options: M }; true ? module.exports = j : self.preact = j;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("EBst");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// CONCATENATED MODULE: ./node_modules/preact-router/dist/preact-router.es.js


var EMPTY$1 = {};

function preact_router_es_assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var i$1 = 0; i$1 < max; i$1++) {
		if (route[i$1] && route[i$1].charAt(0) === ':') {
			var param = route[i$1].replace(/(^\:|[+*?]+$)/g, ''),
			    flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[i$1] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[i$1] !== url[i$1]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) {
		return false;
	}
	return matches;
}

function pathRankSort(a, b) {
	return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
	vnode.index = index;
	vnode.rank = rankChild(vnode);
	return vnode.attributes;
}

function segmentize(url) {
	return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
	return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
	return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
	return vnode.attributes.default ? 0 : rank(vnode.attributes.path);
}

var customHistory = null;

var ROUTERS = [];

var subscribers = [];

var EMPTY = {};

function isPreactElement(node) {
	return node.__preactattr_ != null || typeof Symbol !== 'undefined' && node[Symbol.for('preactattr')] != null;
}

function setUrl(url, type) {
	if (type === void 0) type = 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
	if (replace === void 0) replace = false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) {
			return true;
		}
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	for (var i$1 = subscribers.length; i$1--;) {
		subscribers[i$1](url);
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) {
		return;
	}

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
		return;
	}

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.button == 0) {
		routeFromLink(e.currentTarget || e.target || this);
		return prevent(e);
	}
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href') && isPreactElement(t)) {
			if (t.hasAttribute('native')) {
				return;
			}
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
	if (eventListenersInitialized) {
		return;
	}

	if (typeof addEventListener === 'function') {
		if (!customHistory) {
			addEventListener('popstate', function () {
				routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var preact_router_es_Router = function (Component$$1) {
	function Router(props) {
		Component$$1.call(this, props);
		if (props.history) {
			customHistory = props.history;
		}

		this.state = {
			url: props.url || getCurrentUrl()
		};

		initEventListeners();
	}

	if (Component$$1) Router.__proto__ = Component$$1;
	Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	Router.prototype.constructor = Router;

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) {
			return true;
		}
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */
	Router.prototype.canRoute = function canRoute(url) {
		return this.getMatchingChildren(this.props.children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */
	Router.prototype.routeTo = function routeTo(url) {
		this._didRoute = false;
		this.setState({ url: url });

		// if we're in the middle of an update, don't synchronously re-route.
		if (this.updating) {
			return this.canRoute(url);
		}

		this.forceUpdate();
		return this._didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		var this$1 = this;

		if (customHistory) {
			this.unlisten = customHistory.listen(function (location) {
				this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
			});
		}
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		if (typeof this.unlisten === 'function') {
			this.unlisten();
		}
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
			var matches = exec(url, vnode.attributes.path, vnode.attributes);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					preact_router_es_assign(newProps, matches);
					delete newProps.ref;
					delete newProps.key;
					return Object(preact_min["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
		}).filter(Boolean);
	};

	Router.prototype.render = function render(ref, ref$1) {
		var children = ref.children;
		var onChange = ref.onChange;
		var url = ref$1.url;

		var active = this.getMatchingChildren(children, url, true);

		var current = active[0] || null;
		this._didRoute = !!current;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(preact_min["Component"]);

var preact_router_es_Link = function Link(props) {
	return Object(preact_min["h"])('a', preact_router_es_assign({ onClick: handleLinkClick }, props));
};

var preact_router_es_Route = function Route(props) {
	return Object(preact_min["h"])(props.component, props);
};

preact_router_es_Router.subscribers = subscribers;
preact_router_es_Router.getCurrentUrl = getCurrentUrl;
preact_router_es_Router.route = route;
preact_router_es_Router.Router = preact_router_es_Router;
preact_router_es_Router.Route = preact_router_es_Route;
preact_router_es_Router.Link = preact_router_es_Link;

/* harmony default export */ var preact_router_es = (preact_router_es_Router);
//# sourceMappingURL=preact-router.es.js.map
// EXTERNAL MODULE: ./comp-info.json
var comp_info = __webpack_require__("8jGz");
var comp_info_default = /*#__PURE__*/__webpack_require__.n(comp_info);

// EXTERNAL MODULE: ../components/icon/index.jsx
var icon = __webpack_require__("zHj6");

// CONCATENATED MODULE: ./pages/home/head.js



var head__ref2 = Object(preact_min["h"])(icon["a" /* default */], { icon: "menu", size: "20px" });

var _ref3 = Object(preact_min["h"])(
  "div",
  { "class": "head-bar" },
  Object(preact_min["h"])("img", { src: "/assets/Cafune.png", "class": "head-bar-logo" })
);

var _ref4 = Object(preact_min["h"])("a", {
  "class": "head-icon head-icon__github",
  href: "https://github.com/evont/preact-cafune/",
  alt: "cafune",
  target: "__blank"
});

var _ref5 = Object(preact_min["h"])(icon["a" /* default */], { icon: "more", size: "20px" });

var head_Header = function Header(_ref) {
  var toggleStatus = _ref.toggleStatus;

  return Object(preact_min["h"])(
    "h1",
    { "class": "caf-doc-head" },
    Object(preact_min["h"])(
      "span",
      { "class": "head-icon head-icon__menu", onClick: toggleStatus('shownav') },
      head__ref2
    ),
    _ref3,
    _ref4,
    Object(preact_min["h"])(
      "span",
      {
        "class": "head-icon head-icon__code",
        onClick: toggleStatus('showcode')
      },
      _ref5
    )
  );
};

/* harmony default export */ var head = (head_Header);
// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("9qb7");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./comp-type.json
var comp_type = __webpack_require__("djvB");
var comp_type_default = /*#__PURE__*/__webpack_require__.n(comp_type);

// CONCATENATED MODULE: ./pages/home/side.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var side_Side = function (_Component) {
  _inherits(Side, _Component);

  function Side() {
    _classCallCheck(this, Side);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Side.prototype.renderSide = function renderSide() {
    var _props = this.props,
        compInfo = _props.compInfo,
        name = _props.name;

    var mainNav = [];

    var _loop = function _loop(i) {
      var item = comp_type_default.a[i];
      var prefix = item.prefix,
          list = item.list;

      var isComps = prefix === 'components';
      var navItem = Object(preact_min["h"])(
        'div',
        { 'class': 'nav' },
        Object(preact_min["h"])(
          'h3',
          { 'class': 'nav-head' },
          item.name
        ),
        list.map(function (ele, key) {
          return Object(preact_min["h"])(
            'div',
            { 'class': 'nav-block', key: key },
            ele.name && Object(preact_min["h"])(
              'p',
              { 'class': 'nav-name' },
              ele.name
            ),
            ele.list.map(function (comp) {
              if (isComps && compInfo[comp.url] || !isComps) {
                return Object(preact_min["h"])(
                  'a',
                  {
                    'class': classnames_default()('nav-item', {
                      'nav-item__actived': comp.url === name
                    }),
                    href: '/' + prefix + '/' + comp.url,
                    key: comp.url
                  },
                  isComps ? // eslint-disable-next-line prettier/prettier
                  compInfo[comp.url].displayName + ' - ' + compInfo[comp.url].desc : comp.name
                );
              }
              return null;
            })
          );
        })
      );
      mainNav.push(navItem);
    };

    for (var i in comp_type_default.a) {
      _loop(i);
    }
    return Object(preact_min["h"])(
      'div',
      { 'class': 'caf-doc-side-wrapper' },
      mainNav
    );
  };

  Side.prototype.render = function render(_ref) {
    var shownav = _ref.shownav,
        toggleStatus = _ref.toggleStatus;

    return Object(preact_min["h"])(
      'div',
      { 'class': 'caf-doc-side', 'data-status': shownav ? 1 : 0 },
      Object(preact_min["h"])('div', { 'class': 'caf-doc-side-mask', onClick: toggleStatus('shownav') }),
      this.renderSide()
    );
  };

  return Side;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./pages/home/content.js



function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function content__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function content__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function content__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

var content__ref3 = Object(preact_min["h"])(
  'span',
  { 'class': 'title' },
  '\u4EE3\u7801\u793A\u4F8B'
);

var content_Content = function (_Component) {
  content__inherits(Content, _Component);

  function Content() {
    var _temp, _this, _ret;

    content__classCallCheck(this, Content);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = content__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      markdown: null,
      code: null,
      isCodeOpen: false
    }, _this.codeMaxheight = 0, _this.codeTransTime = 0.3, _this.codeBlock = Object(preact_min["createRef"])(), _this.toggleStatus = function (name) {
      return function () {
        var _this$setState;

        _this.setState((_this$setState = {}, _this$setState[name] = !_this.state[name], _this$setState));
      };
    }, _temp), content__possibleConstructorReturn(_this, _ret);
  }

  Content.prototype.getMd = function getMd(name) {
    var _this2 = this;

    var compInfo = this.props.compInfo;

    if (name && compInfo[name]) {
      __webpack_require__("YKhC")("./" + name + '.md').then(function (data) {
        var mdHtml = data.match(/module.exports = "((.|\n)+)";$/);
        if (mdHtml) {
          mdHtml = mdHtml[1].replace(/\\n+/g, '<br />').replace(/\\/g, '');
          _this2.setState({
            markdown: mdHtml
          });
        }
      });
    } else {
      this.setState({
        markdown: '<div>unavailable md</div>'
      });
    }
  };

  Content.prototype.getCode = function getCode(name) {
    var _this3 = this;

    var compInfo = this.props.compInfo;

    if (name && compInfo[name]) {
      __webpack_require__("mh0O")("./" + name + '/index.js').then(function (code) {
        // code = code.match(/module.exports = ((.|\n)+);$/);
        if (code) {
          code = code.replace(/\\n+/g, '<br />').replace(/\\/g, '');
          _this3.setState({
            code: code
          });
        }
      });
    } else {
      this.setState({
        code: '<div>unavailable code</div>'
      });
    }
  };

  Content.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setCodeProps();
  };

  Content.prototype.setCodeProps = function setCodeProps() {
    if (this.codeBlock && this.codeBlock.current) {
      // hljs.highlightBlock(this.codeBlock.current.querySelector('code'));
      var $codeContainer = this.codeBlock.current;
      var codeMaxheight = $codeContainer.getBoundingClientRect().height + 200;
      this.codeMaxheight = codeMaxheight;
      this.codeTransTime = 0.3 * (codeMaxheight / 2000);
    }
  };

  Content.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.name !== nextProps.name) {
      this.getMd(nextProps.name);
      this.getCode(nextProps.name);
      this.setState({
        showcode: false,
        isCodeOpen: false,
        shownav: false
      });
    }
  };

  Content.prototype.componentWillMount = function componentWillMount() {
    this.getMd(this.props.name);
    this.getCode(this.props.name);
  };

  Content.prototype.componentDidMount = function componentDidMount() {
    this.setCodeProps();
  };

  Content.prototype.render = function render(_ref, _ref2) {
    var markdown = _ref2.markdown,
        code = _ref2.code,
        isCodeOpen = _ref2.isCodeOpen;

    _objectDestructuringEmpty(_ref);

    return Object(preact_min["h"])(
      'div',
      { 'class': 'caf-doc-content caf-markdown' },
      Object(preact_min["h"])('div', {
        'class': 'caf-markdown-contain',
        dangerouslySetInnerHTML: { __html: markdown }
      }),
      code && Object(preact_min["h"])(
        'div',
        {
          'class': 'caf-doc-code',
          style: isCodeOpen ? {
            transitionDuration: this.codeTransTime + 's',
            maxHeight: this.codeMaxheight + 'px'
          } : {
            transitionDuration: this.codeTransTime + 's'
          }
        },
        Object(preact_min["h"])(
          'h4',
          { 'class': 'caf-doc-code-header' },
          content__ref3,
          Object(preact_min["h"])(
            'span',
            { 'class': 'btn', onClick: this.toggleStatus('isCodeOpen') },
            Object(preact_min["h"])(icon["a" /* default */], { icon: isCodeOpen ? 'invisible' : 'visible ' })
          )
        ),
        Object(preact_min["h"])(
          'div',
          { 'class': 'caf-doc-code-body' },
          Object(preact_min["h"])(
            'div',
            { 'class': 'caf-doc-code-wrapper', ref: this.codeBlock },
            Object(preact_min["h"])(
              'pre',
              null,
              Object(preact_min["h"])('code', {
                'class': 'jsx',
                dangerouslySetInnerHTML: { __html: code }
              })
            )
          )
        )
      )
    );
  };

  return Content;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./pages/home/style.scss
var style = __webpack_require__("pPF9");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./pages/home/index.js


function home__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function home__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function home__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var home__ref3 = Object(preact_min["h"])('div', { 'class': 'simulator-head' });

var home__ref4 = Object(preact_min["h"])('div', { 'class': 'simulator-foot' });

var home_Home = function (_Component) {
  home__inherits(Home, _Component);

  function Home() {
    var _temp, _this, _ret;

    home__classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = home__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      showcode: false,
      shownav: false
    }, _this.toggleStatus = function (name) {
      return function () {
        var _this$setState;

        _this.setState((_this$setState = {}, _this$setState[name] = !_this.state[name], _this$setState));
      };
    }, _temp), home__possibleConstructorReturn(_this, _ret);
  }

  Home.prototype.render = function render(_ref, _ref2) {
    var type = _ref.type,
        name = _ref.name;
    var showcode = _ref2.showcode,
        shownav = _ref2.shownav;

    return Object(preact_min["h"])(
      'div',
      { 'class': 'caf-doc' },
      Object(preact_min["h"])(head, { toggleStatus: this.toggleStatus }),
      Object(preact_min["h"])(
        'div',
        { 'class': 'caf-doc-main' },
        Object(preact_min["h"])(side_Side, {
          shownav: shownav,
          toggleStatus: this.toggleStatus,
          compInfo: comp_info_default.a,
          name: name
        }),
        Object(preact_min["h"])(content_Content, {
          name: name,
          compInfo: comp_info_default.a,
          toggleStatus: this.toggleStatus
        }),
        type === 'component' && Object(preact_min["h"])(
          'div',
          { 'class': 'caf-doc-simulator', 'data-status': showcode ? 1 : 0 },
          home__ref3,
          Object(preact_min["h"])('iframe', { src: '/comp/' + name, frameBorder: '0' }),
          home__ref4
        )
      )
    );
  };

  return Home;
}(preact_min["Component"]);

/* harmony default export */ var home = (home_Home);
// EXTERNAL MODULE: ./pages/components/index.js
var components = __webpack_require__("pU7b");

// EXTERNAL MODULE: ../style/index.scss
var style_0 = __webpack_require__("OOCI");
var style_default_0 = /*#__PURE__*/__webpack_require__.n(style_0);

// EXTERNAL MODULE: ./style.scss
var style_1 = __webpack_require__("3mJm");
var style_default_1 = /*#__PURE__*/__webpack_require__.n(style_1);

// CONCATENATED MODULE: ./index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });






// const nameMap = {
//   cell: '单元格',
//   collapse: '折叠面板',
//   skeleton: '骨架屏',
//   swiper: '轮播',
//   pagination: '分页',
//   tabs: '标签卡',
//   tabbar: '标签栏',
//   switch: '开关',
//   actionsheet: '动作面板',
//   loading: '加载',
//   navbar: '导航栏',
//   noticebar: '通告栏'
// };

var index__ref = Object(preact_min["h"])(
  preact_router_es_Router,
  null,
  Object(preact_min["h"])(home, { path: '/cafune/components/:name?', type: 'component' }),
  Object(preact_min["h"])(home, { path: '/cafune/doc/:name?', type: 'doc' }),
  Object(preact_min["h"])(components["default"], { path: '/cafune/comp/:name' })
);

var App = function App() {
  return index__ref;
};

/* harmony default export */ var index = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "OOCI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YKhC":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./action-bar.md": [
		"QsHl",
		83
	],
	"./action-sheet.md": [
		"5WZ7",
		82
	],
	"./button.md": [
		"A1le",
		81
	],
	"./calendar.md": [
		"DeXg",
		80
	],
	"./cell.md": [
		"yC3B",
		79
	],
	"./checkbox.md": [
		"qtEI",
		78
	],
	"./collapse.md": [
		"mPji",
		77
	],
	"./grid.md": [
		"4me5",
		76
	],
	"./icon.md": [
		"g1g+",
		75
	],
	"./layout.md": [
		"l9A1",
		74
	],
	"./lazyload.md": [
		"oMzq",
		73
	],
	"./loading.md": [
		"6sOc",
		72
	],
	"./modal.md": [
		"C0Gd",
		71
	],
	"./nav-bar.md": [
		"TEKc",
		70
	],
	"./notice-bar.md": [
		"nLcw",
		69
	],
	"./pagination.md": [
		"6R4p",
		68
	],
	"./pull-refresh.md": [
		"ImtD",
		67
	],
	"./scroller.md": [
		"J94a",
		66
	],
	"./search-bar.md": [
		"1hq7",
		65
	],
	"./skeleton.md": [
		"QmIt",
		64
	],
	"./stepper.md": [
		"4uhZ",
		63
	],
	"./steps.md": [
		"JHx0",
		62
	],
	"./swiper.md": [
		"re/0",
		61
	],
	"./switch.md": [
		"MmMV",
		60
	],
	"./tab-bar.md": [
		"9k94",
		59
	],
	"./tabs.md": [
		"OtmA",
		58
	],
	"./toast.md": [
		"7j/X",
		57
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "YKhC";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "dOKB":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__("EBst")) : typeof define === 'function' && define.amd ? define(['preact'], factory) : global['preact-async-route'] = factory(global.preact);
})(this, function (preact) {
	'use strict';

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}return target;
	};

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var AsyncRoute = function (_Component) {
		_inherits(AsyncRoute, _Component);

		function AsyncRoute() {
			_classCallCheck(this, AsyncRoute);

			var _this = _possibleConstructorReturn(this, _Component.call(this));

			_this.state = {
				componentData: null
			};
			return _this;
		}

		AsyncRoute.prototype.loadComponent = function loadComponent() {
			var _this2 = this;

			if (this.props.component) {
				return this.setState({
					componentData: this.props.component
				});
			}
			var componentData = this.props.getComponent(this.props.url, function (_ref) {
				var component = _ref.component;

				// Named param for making callback future proof
				if (component) {
					_this2.setState({
						componentData: component
					});
				}
			}, _extends({}, this.props, this.props.matches));

			// In case returned value was a promise
			if (componentData && componentData.then) {
				// IIFE to check if a later ending promise was creating a race condition
				// Check test case for more info
				(function (url) {
					componentData.then(function (component) {
						if (url !== _this2.props.url) {
							_this2.setState({ componentData: null }, function () {
								_this2.loadComponent();
							});
							return;
						}
						_this2.setState({
							componentData: component
						});
					});
				})(this.props.url);
			}
		};

		AsyncRoute.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
			var _this3 = this;

			if (this.props.path && this.props.path !== nextProps.path) {
				this.setState({
					componentData: null
				}, function () {
					_this3.loadComponent();
				});
			}
		};

		AsyncRoute.prototype.componentWillMount = function componentWillMount() {
			this.loadComponent();
		};

		AsyncRoute.prototype.render = function render() {
			if (this.state.componentData) {
				return preact.h(this.state.componentData, this.props);
			} else if (this.props.loading) {
				var loadingComponent = this.props.loading();
				return loadingComponent;
			}
			return null;
		};

		return AsyncRoute;
	}(preact.Component);

	return AsyncRoute;
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "dRq2":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": [
		"pU7b"
	],
	"./action-bar": [
		"s2M8",
		25
	],
	"./action-bar/": [
		"s2M8",
		25
	],
	"./action-bar/index": [
		"s2M8",
		25
	],
	"./action-bar/index.js": [
		"s2M8",
		25
	],
	"./action-sheet": [
		"Y4Q1",
		24
	],
	"./action-sheet/": [
		"Y4Q1",
		24
	],
	"./action-sheet/index": [
		"Y4Q1",
		24
	],
	"./action-sheet/index.js": [
		"Y4Q1",
		24
	],
	"./button": [
		"sVGh",
		23
	],
	"./button/": [
		"sVGh",
		23
	],
	"./button/index": [
		"sVGh",
		23
	],
	"./button/index.js": [
		"sVGh",
		23
	],
	"./calendar": [
		"6GzK",
		22
	],
	"./calendar/": [
		"6GzK",
		22
	],
	"./calendar/index": [
		"6GzK",
		22
	],
	"./calendar/index.js": [
		"6GzK",
		22
	],
	"./cell": [
		"qV2X",
		6
	],
	"./cell/": [
		"qV2X",
		6
	],
	"./cell/index": [
		"qV2X",
		6
	],
	"./cell/index.js": [
		"qV2X",
		6
	],
	"./checkbox": [
		"XXxW",
		21
	],
	"./checkbox/": [
		"XXxW",
		21
	],
	"./checkbox/index": [
		"XXxW",
		21
	],
	"./checkbox/index.js": [
		"XXxW",
		21
	],
	"./collapse": [
		"OTkm",
		20
	],
	"./collapse/": [
		"OTkm",
		20
	],
	"./collapse/index": [
		"OTkm",
		20
	],
	"./collapse/index.js": [
		"OTkm",
		20
	],
	"./grid": [
		"+mZQ",
		8
	],
	"./grid/": [
		"+mZQ",
		8
	],
	"./grid/index": [
		"+mZQ",
		8
	],
	"./grid/index.js": [
		"+mZQ",
		8
	],
	"./icon": [
		"7Yvu",
		7
	],
	"./icon/": [
		"7Yvu",
		7
	],
	"./icon/index": [
		"7Yvu",
		7
	],
	"./icon/index.js": [
		"7Yvu",
		7
	],
	"./icon/list": [
		"6E4v"
	],
	"./icon/list.js": [
		"6E4v"
	],
	"./index": [
		"pU7b"
	],
	"./index.js": [
		"pU7b"
	],
	"./layout": [
		"676T",
		4
	],
	"./layout/": [
		"676T",
		4
	],
	"./layout/index": [
		"676T",
		4
	],
	"./layout/index.js": [
		"676T",
		4
	],
	"./layout/style": [
		"boPo",
		30
	],
	"./layout/style.scss": [
		"boPo",
		30
	],
	"./lazyload": [
		"sbX7",
		3
	],
	"./lazyload/": [
		"sbX7",
		3
	],
	"./lazyload/index": [
		"sbX7",
		3
	],
	"./lazyload/index.js": [
		"sbX7",
		3
	],
	"./lazyload/style": [
		"WUIe",
		29
	],
	"./lazyload/style.scss": [
		"WUIe",
		29
	],
	"./loading": [
		"HTGx",
		2
	],
	"./loading/": [
		"HTGx",
		2
	],
	"./loading/index": [
		"HTGx",
		2
	],
	"./loading/index.js": [
		"HTGx",
		2
	],
	"./loading/style": [
		"gP8T",
		28
	],
	"./loading/style.scss": [
		"gP8T",
		28
	],
	"./nav-bar": [
		"Lahf",
		1
	],
	"./nav-bar/": [
		"Lahf",
		1
	],
	"./nav-bar/index": [
		"Lahf",
		1
	],
	"./nav-bar/index.js": [
		"Lahf",
		1
	],
	"./nav-bar/style": [
		"lIn8",
		27
	],
	"./nav-bar/style.scss": [
		"lIn8",
		27
	],
	"./notice-bar": [
		"S/UO",
		0
	],
	"./notice-bar/": [
		"S/UO",
		0
	],
	"./notice-bar/index": [
		"S/UO",
		0
	],
	"./notice-bar/index.js": [
		"S/UO",
		0
	],
	"./notice-bar/style": [
		"BlhD",
		26
	],
	"./notice-bar/style.scss": [
		"BlhD",
		26
	],
	"./pagination": [
		"QeC9",
		19
	],
	"./pagination/": [
		"QeC9",
		19
	],
	"./pagination/index": [
		"QeC9",
		19
	],
	"./pagination/index.js": [
		"QeC9",
		19
	],
	"./pull-refresh": [
		"gATp",
		18
	],
	"./pull-refresh/": [
		"gATp",
		18
	],
	"./pull-refresh/index": [
		"gATp",
		18
	],
	"./pull-refresh/index.js": [
		"gATp",
		18
	],
	"./scroller": [
		"pFT1",
		17
	],
	"./scroller/": [
		"pFT1",
		17
	],
	"./scroller/index": [
		"pFT1",
		17
	],
	"./scroller/index.js": [
		"pFT1",
		17
	],
	"./search-bar": [
		"qlsu",
		16
	],
	"./search-bar/": [
		"qlsu",
		16
	],
	"./search-bar/index": [
		"qlsu",
		16
	],
	"./search-bar/index.js": [
		"qlsu",
		16
	],
	"./skeleton": [
		"0PF1",
		15
	],
	"./skeleton/": [
		"0PF1",
		15
	],
	"./skeleton/index": [
		"0PF1",
		15
	],
	"./skeleton/index.js": [
		"0PF1",
		15
	],
	"./stepper": [
		"aBhO",
		14
	],
	"./stepper/": [
		"aBhO",
		14
	],
	"./stepper/index": [
		"aBhO",
		14
	],
	"./stepper/index.js": [
		"aBhO",
		14
	],
	"./steps": [
		"7f35",
		13
	],
	"./steps/": [
		"7f35",
		13
	],
	"./steps/index": [
		"7f35",
		13
	],
	"./steps/index.js": [
		"7f35",
		13
	],
	"./style": [
		"C7pb"
	],
	"./style.scss": [
		"C7pb"
	],
	"./swiper": [
		"WWU9",
		12
	],
	"./swiper/": [
		"WWU9",
		12
	],
	"./swiper/index": [
		"WWU9",
		12
	],
	"./swiper/index.js": [
		"WWU9",
		12
	],
	"./switch": [
		"NI1X",
		5
	],
	"./switch/": [
		"NI1X",
		5
	],
	"./switch/index": [
		"NI1X",
		5
	],
	"./switch/index.js": [
		"NI1X",
		5
	],
	"./tab-bar": [
		"rCPV",
		11
	],
	"./tab-bar/": [
		"rCPV",
		11
	],
	"./tab-bar/index": [
		"rCPV",
		11
	],
	"./tab-bar/index.js": [
		"rCPV",
		11
	],
	"./tabs": [
		"CGs7",
		10
	],
	"./tabs/": [
		"CGs7",
		10
	],
	"./tabs/index": [
		"CGs7",
		10
	],
	"./tabs/index.js": [
		"CGs7",
		10
	],
	"./toast": [
		"xe2t",
		9
	],
	"./toast/": [
		"xe2t",
		9
	],
	"./toast/index": [
		"xe2t",
		9
	],
	"./toast/index.js": [
		"xe2t",
		9
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "dRq2";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "djvB":
/***/ (function(module, exports) {

module.exports = {"doc":{"name":"指南","prefix":"doc","list":[{"list":[{"name":"介绍","url":"intro"}]}]},"components":{"name":"组件","prefix":"components","list":[{"name":"基础组件","list":[{"url":"cell"},{"url":"icon"},{"url":"button"},{"url":"layout"}]},{"name":"表单组件","list":[{"url":"switch"},{"url":"checkbox"},{"url":"calendar"},{"url":"stepper"},{"url":"search-bar"}]},{"name":"反馈组件","list":[{"url":"action-sheet"},{"url":"action-bar"},{"url":"toast"},{"url":"pull-refresh"}]},{"name":"展示组件","list":[{"url":"grid"},{"url":"swiper"},{"url":"skeleton"},{"url":"notice-bar"},{"url":"lazyload"},{"url":"steps"}]},{"name":"导航组件","list":[{"url":"tabs"},{"url":"tab-bar"},{"url":"pagination"},{"url":"nav-bar"}]}]}}

/***/ }),

/***/ "mh0O":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./action-bar/index.js": [
		"slWO",
		56
	],
	"./action-sheet/index.js": [
		"0Fr8",
		55
	],
	"./button/index.js": [
		"Tsxd",
		54
	],
	"./calendar/index.js": [
		"IByz",
		53
	],
	"./cell/index.js": [
		"pkL/",
		52
	],
	"./checkbox/index.js": [
		"TEkj",
		51
	],
	"./collapse/index.js": [
		"3DZj",
		50
	],
	"./grid/index.js": [
		"CBW/",
		49
	],
	"./icon/index.js": [
		"4lFF",
		48
	],
	"./layout/index.js": [
		"WaTl",
		47
	],
	"./lazyload/index.js": [
		"bIEm",
		46
	],
	"./loading/index.js": [
		"BmD/",
		45
	],
	"./nav-bar/index.js": [
		"awOW",
		44
	],
	"./notice-bar/index.js": [
		"hjNi",
		43
	],
	"./pagination/index.js": [
		"HpTl",
		42
	],
	"./pull-refresh/index.js": [
		"dzoW",
		41
	],
	"./scroller/index.js": [
		"aN0D",
		40
	],
	"./search-bar/index.js": [
		"srAk",
		39
	],
	"./skeleton/index.js": [
		"C/E/",
		38
	],
	"./stepper/index.js": [
		"U6WW",
		37
	],
	"./steps/index.js": [
		"BQiJ",
		36
	],
	"./swiper/index.js": [
		"WtmG",
		35
	],
	"./switch/index.js": [
		"sG9k",
		34
	],
	"./tab-bar/index.js": [
		"SyuP",
		33
	],
	"./tabs/index.js": [
		"nzMm",
		32
	],
	"./toast/index.js": [
		"eyFv",
		31
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "mh0O";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "pPF9":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "pU7b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comp", function() { return Comp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_async_route__ = __webpack_require__("dOKB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_async_route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_async_route__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comp_info__ = __webpack_require__("8jGz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comp_info___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__comp_info__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style__ = __webpack_require__("C7pb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var _ref = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'div',
  null,
  'unavailable comp'
);

var Comp = function (_Component) {
  _inherits(Comp, _Component);

  function Comp() {
    _classCallCheck(this, Comp);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Comp.prototype.getComp = function getComp(name) {
    if (name && __WEBPACK_IMPORTED_MODULE_2__comp_info___default.a[name]) {
      return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_async_route___default.a, {
        path: '/' + name,
        getComponent: function getComponent() {
          return __webpack_require__("dRq2")("./" + name).then(function (module) {
            return module.default;
          });
        }
      });
    } else {
      return _ref;
    }
  };

  Comp.prototype.render = function render(_ref2) {
    var name = _ref2.name;

    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { 'class': 'comp' },
      this.getComp(name)
    );
  };

  return Comp;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Comp);

/***/ }),

/***/ "vf+f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("EBst");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("5D9O");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("9qb7");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ../components/loading/svgMap.js


var svgMap__ref = Object(preact_min["h"])('animate', {
  attributeName: 'opacity',
  dur: '1s',
  values: '0;1;0',
  repeatCount: 'indefinite',
  begin: '0.1'
});

var _ref2 = Object(preact_min["h"])('animate', {
  attributeName: 'opacity',
  dur: '1s',
  values: '0;1;0',
  repeatCount: 'indefinite',
  begin: '0.2'
});

var _ref3 = Object(preact_min["h"])('animate', {
  attributeName: 'opacity',
  dur: '1s',
  values: '0;1;0',
  repeatCount: 'indefinite',
  begin: '0.3'
});

var _ref4 = Object(preact_min["h"])(
  'g',
  { fill: 'none', 'fill-rule': 'evenodd' },
  Object(preact_min["h"])(
    'g',
    { transform: 'translate(1 1)', 'stroke-width': '2' },
    Object(preact_min["h"])('circle', { 'stroke-opacity': '.5', cx: '18', cy: '18', r: '18' }),
    Object(preact_min["h"])(
      'path',
      {
        d: 'M36 18c0-9.94-8.06-18-18-18',
        transform: 'rotate(275.955 18 18)'
      },
      Object(preact_min["h"])('animateTransform', {
        attributeName: 'transform',
        type: 'rotate',
        from: '0 18 18',
        to: '360 18 18',
        dur: '1s',
        repeatCount: 'indefinite'
      })
    )
  )
);

var _ref5 = Object(preact_min["h"])(
  'g',
  {
    fill: 'none',
    'fill-rule': 'evenodd',
    transform: 'translate(1 1)',
    'stroke-width': '2'
  },
  Object(preact_min["h"])(
    'circle',
    { cx: '22', cy: '22', r: '13.2878', 'stroke-opacity': '0' },
    Object(preact_min["h"])('animate', {
      attributeName: 'r',
      begin: '1.5s',
      dur: '3s',
      values: '6;22',
      calcMode: 'linear',
      repeatCount: 'indefinite'
    }),
    Object(preact_min["h"])('animate', {
      attributeName: 'stroke-opacity',
      begin: '1.5s',
      dur: '3s',
      values: '1;0',
      calcMode: 'linear',
      repeatCount: 'indefinite'
    }),
    Object(preact_min["h"])('animate', {
      attributeName: 'stroke-width',
      begin: '1.5s',
      dur: '3s',
      values: '2;0',
      calcMode: 'linear',
      repeatCount: 'indefinite'
    })
  ),
  Object(preact_min["h"])(
    'circle',
    { cx: '22', cy: '22', r: '21.2878', 'stroke-opacity': '0' },
    Object(preact_min["h"])('animate', {
      attributeName: 'r',
      begin: '3s',
      dur: '3s',
      values: '6;22',
      calcMode: 'linear',
      repeatCount: 'indefinite'
    }),
    Object(preact_min["h"])('animate', {
      attributeName: 'stroke-opacity',
      begin: '3s',
      dur: '3s',
      values: '1;0',
      calcMode: 'linear',
      repeatCount: 'indefinite'
    }),
    Object(preact_min["h"])('animate', {
      attributeName: 'stroke-width',
      begin: '3s',
      dur: '3s',
      values: '2;0',
      calcMode: 'linear',
      repeatCount: 'indefinite'
    })
  ),
  Object(preact_min["h"])(
    'circle',
    { cx: '22', cy: '22', r: '5.46583' },
    Object(preact_min["h"])('animate', {
      attributeName: 'r',
      begin: '0s',
      dur: '1.5s',
      values: '6;1;2;3;4;5;6',
      calcMode: 'linear',
      repeatCount: 'indefinite'
    })
  )
);

/* harmony default export */ var svgMap = ({
  step: {
    cSize: '60px',
    cColor: '#ccc',
    func: function func(color, size) {
      var cSize = this.cSize,
          cColor = this.cColor;

      var boxHeight = 40;
      return Object(preact_min["h"])(
        'svg',
        {
          version: '1.1',
          id: 'L4',
          xmlns: 'http://www.w3.org/2000/svg',
          x: '0px',
          y: '0px',
          viewBox: '0 0 100 ' + boxHeight,
          'enable-background': 'new 0 0 0 0',
          xmlSpace: 'preserve',
          style: 'fill: ' + (color || cColor) + ';width:' + (size || cSize) + ';'
        },
        Object(preact_min["h"])(
          'circle',
          { stroke: 'none', cx: '25', cy: boxHeight / 2, r: '6' },
          svgMap__ref
        ),
        Object(preact_min["h"])(
          'circle',
          { stroke: 'none', cx: '50', cy: boxHeight / 2, r: '6' },
          _ref2
        ),
        Object(preact_min["h"])(
          'circle',
          { stroke: 'none', cx: '75', cy: boxHeight / 2, r: '6' },
          _ref3
        )
      );
    }
  },
  spinner: {
    cColor: '#ccc',
    cSize: '32px',
    func: function func(color, size) {
      var cSize = this.cSize,
          cColor = this.cColor;

      return Object(preact_min["h"])(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: size || cSize,
          height: size || cSize,
          viewBox: '0 0 38 38',
          stroke: color || cColor
        },
        _ref4
      );
    }
  },
  ripple: {
    cColor: '#ccc',
    cSize: '60px',
    func: function func(color, size) {
      var cSize = this.cSize,
          cColor = this.cColor;

      return Object(preact_min["h"])(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          style: { width: size || cSize, height: size || cSize },
          viewBox: '0 0 45 45',
          stroke: color || cColor
        },
        _ref5
      );
    }
  }
});
// CONCATENATED MODULE: ../components/loading/index.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var typeMap = Object.keys(svgMap);
/**
 * 加载
 * @example
 * ```javascript
 * <Loading />
 * <Loading type="spinner" />
 * // ...
 * ```
 */
var loading_Loading = (_temp = _class = function (_Component) {
  _inherits(Loading, _Component);

  function Loading() {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Loading.prototype.getSvg = function getSvg(type) {
    var _props = this.props,
        color = _props.color,
        size = _props.size;

    return svgMap[type] && svgMap[type].func(color, size);
  };

  Loading.prototype.render = function render(_ref) {
    var _cx;

    var className = _ref.className,
        prefix = _ref.prefix,
        type = _ref.type,
        text = _ref.text,
        vertical = _ref.vertical,
        restProps = _objectWithoutProperties(_ref, ['className', 'prefix', 'type', 'text', 'vertical']);

    var resultSvg = this.getSvg(type);
    return !!resultSvg && Object(preact_min["h"])(
      'div',
      _extends({
        className: classnames_default()(prefix, className, (_cx = {}, _cx[prefix + '__vertical'] = vertical, _cx))
      }, restProps),
      resultSvg,
      !!text && Object(preact_min["h"])(
        'span',
        { className: prefix + '-text' },
        text
      )
    );
  };

  return Loading;
}(preact_min["Component"]), _class.defaultProps = {
  prefix: 'caf-loading',
  type: 'spinner',
  vertical: false
}, _temp);

/* harmony default export */ var loading = __webpack_exports__["a"] = (loading_Loading);

/***/ }),

/***/ "wVGV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__("Asjh");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "xGWA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return touchEventMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTouch; });
var isSupportTouch = !!(typeof window !== 'undefined' && window) && 'ontouchend' in document ? true : false;
var touchEventMap = isSupportTouch ? {
  down: 'touchstart',
  move: 'touchmove',
  up: 'touchend',
  over: 'touchstart',
  out: 'touchcancel'
} : {
  down: 'mousedown',
  move: 'mousemove',
  up: 'mouseup',
  over: 'mouseover',
  out: 'mouseout'
};

var getTouch = function getTouch(e, type) {
  return isSupportTouch ? type === 'touchend' ? e.changedTouches[0] : e.targetTouches[0] : e;
};

/***/ }),

/***/ "z3JL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("EBst");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("5D9O");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("9qb7");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../components/icon/index.jsx
var components_icon = __webpack_require__("zHj6");

// CONCATENATED MODULE: ../components/cell/group.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, group__temp;



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 *
 */
var group_CellGroup = (group__temp = _class = function (_Component) {
  _inherits(CellGroup, _Component);

  function CellGroup() {
    _classCallCheck(this, CellGroup);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CellGroup.prototype.render = function render(_ref) {
    var _cx;

    var prefix = _ref.prefix,
        className = _ref.className,
        border = _ref.border,
        title = _ref.title,
        children = _ref.children,
        restProps = _objectWithoutProperties(_ref, ["prefix", "className", "border", "title", "children"]);

    return Object(preact_min["h"])(
      "div",
      _extends({ className: classnames_default()(prefix, className) }, restProps),
      !!title && Object(preact_min["h"])(
        "div",
        { className: prefix + "-title" },
        title
      ),
      Object(preact_min["h"])(
        "div",
        {
          className: classnames_default()(prefix + "-wrapper", (_cx = {}, _cx[prefix + "-wrapper__border"] = border, _cx))
        },
        children
      )
    );
  };

  return CellGroup;
}(preact_min["Component"]), _class.defaultProps = {
  prefix: "caf-cellgroup",
  border: true
}, group__temp);

/* harmony default export */ var group = (group_CellGroup);
// EXTERNAL MODULE: ../components/util/event.js
var util_event = __webpack_require__("xGWA");

// CONCATENATED MODULE: ../components/cell/index.jsx
var cell__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var cell__class, _temp2;



function cell__objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function cell__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function cell__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function cell__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * 单元格
 */
var cell_Cell = (_temp2 = cell__class = function (_Component) {
  cell__inherits(Cell, _Component);

  function Cell() {
    var _temp, _this, _ret;

    cell__classCallCheck(this, Cell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = cell__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.isSwiping = false, _this.movedSize = 0, _this.readyMoving = function (e) {
      _this.startTimeStamp = Date.now();
      _this.isSwiping = true;
      var touch = Object(util_event["a" /* getTouch */])(e);
      _this.startX = touch.clientX;
    }, _this.startMoving = function (e) {
      if (!_this.isSwiping) return;
      var touch = Object(util_event["a" /* getTouch */])(e);
      _this.deltaX = touch.clientX - _this.startX;
      _this.offsetX = Math.abs(_this.deltaX);
      _this.direction = _this.deltaX >= 0 ? -1 : 1;
      e.preventDefault();
      e.stopPropagation();
      if (_this.direction > 0) {
        if (_this.offsetX > 0 && _this.offsetX <= _this.swiperSize) {
          _this.moveTo(_this.deltaX, true);
        }
      } else {
        _this.moveTo(0);
      }
    }, _this.endMoving = function () {
      if (!_this.isSwiping) return;
      _this.isSwiping = false;
      if (_this.offsetX > 0 && _this.offsetX <= _this.swiperSize) {
        if (_this.offsetX < _this.swiperSize / 2) {
          _this.moveTo(0);
        } else {
          _this.moveTo(_this.swiperSize * -1);
        }
      }
      setTimeout(function () {
        return _this.offsetX = 0;
      }, 500);
    }, _this.swipable = false, _this.promiseFunc = function (func) {
      setTimeout(func.bind(_this), 0);
    }, _this.swiperSize = 0, _this.cellWrapper = Object(preact_min["createRef"])(), _this.cellMain = Object(preact_min["createRef"])(), _this.cellSwiper = Object(preact_min["createRef"])(), _temp), cell__possibleConstructorReturn(_this, _ret);
  }

  Cell.prototype.moveTo = function moveTo(offset) {
    var noDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (this.cellWrapper && this.cellWrapper.current) {
      var $swiper = this.cellWrapper.current;
      // 在拖动时不要过渡时间，否则卡顿
      $swiper.style.transitionDuration = noDuration ? '0ms' : '500ms';
      $swiper.style.transform = 'translate3d(' + offset + 'px, 0, 0 )';
      this.movedSize = offset;
    }
  };

  Cell.prototype.registeSwiperEvent = function registeSwiperEvent() {
    if (this.cellSwiper && this.cellSwiper.current) {
      this.swipable = true;
      var swipe = this.cellSwiper.current;
      var size = swipe.getBoundingClientRect();
      this.swiperSize = size.width;
    }
    if (this.cellMain && this.cellMain.current) {
      var rect = this.cellMain.current;
      rect.addEventListener(util_event["b" /* touchEventMap */].down, this.readyMoving);
      rect.addEventListener(util_event["b" /* touchEventMap */].move, this.startMoving);
      rect.addEventListener(util_event["b" /* touchEventMap */].up, this.endMoving);
      rect.addEventListener(util_event["b" /* touchEventMap */].out, this.endMoving);
    }
  };

  Cell.prototype.unRegisteSwiperEvent = function unRegisteSwiperEvent() {
    if (this.cellMain && this.cellMain.current && this.swipable) {
      var rect = this.cellMain.current;
      this.swipable = false;
      rect.removeEventListener(util_event["b" /* touchEventMap */].down, this.readyMoving);
      rect.removeEventListener(util_event["b" /* touchEventMap */].move, this.startMoving);
      rect.removeEventListener(util_event["b" /* touchEventMap */].up, this.endMoving);
      rect.removeEventListener(util_event["b" /* touchEventMap */].out, this.endMoving);
    }
  };

  Cell.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unRegisteSwiperEvent();
  };

  Cell.prototype.render = function render(_ref) {
    var _cx;

    var prefix = _ref.prefix,
        className = _ref.className,
        icon = _ref.icon,
        iconSize = _ref.iconSize,
        title = _ref.title,
        label = _ref.label,
        value = _ref.value,
        url = _ref.url,
        rightIcon = _ref.rightIcon,
        border = _ref.border,
        middle = _ref.middle,
        swipeList = _ref.swipeList,
        restProps = cell__objectWithoutProperties(_ref, ['prefix', 'className', 'icon', 'iconSize', 'title', 'label', 'value', 'url', 'rightIcon', 'border', 'middle', 'swipeList']);

    var showRightIcon = !!url || !!rightIcon;
    var cls = classnames_default()(prefix, className, (_cx = {}, _cx[prefix + '__clickable'] = showRightIcon, _cx[prefix + '__border'] = border, _cx[prefix + '__middle'] = middle, _cx));
    icon = icon ? Object(preact_min["h"])(components_icon["a" /* default */], { icon: icon, size: iconSize }) : null;
    title = Object(preact_min["h"])(
      'div',
      { className: prefix + '-title' },
      Object(preact_min["h"])(
        'span',
        null,
        title
      ),
      !!label && Object(preact_min["h"])(
        'div',
        { className: prefix + '-label' },
        label
      )
    );
    var val = !!value ? Object(preact_min["h"])(
      'div',
      { className: prefix + '-value' },
      Object(preact_min["h"])(
        'span',
        null,
        value
      )
    ) : null;
    var rIcon = showRightIcon ? Object(preact_min["h"])(components_icon["a" /* default */], { icon: rightIcon || 'arrow_right' }) : null;
    var Tag = !!url ? 'a' : 'div';
    var urlProps = !!url ? { href: url } : {};
    var Options = null;
    if (swipeList && swipeList.length) {
      Options = Object(preact_min["h"])(
        'div',
        { className: prefix + '-swiper', ref: this.cellSwiper },
        swipeList.map(function (item) {
          return Object(preact_min["h"])(
            'span',
            {
              className: prefix + '-swiper-item',
              onClick: item.clickHandler,
              style: item.style
            },
            item.name
          );
        })
      );
      this.promiseFunc(this.registeSwiperEvent);
    } else {
      this.promiseFunc(this.unRegisteSwiperEvent);
    }
    return Object(preact_min["h"])(
      'div',
      cell__extends({ className: cls }, restProps),
      Object(preact_min["h"])(
        'div',
        { className: prefix + '-wrapper', ref: this.cellWrapper },
        Object(preact_min["h"])(
          Tag,
          cell__extends({}, urlProps, { className: prefix + '-main', ref: this.cellMain }),
          icon,
          title,
          val,
          rIcon
        ),
        Options
      )
    );
  };

  return Cell;
}(preact_min["Component"]), cell__class.CellGroup = group, cell__class.defaultProps = {
  prefix: 'caf-cell',
  border: true,
  swipeList: []
}, _temp2);

/* harmony default export */ var cell = __webpack_exports__["a"] = (cell_Cell);

/***/ }),

/***/ "zHj6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("5D9O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("9qb7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




function isImage(icon) {
  return icon && icon.indexOf('/') !== -1;
}
/**
 * 图标
 * @example
 * ```jsx
 * // 使用内置图标
 * 
 * <Icon icon="back" />
 * 
 * // 使用图片地址
 * 
 * <Icon icon="http://someicon.com/someicon.png" />
 * ```
 */
var Icon = function Icon(_ref) {
  var _cx;

  var _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === undefined ? 'caf-icon' : _ref$prefix,
      className = _ref.className,
      icon = _ref.icon,
      color = _ref.color,
      size = _ref.size,
      _ref$tag = _ref.tag,
      tag = _ref$tag === undefined ? 'i' : _ref$tag,
      restProps = _objectWithoutProperties(_ref, ['prefix', 'className', 'icon', 'color', 'size', 'tag']);

  var isImg = isImage(icon);
  var iconClass = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(prefix, className, (_cx = {}, _cx[prefix + '_' + icon] = !isImg, _cx));
  var prop = _extends({}, restProps);
  if (isImg) {
    size = size || '16px';
    prop.style = 'width: ' + size + ';height: ' + size + ';line-height: ' + size + ';';
  } else {
    if (color) prop.style = (prop.style || '') + ('color: ' + color + ';');
    if (size) prop.style = (prop.style || '') + ('font-size: ' + size + ';');
  }
  var Tag = tag;
  return isImg ? Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    Tag,
    _extends({ className: iconClass }, prop),
    isImg && Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { src: icon, className: prefix + '-img' })
  ) : Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Tag, _extends({ className: iconClass }, prop));
};
Icon.defalutProps = {
  prefix: 'caf-icon',
  tag: 'i'
};

/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),

/***/ "zcpj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("5D9O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("9qb7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon__ = __webpack_require__("zHj6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading__ = __webpack_require__("vf+f");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var typeColor = {
  normal: '#ccc',
  primary: '#4f81bf',
  warning: '#e46060'
};
var defaultLoadingInfo = {
  type: 'spinner',
  size: '18px'
};
/**
 * 按钮
 * @example
 * ```jsx
 * <Button>按钮</Button>
 * ```
 */
var Button = (_temp = _class = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Button.prototype.render = function render(_ref) {
    var _cx;

    var prefix = _ref.prefix,
        className = _ref.className,
        children = _ref.children,
        type = _ref.type,
        size = _ref.size,
        icon = _ref.icon,
        ghost = _ref.ghost,
        disabled = _ref.disabled,
        loading = _ref.loading,
        loadingInfo = _ref.loadingInfo,
        gradient = _ref.gradient,
        block = _ref.block,
        radius = _ref.radius,
        style = _ref.style,
        onClick = _ref.onClick,
        restProps = _objectWithoutProperties(_ref, ['prefix', 'className', 'children', 'type', 'size', 'icon', 'ghost', 'disabled', 'loading', 'loadingInfo', 'gradient', 'block', 'radius', 'style', 'onClick']);

    var btnStyle = {};
    if (style) {
      btnStyle = _extends({}, style);
    }
    if (gradient) {
      var _gradient$angle = gradient.angle,
          angle = _gradient$angle === undefined ? 0 : _gradient$angle,
          _gradient$from = gradient.from,
          from = _gradient$from === undefined ? '' : _gradient$from,
          _gradient$to = gradient.to,
          to = _gradient$to === undefined ? '' : _gradient$to,
          _gradient$color = gradient.color,
          color = _gradient$color === undefined ? '#fff' : _gradient$color;

      btnStyle.backgroundImage = 'linear-gradient(' + angle + 'deg, ' + from + ' 0, ' + to + ' 100%)';
      btnStyle.color = color;
    }
    var radiusType = void 0;
    if (typeof radius === 'string') {
      btnStyle.borderRadius = radius;
    } else if (typeof radius === 'boolean') {
      radiusType = radius ? 'round' : 'square';
    }
    var btnIcon = null;
    var iconStyle = {};
    var isReverse = false;
    if (loading) {
      loadingInfo = _extends({}, defaultLoadingInfo, loadingInfo);
      btnIcon = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__loading__["a" /* default */], {
        type: loadingInfo.type,
        size: loadingInfo.size,
        color: loadingInfo.color || (ghost ? typeColor[type] : type === 'default' ? '#ccc' : '#fff')
      });
    } else if (icon) {
      var _type = icon.type,
          position = icon.position;

      btnIcon = typeof _type === 'string' ? Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__icon__["a" /* default */], { icon: _type }) : _type;
      if (position) {
        if (position === 'right') {
          isReverse = true;
        } else if (position.left || position.right) {
          iconStyle.position = 'absolute';
          position.left && (iconStyle.left = position.left);
          position.right && (iconStyle.right = position.right);
        }
      }
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'a',
      _extends({
        role: 'button',
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(prefix, prefix + '__t_' + type, prefix + '__s_' + size, (_cx = {}, _cx[prefix + '__reverse'] = isReverse, _cx[prefix + '__block'] = block, _cx[prefix + '__disabled'] = disabled, _cx[prefix + '__loading'] = loading, _cx[prefix + '__ghost'] = ghost, _cx[prefix + '__' + radiusType] = !!radiusType, _cx[className] = !!className, _cx)),
        style: btnStyle,
        onClick: disabled ? undefined : onClick
      }, restProps),
      !!btnIcon && Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'span',
        { className: prefix + '-icon', style: iconStyle },
        btnIcon
      ),
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'span',
        { className: prefix + '-content' },
        children
      )
    );
  };

  return Button;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]), _class.defaultProps = {
  prefix: 'caf-btn',
  size: 'normal',
  type: 'default',
  ghost: false,
  disabled: false,
  loading: false,
  block: false
}, _temp);

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map