"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _preact = require("preact");

var _tab = _interopRequireDefault(require("./tab"));

var _style = _interopRequireDefault(require("./style.scss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _isomorphic = require("util/isomorphic");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function setTransform(obj, offsetLeft) {
  obj.style.transform = "translate3d(".concat(offsetLeft, "px, 0, 0)");
  obj.style.msTransform = "translate3d(".concat(offsetLeft, "px, 0, 0)");
  obj.style.MozTransform = "translate3d(".concat(offsetLeft, "px, 0, 0)");
  obj.style.webkitTransform = "translate3d(".concat(offsetLeft, "px, 0, 0)");
}

var defaultMax = 5;

var Nav =
/*#__PURE__*/
function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Nav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Nav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onTabSelected", function (id) {
      var onChange = _this.props.onChange;
      onChange(id);
    });

    _defineProperty(_assertThisInitialized(_this), "resizing", function () {
      _this.positionInkBar();
    });

    return _this;
  }

  _createClass(Nav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$type = this.props.type,
          type = _this$props$type === void 0 ? 'slider' : _this$props$type;

      if (type === 'slider' && _isomorphic.isBrowser) {
        this.positionInkBar();
        window.addEventListener('resize', this.resizing);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props$type2 = this.props.type,
          type = _this$props$type2 === void 0 ? 'slider' : _this$props$type2;

      if (type === 'slider' && _isomorphic.isBrowser) {
        this.positionInkBar();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resizing);
    } // 定位底部指示线

  }, {
    key: "positionInkBar",
    value: function positionInkBar() {
      var inkBar = this.inkBar,
          activeTab = this.activeTab;

      if (activeTab) {
        var base = activeTab.base;
        var itemWidth = base.offsetWidth;
        var percent = 0.6;
        inkBar.style.width = "".concat(itemWidth * percent, "px");
        var offsetLeft = itemWidth * ((1 - percent) / 2) + base.offsetLeft;
        setTransform(inkBar, offsetLeft);
      }
    }
  }, {
    key: "renderTabs",
    value: function renderTabs() {
      var _this2 = this;

      var _this$props = this.props,
          tabsData = _this$props.tabsData,
          maxCount = _this$props.maxCount;
      var tabs = [];
      tabsData.forEach(function (item) {
        var ref;

        if (item.actived) {
          ref = function ref(c) {
            return _this2.activeTab = c;
          };
        }

        var tabStyle = {};

        if (maxCount !== defaultMax) {
          tabStyle.style = "min-width:".concat(1 / maxCount * 100, "%");
        }

        tabs.push((0, _preact.h)(_tab["default"], _extends({}, item, {
          id: item.id,
          onSelected: _this2.onTabSelected,
          ref: ref,
          tabStyle: tabStyle,
          key: item.key
        }), item.label));
      });
      return tabs;
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var _classNams,
          _this3 = this;

      var navClass = _ref.navClass,
          _ref$type = _ref.type,
          type = _ref$type === void 0 ? 'slider' : _ref$type;
      var cx = (0, _classnames["default"])(_style["default"].tabNav, (_classNams = {}, _defineProperty(_classNams, _style["default"].tabNav__slider, type === 'slider'), _defineProperty(_classNams, _style["default"].tabNav__round, type === 'round'), _defineProperty(_classNams, _style["default"].tabNav__card, type === 'card'), _classNams), navClass);
      return (0, _preact.h)("div", {
        "class": cx
      }, (0, _preact.h)("div", {
        "class": _style["default"].tabNav_content
      }, this.renderTabs()), (0, _preact.h)("span", {
        "class": _style["default"].tabNav_ink,
        ref: function ref(c) {
          return _this3.inkBar = c;
        }
      }));
    }
  }]);

  return Nav;
}(_preact.Component);

exports["default"] = Nav;