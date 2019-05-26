"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Tabs = void 0;

var _preact = require("preact");

var _panel = _interopRequireDefault(require("./components/panel"));

var _nav = _interopRequireDefault(require("./components/nav"));

var _classnames = _interopRequireDefault(require("classnames"));

var _style = _interopRequireDefault(require("./style.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function checkIfPanel(el) {
  return el.nodeName.displayName === 'TabPanel';
}

var Tabs =
/*#__PURE__*/
function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onTabChange", function (key) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(key);
      }
    });

    return _this;
  }

  _createClass(Tabs, [{
    key: "renderNav",
    value: function renderNav(data, navClass) {
      var _this2 = this;

      var _this$props = this.props,
          type = _this$props.type,
          align = _this$props.align,
          maxCount = _this$props.maxCount;

      if (data && data.length) {
        return (0, _preact.h)(_nav["default"], {
          onChange: this.onTabChange,
          tabsData: data,
          type: type,
          align: align,
          navClass: navClass,
          maxCount: maxCount,
          ref: function ref(c) {
            return _this2.tabNav = c;
          }
        });
      }

      return null;
    }
  }, {
    key: "renderTabPanel",
    value: function renderTabPanel(data) {
      var panels = [];

      if (data && data.length) {
        panels = data.map(function (item) {
          return (0, _preact.h)(_panel["default"], {
            key: item.key,
            className: item.className,
            actived: item.actived
          }, item.content);
        });
        return panels;
      }

      return null;
    }
  }, {
    key: "getTabsData",
    value: function getTabsData(children, activeId) {
      var data = [];
      children.forEach(function (item) {
        if (checkIfPanel(item)) {
          var props = item.attributes;
          var id = props.id,
              label = props.label,
              className = props.className;
          var _children = item.children;
          data.push({
            label: label,
            id: id,
            actived: activeId && id ? activeId === id : false,
            content: _children,
            className: className
          });
        }
      });
      return data;
    }
  }, {
    key: "renderWithPanel",
    value: function renderWithPanel() {
      var _this3 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          activeId = _this$props2.activeId,
          className = _this$props2.className,
          navClass = _this$props2.navClass;
      var tabsData = this.getTabsData(children, activeId);
      var cx = (0, _classnames["default"])(_style["default"].tabs, className);
      return (0, _preact.h)("div", {
        "class": cx
      }, this.renderNav(tabsData, navClass), (0, _preact.h)("div", {
        ref: function ref(c) {
          return _this3.tabPanel = c;
        }
      }, this.renderTabPanel(tabsData)));
    }
  }, {
    key: "renderWithoutPanel",
    value: function renderWithoutPanel() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          activeId = _this$props3.activeId,
          className = _this$props3.className,
          navClass = _this$props3.navClass,
          tabs = _this$props3.tabs;
      tabs.forEach(function (item) {
        return item.actived = item.id === activeId;
      });
      var cx = (0, _classnames["default"])(_style["default"].tabs, className);
      return (0, _preact.h)("div", {
        "class": cx
      }, this.renderNav(tabs, navClass), children);
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var tabs = _ref.tabs;

      if (tabs) {
        return this.renderWithoutPanel();
      }

      return this.renderWithPanel();
    }
  }]);

  return Tabs;
}(_preact.Component);

exports.Tabs = Tabs;

_defineProperty(Tabs, "Panel", _panel["default"]);

_defineProperty(Tabs, "Nav", _nav["default"]);

var _default = Tabs;
exports["default"] = _default;