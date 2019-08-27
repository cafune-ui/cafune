exports.ids = [0,26];
exports.modules = {

/***/ "BlhD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "S/UO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

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

// CONCATENATED MODULE: ../components/notice-bar/index.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * 通知栏
 */
var notice_bar_NoticeBar = (_temp2 = _class = function (_Component) {
  _inherits(NoticeBar, _Component);

  function NoticeBar() {
    var _temp, _this, _ret;

    _classCallCheck(this, NoticeBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      wrapWidth: 0,
      offsetWidth: 0,
      duration: 0,
      isFirst: true,
      isShow: true
    }, _this.wrap = Object(preact_min["createRef"])(), _this.content = Object(preact_min["createRef"])(), _this.onAnimationEnd = function () {
      _this.setState({
        isFirst: false
      }, function () {
        _this.calcInfo();
      });
    }, _this.onRightClick = function () {
      if (_this.props.action === 'closable') {
        _this.setState({
          isShow: false
        });
      }
      _this.props.onClick && _this.props.onClick();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  NoticeBar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.text !== nextProps.text) {
      this.calcInfo();
    }
  };

  NoticeBar.prototype.componentDidMount = function componentDidMount() {
    this.calcInfo();
  };

  NoticeBar.prototype.calcInfo = function calcInfo() {
    var wrap = this.wrap,
        content = this.content;
    var _props = this.props,
        scrollable = _props.scrollable,
        speed = _props.speed;

    if (!wrap.current || !content.current) {
      return;
    }
    wrap = wrap.current;
    content = content.current;
    var wrapWidth = wrap.getBoundingClientRect().width;
    var offsetWidth = content.getBoundingClientRect().width;

    if (scrollable && offsetWidth > wrapWidth) {
      this.setState({
        wrapWidth: wrapWidth,
        offsetWidth: offsetWidth,
        duration: offsetWidth / speed
      });
    }
  };

  NoticeBar.prototype.render = function render(_ref, _ref2) {
    var isFirst = _ref2.isFirst,
        duration = _ref2.duration,
        wrapWidth = _ref2.wrapWidth,
        isShow = _ref2.isShow;

    var prefix = _ref.prefix,
        className = _ref.className,
        text = _ref.text,
        icon = _ref.icon,
        scrollable = _ref.scrollable,
        wrapable = _ref.wrapable,
        delay = _ref.delay,
        color = _ref.color,
        bgColor = _ref.bgColor,
        action = _ref.action,
        restProps = _objectWithoutProperties(_ref, ['prefix', 'className', 'text', 'icon', 'scrollable', 'wrapable', 'delay', 'color', 'bgColor', 'action']);

    var barStyle = {};
    if (color || bgColor) {
      barStyle = {
        color: color,
        backgroundColor: bgColor
      };
    }
    var contentStyle = {};
    if (!wrapable) {
      contentStyle = {
        paddingLeft: isFirst ? 0 : wrapWidth + 'px',
        animationDelay: (isFirst ? delay : 0) + 's',
        animationDuration: duration + 's'
      };
    }
    var rightIcon = void 0;
    if (!!action) {
      if (action === 'closable' || action === 'link') {
        rightIcon = Object(preact_min["h"])(
          'span',
          { className: prefix + '-action', onClick: this.onRightClick },
          Object(preact_min["h"])(components_icon["a" /* default */], { icon: action === 'closable' ? 'wrong' : 'arrow_right' })
        );
      } else {
        rightIcon = typeof action === 'string' ? Object(preact_min["h"])(
          'span',
          { className: prefix + '-action' },
          action
        ) : action;
      }
    }

    if (isShow) {
      var _cx, _cx2;

      return Object(preact_min["h"])(
        'div',
        _extends({
          className: classnames_default()(prefix, className, (_cx = {}, _cx[prefix + '__wrapable'] = wrapable, _cx)),
          style: barStyle
        }, restProps),
        !!icon && Object(preact_min["h"])(components_icon["a" /* default */], { icon: typeof icon === 'string' ? icon : 'notice' }),
        Object(preact_min["h"])(
          'div',
          { className: prefix + '-wrapper', ref: this.wrap },
          Object(preact_min["h"])(
            'p',
            {
              className: classnames_default()(prefix + '-content', (_cx2 = {}, _cx2[prefix + '-content__scroll'] = scrollable && !wrapable, _cx2[prefix + '-content__scroll__infinite'] = !isFirst && !wrapable, _cx2[prefix + '-content__ellipsis'] = !scrollable && !wrapable, _cx2)),
              onAnimationend: this.onAnimationEnd,
              onWebkitAnimationEnd: this.onAnimationEnd,
              ref: this.content,
              style: contentStyle
            },
            text
          )
        ),
        rightIcon
      );
    } else {
      return null;
    }
  };

  return NoticeBar;
}(preact_min["Component"]), _class.defaultProps = {
  prefix: 'caf-noticebar',
  scrollable: true,
  wrapable: false,
  icon: 'notice',
  speed: 50,
  delay: 1
}, _temp2);

/* harmony default export */ var notice_bar = (notice_bar_NoticeBar);
// EXTERNAL MODULE: ./pages/components/notice-bar/style.scss
var style = __webpack_require__("BlhD");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./pages/components/notice-bar/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return notice_bar_Page; });



