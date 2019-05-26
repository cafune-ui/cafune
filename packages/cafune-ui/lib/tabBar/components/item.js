"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _preact = require("preact");

var _style = _interopRequireDefault(require("../style.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TabBarItem =
/*#__PURE__*/
function (_Component) {
  _inherits(TabBarItem, _Component);

  function TabBarItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TabBarItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TabBarItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          disabled = _this$props.disabled;
      var onChange = _this.context.onChange;
      !disabled && onChange && onChange(id);
    });

    return _this;
  }

  _createClass(TabBarItem, [{
    key: "render",
    value: function render(_ref, _ref2) {
      var text = _ref.text,
          id = _ref.id,
          icons = _ref.icons,
          _ref$disabled = _ref.disabled,
          disabled = _ref$disabled === void 0 ? false : _ref$disabled;

      _objectDestructuringEmpty(_ref2);

      var _this$context = this.context,
          activedId = _this$context.activedId,
          activedColor = _this$context.activedColor;
      var isActived = activedId === id;
      var iconType = isActived ? 'actived' : disabled ? 'disabled' : 'normal';
      var tabStyle = isActived ? {
        color: activedColor
      } : {};
      return (0, _preact.h)("div", {
        "class": _style["default"].tabbar_item,
        onClick: this.handleChange,
        style: tabStyle,
        "data-status": isActived ? 1 : disabled ? 2 : 0
      }, !!icons && (0, _preact.h)("div", {
        "class": _style["default"].tabbar_item_icon,
        style: "background-image: url(".concat(icons[iconType] || icons.normal, ")")
      }), (0, _preact.h)("p", null, text));
    }
  }]);

  return TabBarItem;
}(_preact.Component);

exports["default"] = TabBarItem;