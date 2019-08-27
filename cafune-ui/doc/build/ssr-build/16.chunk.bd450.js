exports.ids = [16];
exports.modules = {

/***/ "qlsu":
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
var icon = __webpack_require__("zHj6");

// CONCATENATED MODULE: ../components/search-bar/index.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, search_bar__initialiseProps;



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var actionDefault = {
  confirm: {
    text: '搜索',
    keepShow: true
  },
  cancel: {
    text: '取消',
    keepShow: false
  },
  custom: {
    text: '确定',
    keepShow: true
  }
};
function onNextFrame(cb) {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(cb);
  }
  return window.setTimeout(cb, 1);
}
function clearNextFrameAction(nextFrameId) {
  if (window.cancelAnimationFrame) {
    window.cancelAnimationFrame(nextFrameId);
  } else {
    window.clearTimeout(nextFrameId);
  }
}

/**
 * 搜索栏
 */
var search_bar_SearchBar = (_temp = _class = function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    search_bar__initialiseProps.call(_this);

    var value = props.value || '';
    _this.state = {
      value: value,
      focus: false
    };
    return _this;
  }

  SearchBar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ('value' in nextProps && nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value
      });
    }
  };

  SearchBar.prototype.componentDidMount = function componentDidMount() {
    this.componentDidUpdate();
  };

  SearchBar.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.actionRef && this.actionRef.current) {
      var action = this.props.action;

      action = _extends({}, actionDefault[action.type], action);
      var focus = this.state.focus;

      if (!action.keepShow && !focus) {
        var $actionBtn = this.actionRef.current;
        var actionStyle = window.getComputedStyle($actionBtn);
        var actionSize = $actionBtn.offsetWidth + parseInt(actionStyle.marginLeft, 10);
        $actionBtn.style = 'margin-right: ' + -1 * actionSize + 'px';
        this.actionSize = actionSize;
      }
    }
  };

  SearchBar.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.onBlurTimeout) {
      clearNextFrameAction(this.onBlurTimeout);
      this.onBlurTimeout = null;
    }
  };

  SearchBar.prototype.render = function render(_ref, _ref2) {
    var _cx,
        _this2 = this;

    var value = _ref2.value,
        focus = _ref2.focus;

    var prefix = _ref.prefix,
        className = _ref.className,
        placeholder = _ref.placeholder,
        maxLength = _ref.maxLength,
        action = _ref.action,
        leftIcon = _ref.leftIcon,
        restProps = _objectWithoutProperties(_ref, ['prefix', 'className', 'placeholder', 'maxLength', 'action', 'leftIcon']);

    var isBtnHide = false;
    if (action) {
      action = _extends({}, actionDefault[action.type], action);
      isBtnHide = !action.keepShow && !focus;
    }
    return Object(preact_min["h"])(
      'form',
      _extends({
        className: classnames_default()(prefix, className),
        onSubmit: this.onConfirm
      }, restProps),
      Object(preact_min["h"])(
        'div',
        { className: prefix + '-input' },
        Object(preact_min["h"])(icon["a" /* default */], { icon: leftIcon }),
        Object(preact_min["h"])('input', {
          type: 'search',
          placeholder: placeholder,
          value: value,
          maxLength: maxLength,
          onChange: this.onChange,
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          ref: this.inputRef
        })
      ),
      !!action && Object(preact_min["h"])(
        'div',
        {
          className: classnames_default()(prefix + '-action', (_cx = {}, _cx[prefix + '-action__hide'] = isBtnHide, _cx)),
          onClick: function onClick() {
            if (action.type === 'cancel') {
              _this2.onCancel();
            } else if (action.type === 'confirm') {
              _this2.onConfirm();
            }
            action.onClick();
          },
          style: { marginRight: isBtnHide ? this.actionSize * -1 + 'px' : 0 },
          ref: this.actionRef
        },
        action.text
      )
    );
  };

  return SearchBar;
}(preact_min["Component"]), _class.defaultProps = {
  prefix: 'caf-search',
  align: 'center',
  leftIcon: 'search'
}, search_bar__initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.actionSize = 0;

  this.clear = function () {
    if (!('value' in _this3.props)) {
      _this3.setState({ value: '' });
    }
    if (_this3.props.onChange) {
      _this3.props.onChange('');
    }
  };

  this.onChange = function (e) {
    var value = e.target.value;
    if (!('value' in _this3.props)) {
      _this3.setState({ value: value });
    }
    if (_this3.props.onChange) {
      _this3.props.onChange(value);
    }
  };

  this.onConfirm = function (e) {
    e && e.preventDefault();
    var val = '';
    if (_this3.inputRef && _this3.inputRef.current) {
      val = _this3.inputRef.current.value;
    } else {
      val = _this3.state.value;
    }
    _this3.props.onConfirm && _this3.props.onConfirm(val);
  };

  this.onCancel = function () {
    if (_this3.props.onCancel) {
      _this3.props.onCancel(_this3.state.value || '');
    } else {
      _this3.clear();
    }
  };

  this.onFocus = function () {
    _this3.setState({
      focus: true
    });
  };

  this.onBlur = function () {
    _this3.onBlurTimeout = onNextFrame(function () {
      if (!_this3.blurFromOnClear) {
        if (document.activeElement !== _this3.inputRef) {
          _this3.setState({
            focus: false
          });
        }
      }
      _this3.blurFromOnClear = false;
    });
  };

  this.focus = function () {
    if (_this3.inputRef && _this3.inputRef.current) {
      _this3.inputRef.current.focus();
    }
  };

  this.inputRef = Object(preact_min["createRef"])();
  this.actionRef = Object(preact_min["createRef"])();
  this.formRef = Object(preact_min["createRef"])();
}, _temp);

