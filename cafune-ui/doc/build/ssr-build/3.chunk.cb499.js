exports.ids = [3,29];
exports.modules = {

/***/ "WUIe":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sbX7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("EBst");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// CONCATENATED MODULE: ../util/browser.js
// 文档滚动高度
function getScrollTop() {
  var scrollTop = 0;
  var bodyScrollTop = 0;
  var documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}

// 文档的总高度
function getScrollHeight() {
  var scrollHeight = 0;
  var bodyScrollHeight = 0;
  var documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = bodyScrollHeight - documentScrollHeight > 0 ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
}

// 浏览器视口的高度
function getWindowHeight() {
  var windowHeight = 0;
  if (document.compatMode == 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}
// 元素是否在视口范围内
function inViewPort(ele) {
  return getScrollTop() + getWindowHeight() >= ele.offsetTop && ele.offsetTop >= getScrollTop();
}
// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("5D9O");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ../components/lazyload/index.jsx
var _class, _temp2;



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * 懒加载包裹组件
 * @example
 * ```javascript
 * <Lazyload imgclassName="lazy">
 * // ...
 * <img src="/placeholder" data-src={originalpic} className="lazy" />
 * // ...
 * </Lazyload>
 * ```
 */
var lazyload_Lazyload = (_temp2 = _class = function (_Component) {
  _inherits(Lazyload, _Component);

  function Lazyload() {
    var _temp, _this, _ret;

    _classCallCheck(this, Lazyload);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.imgsInfo = [], _this.onScroll = function () {
      /* istanbul ignore next  */
      _this.updateLazy();
    }, _this.lazyContainer = Object(preact_min["createRef"])(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  Lazyload.prototype.componentDidMount = function componentDidMount() {
    var container = this.lazyContainer.current;
    this.container = container;
    this.updateImgs();
    window.addEventListener('scroll', this.onScroll);
  };

  Lazyload.prototype.componentDidUpdate = function componentDidUpdate() {
    /* istanbul ignore next  */
    this.updateImgs();
  };

  Lazyload.prototype.updateImgs = function updateImgs() {
    if (this.container) {
      var imgsInfo = [];
      // eslint-disable-next-line prettier/prettier
      var imgs = this.container.querySelectorAll('.' + this.props.imgClass) || [];
      for (var i = 0, len = imgs.length; i < len; i += 1) {
        var ele = imgs[i];
        if (ele.dataset.src !== ele.src) {
          imgsInfo.push({
            dom: ele,
            src: ele.dataset.src
          });
        }
      }
      this.imgsInfo = imgsInfo;
      this.updateLazy();
    }
  };

  Lazyload.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  };

  Lazyload.prototype.updateLazy = function updateLazy() {
    var imgsInfo = this.imgsInfo;

    imgsInfo.forEach(function (ele) {
      /* istanbul ignore else */
      if (ele.dom.src !== ele.src && inViewPort(ele.dom)) {
        ele.dom.src = ele.src;
      }
    });
  };

  Lazyload.prototype.render = function render(_ref) {
    var children = _ref.children;

    return Object(preact_min["h"])(
      'div',
      { ref: this.lazyContainer, className: 'caf-lazyload' },
      children
    );
  };

  return Lazyload;
}(preact_min["Component"]), _class.defaultProps = {
  imgClass: 'lazyImg'
}, _temp2);


/* harmony default export */ var lazyload = (lazyload_Lazyload);
// EXTERNAL MODULE: ./pages/components/lazyload/style.scss
var style = __webpack_require__("WUIe");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./pages/components/lazyload/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lazyload_LazyLoadComp; });



function lazyload__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function lazyload__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function lazyload__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var lazyload__ref = Object(preact_min["h"])('img', {
  src: 'https://via.placeholder.com/200x150.png?text=playholder',
  'data-src': 'https://via.placeholder.com/200x150.png?text=original',
  'class': 'lazy'
});

var lazyload_LazyLoadComp = function (_Component) {
  lazyload__inherits(LazyLoadComp, _Component);

  function LazyLoadComp() {
    lazyload__classCallCheck(this, LazyLoadComp);

    return lazyload__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  LazyLoadComp.prototype.render = function render() {
    return Object(preact_min["h"])(
      lazyload,
      { imgClass: 'lazy' },
      Array.apply(undefined, Array(20)).map(function (_, ind) {
        return Object(preact_min["h"])(
          'div',
          { 'class': 'caf-demo-image', key: ind },
          lazyload__ref
        );
      })
    );
  };

  return LazyLoadComp;
}(preact_min["Component"]);



/***/ })

};;
//# sourceMappingURL=3.chunk.cb499.js.map