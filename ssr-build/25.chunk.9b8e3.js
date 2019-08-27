exports.ids = [25];
exports.modules = {

/***/ "s2M8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("EBst");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("9qb7");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../util/isomorphic.js
var isomorphic = __webpack_require__("2IOQ");

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("5D9O");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ../components/action-bar/index.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * 动作栏
 * @example
 * ```javascript
 * <ActionBar
 *   descContent="描述文字"
 *   btnContent="按钮文字"
 *   handleClick={ () => console.log('click') }
 * />
 * ```
 */
var action_bar_ActionBar = (_temp = _class = function (_Component) {
  _inherits(ActionBar, _Component);

  function ActionBar() {
    _classCallCheck(this, ActionBar);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ActionBar.prototype.componentDidMount = function componentDidMount() {
    Object(isomorphic["b" /* setPadding */])(this.actionbar.getBoundingClientRect().height + 'px');
  };

  ActionBar.prototype.componentWillUnmount = function componentWillUnmount() {
    Object(isomorphic["b" /* setPadding */])('');
  };

  ActionBar.prototype.render = function render(_ref) {
    var _this2 = this;

    var prefix = _ref.prefix,
        className = _ref.className,
        descContent = _ref.descContent,
        btnContent = _ref.btnContent,
        additionMsg = _ref.additionMsg,
        handleClick = _ref.handleClick,
        _ref$disabled = _ref.disabled,
        disabled = _ref$disabled === undefined ? false : _ref$disabled,
        restProps = _objectWithoutProperties(_ref, ['prefix', 'className', 'descContent', 'btnContent', 'additionMsg', 'handleClick', 'disabled']);

    return Object(preact_min["h"])(
      'div',
      _extends({ className: classnames_default()(prefix, className), ref: function ref(c) {
          return _this2.actionbar = c;
        } }, restProps),
      !!additionMsg && Object(preact_min["h"])(
        'div',
        { className: prefix + '-tip' },
        additionMsg
      ),
      Object(preact_min["h"])(
        'div',
        { className: prefix + '-main' },
        Object(preact_min["h"])(
          'div',
          { className: prefix + '-main-desc' },
          descContent
        ),
        Object(preact_min["h"])(
          'div',
          {
            className: prefix + '-main-btn',
            onClick: handleClick,
            'data-disabled': disabled ? 1 : 0
          },
          btnContent || '确定'
        )
      )
    );
  };

  return ActionBar;
}(preact_min["Component"]), _class.defaultProps = {
  handleClick: function handleClick() {},
  disabled: false,
  prefix: 'caf-actionbar'
}, _temp);
/// export { ActionBar };

/* harmony default export */ var action_bar = (action_bar_ActionBar);
// CONCATENATED MODULE: ./pages/components/action-bar/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return action_bar_ActionBarComp; });



function action_bar__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function action_bar__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function action_bar__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var action_bar_ActionBarComp = function (_Component) {
  action_bar__inherits(ActionBarComp, _Component);

  function ActionBarComp() {
    action_bar__classCallCheck(this, ActionBarComp);

    return action_bar__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ActionBarComp.prototype.render = function render() {
    return Object(preact_min["h"])(
      'div',
      null,
      Object(preact_min["h"])(action_bar, {
        descContent: '\u63CF\u8FF0\u6587\u5B57',
        btnContent: '\u6309\u94AE\u6587\u5B57',
        handleClick: function handleClick() {
          return console.log('click');
        }
      })
    );
  };

  return ActionBarComp;
}(preact_min["Component"]);



/***/ })

};;
//# sourceMappingURL=25.chunk.9b8e3.js.map