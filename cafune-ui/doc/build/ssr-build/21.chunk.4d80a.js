exports.ids = [21];
exports.modules = {

/***/ "XXxW":
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

// CONCATENATED MODULE: ../components/checkbox/group.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * 复选框
 */
var group_CheckboxGroup = (_temp = _class = function (_Component) {
  _inherits(CheckboxGroup, _Component);

  function CheckboxGroup(props) {
    _classCallCheck(this, CheckboxGroup);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.seletedData = [];

    _this.canCheck = function (val) {
      var maxSelect = _this.props.maxSelect;
      var seletedData = _this.seletedData;

      if (maxSelect > 0) {
        if (seletedData.indexOf(val) === -1 && seletedData.length === maxSelect) {
          return false;
        }
      }
      return true;
    };

    _this.onChange = function (val) {
      var seletedData = _this.seletedData;

      var valInd = seletedData.indexOf(val);
      if (valInd === -1) {
        seletedData.push(val);
      } else {
        seletedData.splice(valInd, 1);
      }
      _this.seletedData = seletedData;
      _this.props.handleChange && _this.props.handleChange(seletedData);
    };

    _this.seletedData = props.model;
    return _this;
  }

  CheckboxGroup.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
        model = _props.model,
        disabled = _props.disabled;

    return {
      model: model,
      allDisabled: disabled,
      groupChange: this.onChange,
      canCheck: this.canCheck
    };
  };

  CheckboxGroup.prototype.render = function render(_ref) {
    var prefix = _ref.prefix,
        children = _ref.children,
        className = _ref.className,
        restProps = _objectWithoutProperties(_ref, ['prefix', 'children', 'className']);

    return Object(preact_min["h"])(
      'div',
      _extends({ className: classnames_default()(prefix, className) }, restProps),
      children
    );
  };

  return CheckboxGroup;
}(preact_min["Component"]), _class.defaultProps = {
  prefix: 'caf-checkbox-group',
  disabled: false,
  maxSelect: 0
}, _temp);

/* harmony default export */ var group = (group_CheckboxGroup);
// EXTERNAL MODULE: ../components/icon/index.jsx
var components_icon = __webpack_require__("zHj6");

// CONCATENATED MODULE: ../components/checkbox/index.jsx
var checkbox__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var checkbox__class, checkbox__temp;



function checkbox__objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function checkbox__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function checkbox__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function checkbox__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








function isImage(icon) {
  return icon && icon.indexOf('/') !== -1;
}

/**
 * 复选框
 */

var _ref5 = Object(preact_min["h"])(components_icon["a" /* default */], { icon: 'check' });

var checkbox_Checkbox = (checkbox__temp = checkbox__class = function (_Component) {
  checkbox__inherits(Checkbox, _Component);

  function Checkbox(props) {
    checkbox__classCallCheck(this, Checkbox);

    var _this = checkbox__possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      checked: false
    };

    _this.onClick = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          disabled = _this$props.disabled,
          handleChange = _this$props.handleChange;
      var _this$context = _this.context,
          groupChange = _this$context.groupChange,
          allDisabled = _this$context.allDisabled,
          canCheck = _this$context.canCheck;

      var isCancheck = canCheck ? canCheck(value) : true;
      var isDisabled = disabled || allDisabled || !isCancheck;
      if (!isDisabled) {
        _this.setState({
          checked: !_this.state.checked
        });
        // 框组优先级高于单个，避免逻辑冲突产生问题
        if (groupChange) {
          groupChange(value);
        } else if (handleChange) {
          handleChange(value);
        }
      }
    };

    return _this;
  }

  Checkbox.prototype.componentDidMount = function componentDidMount() {
    var _props = this.props,
        value = _props.value,
        _props$checked = _props.checked,
        checked = _props$checked === undefined ? false : _props$checked;

    var _ref = this.context || {},
        _ref$model = _ref.model,
        model = _ref$model === undefined ? [] : _ref$model;

    var isChecked = checked || model.indexOf(value) !== -1;

    this.setState({
      checked: isChecked
    });
  };

  Checkbox.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps && !this.context.model) {
      this.setState({
        checked: nextProps.checked
      });
    }
  };

  Checkbox.prototype.render = function render(_ref2, _ref3) {
    var _cx, _cx2;

    var checked = _ref3.checked;

    var _ref4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref4$allDisabled = _ref4.allDisabled,
        allDisabled = _ref4$allDisabled === undefined ? false : _ref4$allDisabled;

    var prefix = _ref2.prefix,
        value = _ref2.value,
        id = _ref2.id,
        className = _ref2.className,
        icons = _ref2.icons,
        children = _ref2.children,
        checkedColor = _ref2.checkedColor,
        disabled = _ref2.disabled,
        restProps = checkbox__objectWithoutProperties(_ref2, ['prefix', 'value', 'id', 'className', 'icons', 'children', 'checkedColor', 'disabled']);

    var innerStyle = {};
    if (checkedColor && checked) {
      innerStyle.backgroundColor = checkedColor;
    }
    var isDisabled = disabled || allDisabled;
    var icon = _ref5;
    var isCustomIcon = false;
    if (icons) {
      if ('actived' in icons && checked) {
        isCustomIcon = isImage(icons.actived);
        icon = Object(preact_min["h"])(components_icon["a" /* default */], { icon: icons.actived, size: isCustomIcon ? '14px' : '12px' });
      }
      if ('inactive' in icons && !checked) {
        isCustomIcon = isImage(icons.inactive);
        icon = Object(preact_min["h"])(components_icon["a" /* default */], { icon: icons.inactive, size: isCustomIcon ? '14px' : '12px' });
      }
    }
    return Object(preact_min["h"])(
      'div',
      checkbox__extends({
        className: classnames_default()(prefix, className, (_cx = {}, _cx[prefix + '__checked'] = checked, _cx[prefix + '__disabled'] = isDisabled, _cx)),
        onClick: this.onClick
      }, restProps),
      Object(preact_min["h"])(
        'div',
        { className: prefix + '-input' },
        Object(preact_min["h"])('input', {
          type: 'checkbox',
          id: id,
          checked: checked,
          disabled: disabled,
          value: value
        }),
        Object(preact_min["h"])(
          'span',
          {
            className: classnames_default()(prefix + '-input-inner', (_cx2 = {}, _cx2[prefix + '-input-inner__custom'] = isCustomIcon, _cx2)),
            style: innerStyle
          },
          icon
        )
      ),
      Object(preact_min["h"])(
        'div',
        { className: prefix + '-label' },
        children
      )
    );
  };

  return Checkbox;
}(preact_min["Component"]), checkbox__class.CheckboxGroup = group, checkbox__class.defaultProps = {
  prefix: 'caf-checkbox',
  checked: false,
  disabled: false
}, checkbox__temp);

