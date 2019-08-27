exports.ids = [13];
exports.modules = {

/***/ "7f35":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../components/button/index.jsx
var components_button = __webpack_require__("zcpj");

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

// CONCATENATED MODULE: ../components/steps/step.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var step__ref = Object(preact_min["h"])(icon["a" /* default */], { icon: 'check' });

var step__ref2 = Object(preact_min["h"])(icon["a" /* default */], { icon: 'wrong' });

var step_defaultIconMap = function defaultIconMap(prefix, status, isDecimal, ind) {
  if (isDecimal) {
    return Object(preact_min["h"])(
      'span',
      { className: prefix + '-icon-decimal' },
      ind
    );
  } else {
    if (status === 'finish') {
      return Object(preact_min["h"])(
        'span',
        { className: prefix + '-icon-container' },
        step__ref
      );
    }
    if (status === 'error') {
      return Object(preact_min["h"])(
        'span',
        { className: prefix + '-icon-container' },
        step__ref2
      );
    }
    return Object(preact_min["h"])('i', { className: prefix + '-icon-circle' });
  }
};
/**
 * 步骤条步骤单元
 */
var step_Step = (_temp = _class = function (_Component) {
  _inherits(Step, _Component);

  function Step() {
    _classCallCheck(this, Step);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Step.prototype.renderIcon = function renderIcon() {
    var _props = this.props,
        prefix = _props.prefix,
        icons = _props.icons,
        ind = _props.ind,
        status = _props.status;
    var isDecimalInd = this.context.isDecimalInd;

    var iconResult = void 0;
    if (icons && icons[status]) {
      iconResult = typeof icons[status] === 'string' ? Object(preact_min["h"])(icon["a" /* default */], { icon: icons[status] }) : icons[status];
    } else {
      iconResult = step_defaultIconMap(prefix, status, isDecimalInd, ind);
    }
    return iconResult;
  };

  Step.prototype.render = function render(_ref3) {
    var prefix = _ref3.prefix,
        className = _ref3.className,
        title = _ref3.title,
        desc = _ref3.desc,
        status = _ref3.status,
        restProps = _objectWithoutProperties(_ref3, ['prefix', 'className', 'title', 'desc', 'status']);

    return Object(preact_min["h"])(
      'div',
      _extends({ className: classnames_default()(prefix, className, prefix + '__' + status) }, restProps),
      Object(preact_min["h"])('div', { className: prefix + '-tail' }),
      Object(preact_min["h"])(
        'div',
        { className: prefix + '-icon' },
        this.renderIcon()
      ),
      Object(preact_min["h"])(
        'div',
        { className: prefix + '-content' },
        !!title && Object(preact_min["h"])(
          'div',
          { className: prefix + '-content-title' },
          title
        ),
        !!desc && Object(preact_min["h"])(
          'div',
          { className: prefix + '-content-desc' },
          desc
        )
      )
    );
  };

  return Step;
}(preact_min["Component"]), _class.displayName = 'Step', _class.defaultProps = {
  prefix: 'caf-step',
  status: 'pend'
}, _temp);

/* harmony default export */ var steps_step = (step_Step);
// CONCATENATED MODULE: ../components/steps/index.jsx
var steps__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var steps__class, steps__temp;



function steps__objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function steps__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function steps__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function steps__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





function checkIfItem(el) {
  return el.nodeName.displayName === 'Step';
}
/**
 * 步骤条
 */
var steps_Steps = (steps__temp = steps__class = function (_Component) {
  steps__inherits(Steps, _Component);

  function Steps() {
    steps__classCallCheck(this, Steps);

    return steps__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Steps.prototype.getChildContext = function getChildContext() {
    return {
      isDecimalInd: this.props.isDecimalInd
    };
  };

  Steps.prototype.renderSteps = function renderSteps() {
    var _props = this.props,
        children = _props.children,
        step = _props.step,
        status = _props.status,
        icons = _props.icons;

    var stepsArr = [];
    children.forEach(function (Item, ind) {
      if (Item && checkIfItem(Item)) {
        var newProps = { ind: ind };
        var props = Item.attributes;
        if (!props.status) {
          if (step === ind) {
            newProps.status = status;
          } else if (ind < step) {
            newProps.status = 'finish';
          } else {
            newProps.status = 'pend';
          }
        }
        if (props.icons && icons && Object.keys(icons).length) {
          newProps.icons = steps__extends({}, icons, props.icons);
        }
        stepsArr.push(Object(preact_min["cloneElement"])(Item, newProps));
      }
    });
    return stepsArr;
  };

  Steps.prototype.render = function render(_ref) {
    var prefix = _ref.prefix,
        className = _ref.className,
        direction = _ref.direction,
        restProps = steps__objectWithoutProperties(_ref, ['prefix', 'className', 'direction']);

    return Object(preact_min["h"])(
      'div',
      steps__extends({ className: classnames_default()(prefix, className, prefix + '__' + direction) }, restProps),
      this.renderSteps()
    );
  };

  return Steps;
}(preact_min["Component"]), steps__class.Step = steps_step, steps__class.defaultProps = {
  prefix: 'caf-steps',
  step: 0,
  status: 'process',
  direction: 'horizontal'
}, steps__temp);

/* harmony default export */ var steps = (steps_Steps);
// CONCATENATED MODULE: ./pages/components/steps/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return steps_StepsComp; });



var components_steps__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function components_steps__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function components_steps__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function components_steps__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var steps_Step = steps.Step;



var steps_stepsArr = [{ title: 'Step 1', desc: 'this is the step 1' }, {
  title: 'Step 2',
  icons: { pend: 'search', finish: 'notice' },
  status: 'error'
}, {
  title: 'Step 3',
  icon: { error: 'search', process: 'notice' },
  desc: 'now is the step 3'
}, { title: 'Step 4', desc: 'this is the step 4' }, { title: 'Step 5' }];

var steps__ref3 = Object(preact_min["h"])(
  'p',
  { 'class': 'caf-demo-title' },
  '\u9ED8\u8BA4\u7528\u6CD5'
);

var _ref4 = Object(preact_min["h"])(
  'p',
  { 'class': 'caf-demo-title' },
  '\u6570\u5B57\u8FDB\u5EA6'
);

var _ref5 = Object(preact_min["h"])(
  'p',
  { 'class': 'caf-demo-title' },
  '\u5782\u76F4\u65B9\u5411'
);

var steps_StepsComp = function (_Component) {
  components_steps__inherits(StepsComp, _Component);

  function StepsComp() {
    var _temp, _this, _ret;

    components_steps__classCallCheck(this, StepsComp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = components_steps__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      current: 3
    }, _this.nextStep = function () {
      var current = _this.state.current;

      _this.setState({
        current: current === steps_stepsArr.length ? 0 : current + 1
      });
    }, _temp), components_steps__possibleConstructorReturn(_this, _ret);
  }

  StepsComp.prototype.renderSteps = function renderSteps() {
    return steps_stepsArr.map(function (item, ind) {
      return Object(preact_min["h"])(steps_Step, components_steps__extends({}, item, { key: ind }));
    });
  };

  StepsComp.prototype.render = function render(_ref, _ref2) {
    var current = _ref2.current;

    _objectDestructuringEmpty(_ref);

    return Object(preact_min["h"])(
      'div',
      { 'class': 'caf-demo-block' },
      Object(preact_min["h"])(
        components_button["a" /* default */],
        { onClick: this.nextStep },
        '\u4E0B\u4E00\u6B65'
      ),
      steps__ref3,
      Object(preact_min["h"])(
        steps,
        { step: current },
        this.renderSteps()
      ),
      _ref4,
      Object(preact_min["h"])(
        steps,
        { step: current, isDecimalInd: true },
        this.renderSteps()
      ),
      _ref5,
      Object(preact_min["h"])(
        steps,
        { step: current, direction: 'vertical' },
        this.renderSteps()
      )
    );
  };

  return StepsComp;
}(preact_min["Component"]);



/***/ })

};;
//# sourceMappingURL=13.chunk.71481.js.map