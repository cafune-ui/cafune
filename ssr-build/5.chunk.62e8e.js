exports.ids = [5];
exports.modules = {

/***/ "0xix":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("5D9O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("9qb7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading__ = __webpack_require__("vf+f");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * 开关
 * @example
 * ```jsx
 * <Switch />
 * ```
 */
var Switch = (_temp2 = _class = function (_Component) {
  _inherits(Switch, _Component);

  function Switch() {
    var _temp, _this, _ret;

    _classCallCheck(this, Switch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.clickHandler = function () {
      var _this$props = _this.props,
          isDisabled = _this$props.isDisabled,
          isLoading = _this$props.isLoading,
          isActived = _this$props.isActived,
          onChange = _this$props.onChange;

      if (!isDisabled && !isLoading) {
        onChange && onChange(!isActived);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Switch.prototype.render = function render(_ref) {
    var _cx;

    var prefix = _ref.prefix,
        className = _ref.className,
        isActived = _ref.isActived,
        isLoading = _ref.isLoading,
        isDisabled = _ref.isDisabled,
        size = _ref.size,
        activedColor = _ref.activedColor,
        inActivedColor = _ref.inActivedColor,
        restProps = _objectWithoutProperties(_ref, ['prefix', 'className', 'isActived', 'isLoading', 'isDisabled', 'size', 'activedColor', 'inActivedColor']);

    var switchStyle = {};
    if (size) switchStyle.fontSize = size;
    var activeColor = isActived ? '#3f77f6' : '#ccc';
    if (activedColor || inActivedColor) {
      activeColor = isActived ? activedColor : inActivedColor;
      switchStyle.backgroundColor = activeColor;
    }

    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      _extends({
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(prefix, className, (_cx = {}, _cx[prefix + '__on'] = isActived, _cx[prefix + '__disabled'] = isDisabled, _cx)),
        style: switchStyle,
        onClick: this.clickHandler
      }, restProps),
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { className: prefix + '-circle' },
        isLoading && Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__loading__["a" /* default */], { size: '16px', color: activeColor })
      )
    );
  };

  return Switch;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]), _class.defaultProps = {
  prefix: 'caf-switch',
  isDisabled: false,
  isLoading: false,
  isActived: false
}, _temp2);

/* harmony default export */ __webpack_exports__["a"] = (Switch);

/***/ }),

/***/ "NI1X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SwitchComp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cafune_components_switch__ = __webpack_require__("0xix");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact__);



function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var _ref3 = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(
  'p',
  null,
  '\u9ED8\u8BA4\u7528\u6CD5'
);

var _ref4 = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(
  'p',
  null,
  '\u7981\u7528\u72B6\u6001'
);

var _ref5 = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(
  'p',
  null,
  '\u81EA\u5B9A\u4E49\u5C3A\u5BF8'
);

var _ref6 = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(
  'p',
  null,
  '\u52A0\u8F7D\u72B6\u6001'
);

var _ref7 = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(
  'p',
  null,
  '\u81EA\u5B9A\u4E49\u989C\u8272'
);

var _ref8 = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(
  'p',
  null,
  '\u5F02\u6B65\u5207\u6362\uFF081\u79D2\u540E\u624D\u5207\u6362\uFF09'
);

var SwitchComp = function (_Component) {
  _inherits(SwitchComp, _Component);

  function SwitchComp() {
    var _temp, _this, _ret;

    _classCallCheck(this, SwitchComp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      isActived1: true,
      isActived2: false
    }, _this.onChange = function (name) {
      var isWait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return function (actives) {
        if (isWait) {
          setTimeout(function () {
            var _this$setState;

            _this.setState((_this$setState = {}, _this$setState[name] = actives, _this$setState));
          }, 1000);
        } else {
          var _this$setState2;

          _this.setState((_this$setState2 = {}, _this$setState2[name] = actives, _this$setState2));
        }
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SwitchComp.prototype.render = function render(_ref, _ref2) {
    var isActived1 = _ref2.isActived1,
        isActived2 = _ref2.isActived2;

    _objectDestructuringEmpty(_ref);

    return Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(
      'div',
      { 'class': '' },
      _ref3,
      Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(__WEBPACK_IMPORTED_MODULE_0_cafune_components_switch__["a" /* default */], { isActived: isActived1, onChange: this.onChange('isActived1') }),
      _ref4,
      Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(__WEBPACK_IMPORTED_MODULE_0_cafune_components_switch__["a" /* default */], {
        isActived: isActived1,
        isDisabled: true,
        onChange: this.onChange('isActived1')
      }),
      _ref5,
      Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(__WEBPACK_IMPORTED_MODULE_0_cafune_components_switch__["a" /* default */], {
        isActived: isActived1,
        size: '20px',
        onChange: this.onChange('isActived1')
      }),
      _ref6,
      Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(__WEBPACK_IMPORTED_MODULE_0_cafune_components_switch__["a" /* default */], {
        isActived: isActived1,
        isLoading: true,
        onChange: this.onChange('isActived1')
      }),
      _ref7,
      Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(__WEBPACK_IMPORTED_MODULE_0_cafune_components_switch__["a" /* default */], {
        isActived: isActived1,
        activedColor: '#2e4e7e',
        inActivedColor: '#bbcdc5',
        onChange: this.onChange('isActived1')
      }),
      _ref8,
      Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(__WEBPACK_IMPORTED_MODULE_0_cafune_components_switch__["a" /* default */], {
        isActived: isActived2,
        onChange: this.onChange('isActived2', true)
      })
    );
  };

  return SwitchComp;
}(__WEBPACK_IMPORTED_MODULE_1_preact__["Component"]);



/***/ })

};;
//# sourceMappingURL=5.chunk.62e8e.js.map