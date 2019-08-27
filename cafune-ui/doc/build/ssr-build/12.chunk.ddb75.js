exports.ids = [12];
exports.modules = {

/***/ "WWU9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("EBst");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("9qb7");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("5D9O");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ../components/swiper/item.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, item__temp;



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var item_SwiperItem = (item__temp = _class = function (_Component) {
  _inherits(SwiperItem, _Component);

  function SwiperItem() {
    _classCallCheck(this, SwiperItem);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SwiperItem.prototype.render = function render(_ref) {
    var prefix = _ref.prefix,
        className = _ref.className,
        children = _ref.children,
        width = _ref.width,
        restProps = _objectWithoutProperties(_ref, ['prefix', 'className', 'children', 'width']);

    return Object(preact_min["h"])(
      'div',
      _extends({ className: classnames_default()(prefix + '-item', className), style: { width: width } }, restProps),
      children
    );
  };

  return SwiperItem;
}(preact_min["Component"]), _class.displayName = 'swiperItem', _class.defaultProps = {
  prefix: 'caf-swiper-container'
}, item__temp);

/* harmony default export */ var swiper_item = (item_SwiperItem);
// EXTERNAL MODULE: ../components/util/event.js
var util_event = __webpack_require__("xGWA");

// CONCATENATED MODULE: ../components/swiper/index.jsx
var swiper__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var swiper__class, _temp2;



function swiper__objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function swiper__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function swiper__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function swiper__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







// function checkIfIndicaotr(el) {
//   return el.nodeName.displayName === 'SwiperIndicator';
// }
function checkIfItem(el) {
  return el.nodeName.displayName === 'swiperItem';
}

/**
 * 轮播
 * @example
 * ```javascript
 * <Swiper
 *  initialIndex={0}
 *  showIndicators={true}
 *  autoplay={true}
 *  intervel={3000}
 *  onChange={action('handleChange')}
 * >
 *  {Array(...Array(sliderNum)).map((_, ind) => (
 *    <SwiperItem key={ind}>{ind + 1}</SwiperItem>
 *  ))}
 * </Swiper>
 * ```
 * ```
 */
var swiper_Swiper = (_temp2 = swiper__class = function (_Component) {
  swiper__inherits(Swiper, _Component);

  function Swiper() {
    var _temp, _this, _ret;

    swiper__classCallCheck(this, Swiper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = swiper__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      current: _this.props.initialIndex
    }, _this.total = 0, _this.size = 0, _this.swiperCurrent = 0, _this.resize = function () {
      var container = _this.swiperContainer.current;
      if (container) {
        var size = container.getBoundingClientRect();
        _this.size = size.width;
      }
      var rect = _this.swiperList.current;
      if (rect) {
        rect.style.width = _this.size * _this.swiperData.length + 'px';
      }
    }, _this.isSwiping = false, _this.offsetX = 0, _this.onSwiperClick = function (e) {
      if (_this.offsetX > 0) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }, _this.readyMoving = function (e) {
      _this.startTimeStamp = Date.now();
      _this.clearAutoPlay();
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
      _this.moveTo({
        offset: _this.state.current * _this.size * -1 + _this.deltaX + 'px'
      });
    }, _this.endMoving = function () {
      if (!_this.isSwiping) return;
      _this.isSwiping = false;
      // 是否已经在第一或最后一张
      var inBound = _this.state.current + _this.direction >= 0 && _this.state.current + _this.direction < _this.swiperData.length;
      if (_this.offsetX < _this.size / 4 || !inBound) {
        _this.moveTo({ ind: _this.state.current });
      } else if (inBound) {
        _this.moveTo({ ind: _this.state.current + _this.direction });
      }
      setTimeout(function () {
        return _this.offsetX = 0;
      }, 500);
    }, _this.swiperList = Object(preact_min["createRef"])(), _this.swiperContainer = Object(preact_min["createRef"])(), _temp), swiper__possibleConstructorReturn(_this, _ret);
  }

  Swiper.prototype.getSwiperData = function getSwiperData(children) {
    var _this2 = this;

    var data = [];
    children.forEach(function (item, ind) {
      if (item && checkIfItem(item)) {
        var props = item.attributes;
        var className = props.className;
        var _children = item.children;

        data.push({
          id: ind,
          actived: ind === _this2.state.current,
          content: _children,
          className: className
        });
      }
    });
    return data;
  };

  Swiper.prototype.componentDidMount = function componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize);
    var rect = this.swiperList.current;
    if (rect) {
      rect.addEventListener('click', this.onSwiperClick, true);
      rect.addEventListener(util_event["b" /* touchEventMap */].down, this.readyMoving);
      rect.addEventListener(util_event["b" /* touchEventMap */].move, this.startMoving);
      rect.addEventListener(util_event["b" /* touchEventMap */].up, this.endMoving);
      rect.addEventListener(util_event["b" /* touchEventMap */].out, this.endMoving);
    }
    this.moveTo({ ind: this.state.current });
    this.autoPlay();
  };

  Swiper.prototype.clearAutoPlay = function clearAutoPlay() {
    this.autoPlayTimer && clearTimeout(this.autoPlayTimer);
  };

  Swiper.prototype.autoPlay = function autoPlay() {
    var _this3 = this;

    var _props = this.props,
        autoplay = _props.autoplay,
        intervel = _props.intervel;

    if (autoplay && this.swiperData.length > 1) {
      this.clearAutoPlay();
      this.autoPlayTimer = setTimeout(function () {
        _this3.swiperCurrent = _this3.state.current + 1;
        var current = _this3.state.current;

        current = current === _this3.swiperData.length - 1 ? 0 : current + 1;
        _this3.moveTo({ ind: current });
      }, intervel);
    }
  };

  Swiper.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearAutoPlay();
    var rect = this.swiperList.current;
    if (rect) {
      rect.removeEventListener('click', this.onSwiperClick, true);
      rect.removeEventListener(util_event["b" /* touchEventMap */].down, this.readyMoving);
      rect.removeEventListener(util_event["b" /* touchEventMap */].move, this.startMoving);
      rect.removeEventListener(util_event["b" /* touchEventMap */].up, this.endMoving);
      rect.removeEventListener(util_event["b" /* touchEventMap */].out, this.endMoving);
    }

    window.removeEventListener('resize', this.resize);
  };

  Swiper.prototype.moveTo = function moveTo(_ref) {
    var _this4 = this;

    var ind = _ref.ind,
        offset = _ref.offset;

    this.clearAutoPlay();
    if (this.swiperList && this.swiperList.current) {
      var $swiper = this.swiperList.current;
      if (ind !== undefined) {
        $swiper.style.transitionDuration = '500ms';
        $swiper.style.transform = 'translate3d(' + ind * (1 / this.total) * -100 + '%, 0, 0 )';
        this.setState({
          current: ind
        }, function () {
          _this4.autoPlay();
          _this4.props.onChange && _this4.props.onChange(ind);
        });
      } else if (offset) {
        // 在拖动时不要过渡时间，否则卡顿
        $swiper.style.transitionDuration = '0ms';
        $swiper.style.transform = 'translate3d(' + offset + ', 0, 0 )';
      }
    }
  };

  Swiper.prototype.renderIndicators = function renderIndicators(data) {
    var _this5 = this;

    return data && data.length > 1 ? Array.apply(undefined, Array(data.length)).map(function (_, ind) {
      return Object(preact_min["h"])('span', {
        key: ind,
        className: 'caf-swiper-indicator-item',
        'data-status': ind === _this5.state.current ? 1 : 0,
        onClick: function onClick() {
          return _this5.moveTo({ ind: ind });
        }
      });
    }) : null;
  };

  Swiper.prototype.renderItems = function renderItems(data) {
    var _this6 = this;

    if (data && data.length) {
      return data.map(function (item) {
        return Object(preact_min["h"])(
          swiper_item,
          {
            key: item.id,
            onItemClick: _this6.onItemClick,
            actived: item.actived,
            width: 1 / data.length * 100 + '%'
          },
          item.content
        );
      });
    }
  };

  Swiper.prototype.renderSwipers = function renderSwipers() {
    var _props2 = this.props,
        prefix = _props2.prefix,
        children = _props2.children,
        className = _props2.className,
        showIndicators = _props2.showIndicators,
        customIndicator = _props2.customIndicator,
        restProps = swiper__objectWithoutProperties(_props2, ['prefix', 'children', 'className', 'showIndicators', 'customIndicator']);

    if (children && children.length) {
      var swiperData = this.getSwiperData(children);
      this.swiperData = swiperData;
      this.total = swiperData.length;
      return Object(preact_min["h"])(
        'div',
        swiper__extends({ className: classnames_default()(prefix, className), ref: this.swiperContainer }, restProps),
        Object(preact_min["h"])(
          'div',
          { className: prefix + '-container', ref: this.swiperList },
          this.renderItems(swiperData)
        ),
        customIndicator ? customIndicator : showIndicators && Object(preact_min["h"])(
          'div',
          { className: prefix + '-indicator' },
          this.renderIndicators(swiperData)
        )
      );
    } else {
      return null;
    }
  };

  Swiper.prototype.render = function render() {
    return this.renderSwipers();
  };

  return Swiper;
}(preact_min["Component"]), swiper__class.SwiperItem = swiper_item, swiper__class.defaultProps = {
  autoplay: true,
  intervel: 3000,
  initialIndex: 0,
  showIndicators: true
}, _temp2);