/* harmony default export */ var components_checkbox = (checkbox_Checkbox);
// EXTERNAL MODULE: ../components/cell/index.jsx + 1 modules
var cell = __webpack_require__("z3JL");

// CONCATENATED MODULE: ./pages/components/checkbox/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkbox_CheckboxComp; });



var components_checkbox__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function components_checkbox__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function components_checkbox__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function components_checkbox__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CellGroup = cell["a" /* default */].CellGroup;
var checkbox_CheckboxGroup = components_checkbox.CheckboxGroup;




var checkbox__ref3 = Object(preact_min["h"])(
  'p',
  { 'class': 'caf-demo-title' },
  '\u5355\u72EC\u4F7F\u7528'
);

var checkbox__ref4 = Object(preact_min["h"])(
  'p',
  { 'class': 'caf-demo-title' },
  '\u4E0ECell \u7EC4\u4EF6\u4E00\u8D77\u4F7F\u7528'
);

var checkbox_CheckboxComp = function (_Component) {
  components_checkbox__inherits(CheckboxComp, _Component);

  function CheckboxComp() {
    var _temp, _this, _ret;

    components_checkbox__classCallCheck(this, CheckboxComp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = components_checkbox__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      check: 'hi',
      checks: ['hi', 'hello'],
      checkList: [{
        value: 'hi',
        text: '自定义颜色',
        checkedColor: '#369'
      }, {
        value: 'holla',
        text: '开启禁用',
        disabled: true
      }, {
        value: 'bonjour',
        text: '自定义激活图标',
        icons: {
          actived: 'more'
        }
      }, {
        value: 'hello',
        text: '自定义激活及未激活图标',
        icons: {
          inactive: 'https://image.flaticon.com/icons/png/128/2026/2026450.png',
          actived: 'https://image.flaticon.com/icons/png/128/2026/2026462.png'
        }
      }]
    }, _temp), components_checkbox__possibleConstructorReturn(_this, _ret);
  }

  CheckboxComp.prototype.render = function render(_ref, _ref2) {
    var check = _ref2.check,
        checks = _ref2.checks,
        checkList = _ref2.checkList;

    _objectDestructuringEmpty(_ref);

    return Object(preact_min["h"])(
      'div',
      null,
      checkbox__ref3,
      Object(preact_min["h"])(
        'div',
        { 'class': 'caf-demo-block' },
        checkList.map(function (item) {
          return Object(preact_min["h"])(
            components_checkbox,
            components_checkbox__extends({
              checked: check === item.value
            }, item, {
              handleChange: function handleChange(val) {
                console.log(val);
              },
              key: 's-' + item.value
            }),
            item.text
          );
        })
      ),
      checkbox__ref4,
      checkList.map(function (item) {
        return Object(preact_min["h"])(cell["a" /* default */], {
          title: 'test',
          value: Object(preact_min["h"])(
            components_checkbox,
            components_checkbox__extends({
              checked: check === item.value
            }, item, {
              handleChange: function handleChange(val) {
                console.log(val);
              }
            }),
            item.text
          ),
          key: 's-c-' + item.id
        });
      }),
      Object(preact_min["h"])(
        CellGroup,
        { title: '\u590D\u9009\u6846\u7EC4' },
        Object(preact_min["h"])(
          checkbox_CheckboxGroup,
          { model: checks, handleChange: function handleChange(val) {
              return console.log(val);
            } },
          checkList.map(function (item) {
            return Object(preact_min["h"])(cell["a" /* default */], {
              title: 'test',
              value: Object(preact_min["h"])(
                components_checkbox,
                item,
                item.text
              ),
              key: 'g-' + item.value
            });
          })
        )
      ),
      Object(preact_min["h"])(
        CellGroup,
        { title: '\u590D\u9009\u6846\u7EC4\uFF08\u6700\u5927\u53EF\u9009\u4E3A2\uFF09' },
        Object(preact_min["h"])(
          checkbox_CheckboxGroup,
          {
            model: checks,
            handleChange: function handleChange(val) {
              return console.log(val);
            },
            maxSelect: 2
          },
          checkList.map(function (item) {
            return Object(preact_min["h"])(cell["a" /* default */], {
              title: 'test',
              value: Object(preact_min["h"])(
                components_checkbox,
                item,
                item.text
              ),
              key: 'g-' + item.value
            });
          })
        )
      )
    );
  };

  return CheckboxComp;
}(preact_min["Component"]);



/***/ })

};;
//# sourceMappingURL=21.chunk.4d80a.js.map