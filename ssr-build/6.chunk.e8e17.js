exports.ids = [6];
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

/***/ "qV2X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CellComp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cafune_components_switch__ = __webpack_require__("0xix");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cafune_components_cell__ = __webpack_require__("z3JL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_preact__);




function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CellGroup = __WEBPACK_IMPORTED_MODULE_1_cafune_components_cell__["a" /* default */].CellGroup;




var _ref3 = Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_cafune_components_cell__["a" /* default */], { title: '\u57FA\u7840\u7528\u6CD5' });

var _ref4 = Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_cafune_components_cell__["a" /* default */], { title: '\u4E0D\u5E26\u8FB9\u6846', border: false });

var _ref5 = Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_cafune_components_cell__["a" /* default */], { title: '\u5E26icon', icon: 'check' });

var _ref6 = Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_cafune_components_cell__["a" /* default */], {
  title: '\u81EA\u5B9A\u4E49',
  icon: 'https://image.uisdc.com/wp-content/uploads/2018/07/uiii-ps-icon.png',
  iconSize: '30px'
});

var _ref7 = Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_cafune_components_cell__["a" /* default */], { title: '\u5E26\u94FE\u63A5', icon: 'img', url: '/' });

var _ref8 = Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_cafune_components_cell__["a" /* default */], { title: '\u5E26\u63CF\u8FF0\u4FE1\u606F', icon: 'search', label: '\u6B64\u5904\u4E3A\u63CF\u8FF0\u4FE1\u606F' });

var _ref9 = Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_cafune_components_cell__["a" /* default */], {
  title: '\u5E26\u53F3\u4FA7\u5185\u5BB9',
  icon: 'search',
  label: '\u6B64\u5904\u4E3A\u63CF\u8FF0\u4FE1\u606F',
  value: '\u53F3\u4FA7\u5185\u5BB9'
});

var _ref10 = Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_cafune_components_cell__["a" /* default */], {
  title: '\u5E26\u53F3\u4FA7icon',
  icon: 'search',
  label: '\u6B64\u5904\u4E3A\u63CF\u8FF0\u4FE1\u606F',
  value: '\u53F3\u4FA7\u5185\u5BB9',
  rightIcon: 'more'
});

var _ref11 = Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_cafune_components_cell__["a" /* default */], {
  title: '\u5782\u76F4\u5C45\u4E2D',
  icon: 'search',
  label: '\u6B64\u5904\u4E3A\u63CF\u8FF0\u4FE1\u606F',
  value: '\u53F3\u4FA7\u5185\u5BB9',
  rightIcon: 'more',
  middle: true
});

var _ref12 = Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(
  CellGroup,
  { title: '\u5355\u5143\u683C\u5206\u7EC4' },
  Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_cafune_components_cell__["a" /* default */], { value: '\u7EAF\u5185\u5BB9' }),
  Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_cafune_components_cell__["a" /* default */], { title: '\u5355\u5143\u683C2' })
);

var _ref13 = Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(
  CellGroup,
  { title: '\u5355\u5143\u683C\u5206\u7EC4(\u4E0D\u5E26\u8FB9\u6846)', border: false },
  Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_cafune_components_cell__["a" /* default */], { title: '\u5355\u5143\u683C' }),
  Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_cafune_components_cell__["a" /* default */], { title: '\u5355\u5143\u683C2' })
);

var CellComp = function (_Component) {
  _inherits(CellComp, _Component);

  function CellComp() {
    var _temp, _this, _ret;

    _classCallCheck(this, CellComp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      active: true
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CellComp.prototype.render = function render(_ref, _ref2) {
    var _this2 = this;

    var active = _ref2.active;

    _objectDestructuringEmpty(_ref);

    return Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(
      'div',
      null,
      Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(
        'div',
        { 'class': '' },
        _ref3,
        _ref4,
        _ref5,
        Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_cafune_components_cell__["a" /* default */], {
          title: '\u5E26\u53F3\u6ED1',
          swipeList: [{
            name: '标为未读',
            clickHandler: function clickHandler() {
              console.log('标为未读');
            },

            style: {
              backgroundColor: '#e9e7ef'
            }
          }, {
            name: '删除',
            clickHandler: function clickHandler() {
              console.log('删除');
            },

            style: {
              backgroundColor: '#c93756'
            }
          }]
        }),
        _ref6,
        _ref7,
        _ref8,
        _ref9,
        _ref10,
        _ref11,
        Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_cafune_components_cell__["a" /* default */], {
          title: '\u53F3\u4FA7\u4F7F\u7528\u7EC4\u4EF6',
          icon: 'search',
          label: '\u6B64\u5904\u4E3A\u63CF\u8FF0\u4FE1\u606F',
          value: Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(__WEBPACK_IMPORTED_MODULE_0_cafune_components_switch__["a" /* default */], {
            isActived: active,
            onClick: function onClick() {
              _this2.setState({
                active: !_this2.state.active
              });
            }
          }),
          middle: true
        }),
        _ref12,
        _ref13
      )
    );
  };

  return CellComp;
}(__WEBPACK_IMPORTED_MODULE_2_preact__["Component"]);



/***/ })

};;
//# sourceMappingURL=6.chunk.e8e17.js.map