/* harmony default export */ var search_bar = (search_bar_SearchBar);
// CONCATENATED MODULE: ./pages/components/search-bar/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return search_bar_SearchBarComp; });



function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function search_bar__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function search_bar__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function search_bar__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var _ref3 = Object(preact_min["h"])(
  'div',
  null,
  Object(preact_min["h"])(
    'p',
    { 'class': 'caf-demo-title' },
    '\u9ED8\u8BA4\u7528\u6CD5'
  ),
  Object(preact_min["h"])(search_bar, { placeholder: '\u8BF7\u8F93\u5165\u5173\u952E\u8BCD' })
);

var _ref4 = Object(preact_min["h"])(
  'p',
  { 'class': 'caf-demo-title' },
  '\u81EA\u5B9A\u4E49\u503C'
);

var _ref5 = Object(preact_min["h"])(
  'p',
  { 'class': 'caf-demo-title' },
  '\u8BBE\u7F6E\u56DE\u8C03'
);

var _ref6 = Object(preact_min["h"])(
  'p',
  { 'class': 'caf-demo-title' },
  '\u5B9A\u4E49\u53F3\u4FA7\u6309\u94AE'
);

var search_bar_SearchBarComp = function (_Component) {
  search_bar__inherits(SearchBarComp, _Component);

  function SearchBarComp() {
    var _temp, _this, _ret;

    search_bar__classCallCheck(this, SearchBarComp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = search_bar__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      val: '关键词'
    }, _this.focusInput = function () {
      _this.inpRef.focus();
    }, _temp), search_bar__possibleConstructorReturn(_this, _ret);
  }

  SearchBarComp.prototype.render = function render(_ref, _ref2) {
    var _this2 = this;

    var val = _ref2.val;

    _objectDestructuringEmpty(_ref);

    return Object(preact_min["h"])(
      'div',
      null,
      _ref3,
      Object(preact_min["h"])(
        'div',
        null,
        _ref4,
        Object(preact_min["h"])(search_bar, {
          placeholder: '\u8BF7\u8F93\u5165\u5173\u952E\u8BCD',
          value: val,
          onChange: function onChange(val) {
            return _this2.setState({ val: val });
          }
        })
      ),
      Object(preact_min["h"])(
        'div',
        null,
        _ref5,
        Object(preact_min["h"])(search_bar, {
          placeholder: '\u8BF7\u8F93\u5165\u5173\u952E\u8BCD',
          onConfirm: function onConfirm(val) {
            return alert('\u786E\u8BA4\uFF0C\u8F93\u5165\u503C\u4E3A' + val);
          },
          onChange: function onChange(val) {
            return console.log(val);
          }
        })
      ),
      Object(preact_min["h"])(
        'div',
        null,
        _ref6,
        Object(preact_min["h"])(search_bar, {
          placeholder: '\u8BF7\u8F93\u5165\u5173\u952E\u8BCD',
          onConfirm: function onConfirm() {
            return alert('确认');
          },
          onCancel: function onCancel() {
            return alert('取消');
          },
          action: {
            type: 'cancel',
            onClick: function onClick() {
              console.log('action cancel');
            }
          }
        }),
        Object(preact_min["h"])(search_bar, {
          placeholder: '\u8BF7\u8F93\u5165\u5173\u952E\u8BCD',
          onConfirm: function onConfirm(val) {
            return alert(val);
          },
          onCancel: function onCancel() {
            return alert('取消');
          },
          action: {
            type: 'confirm',
            onClick: function onClick() {
              console.log('action confirm');
            }
          }
        }),
        Object(preact_min["h"])(search_bar, {
          placeholder: '\u8BF7\u8F93\u5165\u5173\u952E\u8BCD',
          onConfirm: function onConfirm() {
            return alert('确认');
          },
          onCancel: function onCancel() {
            return alert('取消');
          },
          action: {
            type: 'custom',
            text: '试试手气',
            keepShow: false,
            onClick: function onClick() {
              alert('试试手气');
            }
          }
        })
      ),
      Object(preact_min["h"])(
        'div',
        null,
        Object(preact_min["h"])(
          'p',
          { 'class': 'caf-demo-title', onClick: this.focusInput },
          '\u70B9\u51FB\u805A\u7126'
        ),
        Object(preact_min["h"])(search_bar, { placeholder: '\u8BF7\u8F93\u5165\u5173\u952E\u8BCD', ref: function ref(c) {
            return _this2.inpRef = c;
          } })
      )
    );
  };

  return SearchBarComp;
}(preact_min["Component"]);



/***/ })

};;
//# sourceMappingURL=16.chunk.bd450.js.map