exports.ids = [14];
exports.modules = {

/***/ "aBhO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../components/cell/index.jsx + 1 modules
var cell = __webpack_require__("z3JL");

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("EBst");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("5D9O");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("9qb7");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ../components/stepper/index.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * 步进器
 */
var stepper_Stepper = (_temp2 = _class = function (_Component) {
  _inherits(Stepper, _Component);

  function Stepper() {
    var _temp, _this, _ret;

    _classCallCheck(this, Stepper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.minus = function () {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          step = _this$props.step,
          min = _this$props.min,
          disabled = _this$props.disabled;

      if (value != min && !disabled) {
        var result = value - step <= min ? min : value - step;
        onChange(result, -1);
      }
    }, _this.plus = function () {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          value = _this$props2.value,
          step = _this$props2.step,
          max = _this$props2.max,
          disabled = _this$props2.disabled;

      if (value != max && !disabled) {
        var result = value + step >= max ? max : value + step;
        onChange(result, -1);
      }
    }, _this.onInputChange = function (e) {
      var _this$props3 = _this.props,
          value = _this$props3.value,
          min = _this$props3.min,
          max = _this$props3.max,
          integerOnly = _this$props3.integerOnly,
          onChange = _this$props3.onChange;

      var $target = e.target;
      var tarVal = $target.value;
      var final = void 0;
      if (tarVal != +tarVal) {
        final = value;
      } else {
        if (+tarVal > max) final = max;
        if (+tarVal < min) final = min;
        if (integerOnly && +tarVal % 1 !== 0) final = Math.round(tarVal);
      }
      if (final && final !== tarVal) {
        console.log(final);
        $target.value = final;
      }
      onChange($target.value, 0);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Stepper.prototype.render = function render(_ref) {
    var _cx, _cx2, _cx3;

    var prefix = _ref.prefix,
        className = _ref.className,
        disabled = _ref.disabled,
        step = _ref.step,
        min = _ref.min,
        max = _ref.max,
        value = _ref.value,
        readOnly = _ref.readOnly,
        restProps = _objectWithoutProperties(_ref, ['prefix', 'className', 'disabled', 'step', 'min', 'max', 'value', 'readOnly']);

    var isReachMin = value - step < min || value === min;
    var isReachMax = value + step > max || value === max;
    return Object(preact_min["h"])(
      'div',
      _extends({ className: classnames_default()(prefix, className) }, restProps),
      Object(preact_min["h"])('span', {
        className: classnames_default()(prefix + '-btn', prefix + '-btn__minus', (_cx = {}, _cx[prefix + '-btn__disabled'] = disabled || isReachMin, _cx)),
        onClick: this.minus
      }),
      Object(preact_min["h"])(
        'div',
        {
          className: classnames_default()(prefix + '-input', (_cx2 = {}, _cx2[prefix + '-input__disabled'] = disabled, _cx2))
        },
        readOnly ? Object(preact_min["h"])(
          'p',
          { className: prefix + '-input-content' },
          value
        ) : Object(preact_min["h"])('input', {
          'aria-valuemin': min,
          'aria-valuemax': max,
          disabled: disabled,
          'aria-valuenow': value,
          value: value,
          onKeyUp: this.onInputChange
        })
      ),
      Object(preact_min["h"])('span', {
        className: classnames_default()(prefix + '-btn', prefix + '-btn__plus', (_cx3 = {}, _cx3[prefix + '-btn__disabled'] = disabled || isReachMax, _cx3)),
        onClick: this.plus
      })
    );
  };

  return Stepper;
}(preact_min["Component"]), _class.defaultProps = {
  prefix: 'caf-stepper',
  step: 1,
  disabled: false,
  integerOnly: false,
  readOnly: false,
  min: 0,
  max: Infinity
}, _temp2);

/* harmony default export */ var stepper = (stepper_Stepper);
// CONCATENATED MODULE: ./pages/components/stepper/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stepper_StepperComp; });




function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function stepper__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function stepper__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function stepper__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var stepper_StepperComp = function (_Component) {
  stepper__inherits(StepperComp, _Component);

  function StepperComp() {
    var _temp, _this, _ret;

    stepper__classCallCheck(this, StepperComp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = stepper__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      val1: 1,
      val2: 1,
      val3: 4,
      val4: 1
    }, _this.changeHandler = function (key) {
      return function (val) {
        var _this$setState;

        _this.setState((_this$setState = {}, _this$setState[key] = val, _this$setState));
      };
    }, _temp), stepper__possibleConstructorReturn(_this, _ret);
  }

  StepperComp.prototype.render = function render(_ref, _ref2) {
    var val1 = _ref2.val1,
        val2 = _ref2.val2,
        val3 = _ref2.val3,
        val4 = _ref2.val4;

    _objectDestructuringEmpty(_ref);

    return Object(preact_min["h"])(
      'div',
      null,
      Object(preact_min["h"])(cell["a" /* default */], {
        title: '\u57FA\u7840\u7528\u6CD5',
        value: Object(preact_min["h"])(stepper, { value: val1, onChange: this.changeHandler('val1') }),
        middle: true
      }),
      Object(preact_min["h"])(cell["a" /* default */], {
        title: '\u81EA\u5B9A\u4E49\u6B65\u8FDB',
        value: Object(preact_min["h"])(stepper, {
          value: val2,
          step: 3,
          onChange: this.changeHandler('val2')
        }),
        middle: true
      }),
      Object(preact_min["h"])(cell["a" /* default */], {
        title: '\u7981\u7528\u72B6\u6001',
        value: Object(preact_min["h"])(stepper, {
          value: val2,
          step: 3,
          disabled: true,
          onChange: this.changeHandler('val2')
        }),
        middle: true
      }),
      Object(preact_min["h"])(cell["a" /* default */], {
        title: '\u9650\u5B9A\u8303\u56F4(2-8)',
        value: Object(preact_min["h"])(stepper, {
          value: val3,
          min: 2,
          max: 8,
          onChange: this.changeHandler('val3')
        }),
        middle: true
      }),
      Object(preact_min["h"])(cell["a" /* default */], {
        title: '\u9650\u5B9A\u6574\u6570',
        value: Object(preact_min["h"])(stepper, {
          value: val4,
          min: -Infinity,
          integerOnly: true,
          onChange: this.changeHandler('val4')
        }),
        middle: true
      }),
      Object(preact_min["h"])(cell["a" /* default */], {
        title: '\u53EA\u8BFB',
        value: Object(preact_min["h"])(stepper, {
          value: val4,
          readOnly: true,
          onChange: this.changeHandler('val4')
        }),
        middle: true
      })
    );
  };

  return StepperComp;
}(preact_min["Component"]);



/***/ })

};;
//# sourceMappingURL=14.chunk.645b7.js.map