function notice_bar__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function notice_bar__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function notice_bar__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var notice_bar__ref = Object(preact_min["h"])(
  'p',
  null,
  '\u57FA\u7840\u7528\u6CD5'
);

var notice_bar__ref2 = Object(preact_min["h"])(notice_bar, { text: '\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9' });

var _ref3 = Object(preact_min["h"])(
  'p',
  null,
  '\u81EA\u5B9A\u4E49\u56FE\u6807'
);

var _ref4 = Object(preact_min["h"])(notice_bar, {
  icon: false,
  text: '\u7981\u7528\u56FE\u6807\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9'
});

var _ref5 = Object(preact_min["h"])(notice_bar, {
  icon: 'more',
  text: '\u81EA\u5B9A\u4E49\u56FE\u6807\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9'
});

var _ref6 = Object(preact_min["h"])(
  'p',
  null,
  '\u7981\u6B62\u6EDA\u52A8'
);

var _ref7 = Object(preact_min["h"])(notice_bar, {
  scrollable: false,
  text: '\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9'
});

var _ref8 = Object(preact_min["h"])(
  'p',
  null,
  '\u591A\u884C\u5C55\u793A'
);

var _ref9 = Object(preact_min["h"])(notice_bar, {
  wrapable: true,
  text: '\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9'
});

var _ref10 = Object(preact_min["h"])(
  'p',
  null,
  '\u81EA\u5B9A\u4E49\u6837\u5F0F'
);

var _ref11 = Object(preact_min["h"])(notice_bar, {
  color: '#fff',
  bgColor: '#177cb0',
  icon: 'more',
  text: '\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9'
});

var _ref12 = Object(preact_min["h"])(
  'p',
  null,
  '\u81EA\u5B9A\u4E49\u53F3\u4FA7'
);

var _ref13 = Object(preact_min["h"])(notice_bar, {
  action: 'link',
  text: '\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9'
});

var _ref14 = Object(preact_min["h"])(notice_bar, {
  action: '\u53BB\u770B\u770B',
  text: '\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9'
});

var _ref15 = Object(preact_min["h"])(notice_bar, {
  action: Object(preact_min["h"])(
    'span',
    { style: 'color: #88ada6;' },
    '\u53BB\u770B\u770B'
  ),
  text: '\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9'
});

var notice_bar_Page = function (_Component) {
  notice_bar__inherits(Page, _Component);

  function Page() {
    notice_bar__classCallCheck(this, Page);

    return notice_bar__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Page.prototype.render = function render() {
    return Object(preact_min["h"])(
      'div',
      { 'class': 'caf-demo caf-demo__noticebar' },
      notice_bar__ref,
      notice_bar__ref2,
      _ref3,
      _ref4,
      _ref5,
      _ref6,
      _ref7,
      _ref8,
      _ref9,
      _ref10,
      _ref11,
      _ref12,
      Object(preact_min["h"])(notice_bar, {
        action: 'closable',
        onClick: function onClick() {
          console.log('closed ');
        },
        text: '\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9\u901A\u77E5\u5185\u5BB9'
      }),
      _ref13,
      _ref14,
      _ref15
    );
  };

  return Page;
}(preact_min["Component"]);



/***/ })

};;
//# sourceMappingURL=0.chunk.0df98.js.map