/* harmony default export */ var swiper = (swiper_Swiper);
// CONCATENATED MODULE: ./pages/components/swiper/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return swiper_SwiperComp; });



function components_swiper__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function components_swiper__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function components_swiper__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var swiper_SwiperItem = swiper.SwiperItem;

var swiper__ref = Object(preact_min["h"])(
  'p',
  null,
  '\u9ED8\u8BA4'
);

var _ref2 = Object(preact_min["h"])(
  'p',
  null,
  '\u81EA\u5B9A\u4E49\u6307\u793A\u5668'
);

var swiper_SwiperComp = function (_Component) {
  components_swiper__inherits(SwiperComp, _Component);

  function SwiperComp() {
    var _temp, _this, _ret;

    components_swiper__classCallCheck(this, SwiperComp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = components_swiper__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      current: 1
    }, _this.change = function (ind) {
      _this.setState({
        current: ind
      });
    }, _temp), components_swiper__possibleConstructorReturn(_this, _ret);
  }

  SwiperComp.prototype.renderCustom = function renderCustom() {
    var current = this.state.current;

    return Object(preact_min["h"])(
      'div',
      { style: 'padding: 4px 10px;position: absolute;right: 10px;bottom:10px;background: rgba(0,0,0, .6);color: #fff;font-size:12px;' },
      current + 1,
      '/4'
    );
  };

  SwiperComp.prototype.render = function render() {
    var sliderNum = 4;
    return Object(preact_min["h"])(
      'div',
      { 'class': '' },
      swiper__ref,
      Object(preact_min["h"])(
        swiper,
        {
          initialIndex: 0,
          showIndicators: true,
          autoplay: true,
          intervel: 3000
        },
        Array.apply(undefined, Array(sliderNum)).map(function (_, ind) {
          return Object(preact_min["h"])(
            swiper_SwiperItem,
            { key: ind },
            Object(preact_min["h"])(
              'div',
              { style: 'height: 80px;text-align:center;line-height: 80px;' },
              ind + 1
            )
          );
        })
      ),
      _ref2,
      Object(preact_min["h"])(
        swiper,
        { onChange: this.change, customIndicator: this.renderCustom() },
        Array.apply(undefined, Array(4)).map(function (_, ind) {
          return Object(preact_min["h"])(
            swiper_SwiperItem,
            { key: ind },
            Object(preact_min["h"])(
              'div',
              { style: 'height: 80px;text-align:center;line-height: 80px;' },
              ind + 1
            )
          );
        })
      )
    );
  };

  return SwiperComp;
}(preact_min["Component"]);



/***/ })

};;
//# sourceMappingURL=12.chunk.ddb75.js.map