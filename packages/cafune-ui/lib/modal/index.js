"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Modal = void 0;

var _preact = require("preact");

var _isomorphic = require("util/isomorphic");

var _style = _interopRequireDefault(require("./style.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var modalComp;
var containerNode = _isomorphic.isBrowser && document.body;
var viewWrap = containerNode;
var defaultOptions = {
  title: '',
  // 标题
  message: '',
  // 消息内容，如有children 优先children
  align: 'center',
  // 文本对齐方式
  showCancel: false,
  // 是否显示取消按钮
  confirmContent: '确定',
  cancelContent: '取消',
  mask: true,
  visable: true
};
/**
 * 渲染模态框到容器中
 */

var modal = function modal(options) {
  if (!_isomorphic.isBrowser) return null;

  if (containerNode && modalComp) {
    (0, _preact.render)('', containerNode, modalComp);
    modalComp = null;
  }

  var props = _extends({}, defaultOptions, options);

  modalComp = (0, _preact.render)((0, _preact.h)(Modal, props), containerNode);
};
/**
 * 默认模态框
 */


var alert = function alert(options) {
  modal(options);
};
/**
 * 带取消按钮的模态框
 */


var confirm = function confirm(options) {
  modal(_objectSpread({
    showCancel: true
  }, options));
};

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, _getPrototypeOf(Modal).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      viewWrap && (viewWrap.style.overflow = this.props.visable ? 'hidden' : '');
    }
  }, {
    key: "handleClick",
    value: function handleClick(action) {
      if (modalComp && containerNode) {
        (0, _preact.render)('', containerNode, modalComp);
        modalComp = null;
      }

      if (action === 'confirm') {
        this.props.onConfirm && this.props.onConfirm();
      } else {
        this.props.onCancel && this.props.onCancel();
      }
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var _ref$title = _ref.title,
          title = _ref$title === void 0 ? '' : _ref$title,
          _ref$message = _ref.message,
          message = _ref$message === void 0 ? '' : _ref$message,
          _ref$align = _ref.align,
          align = _ref$align === void 0 ? 'center' : _ref$align,
          children = _ref.children,
          _ref$showCancel = _ref.showCancel,
          showCancel = _ref$showCancel === void 0 ? false : _ref$showCancel,
          _ref$confirmContent = _ref.confirmContent,
          confirmContent = _ref$confirmContent === void 0 ? '确定' : _ref$confirmContent,
          _ref$cancelContent = _ref.cancelContent,
          cancelContent = _ref$cancelContent === void 0 ? '取消' : _ref$cancelContent,
          _ref$mask = _ref.mask,
          mask = _ref$mask === void 0 ? true : _ref$mask,
          _ref$visable = _ref.visable,
          visable = _ref$visable === void 0 ? false : _ref$visable;

      if (visable) {
        var Title = title && (0, _preact.h)("div", {
          "class": _style["default"].header
        }, title);

        var contentStyle = _style["default"]["msg__".concat(align)] || _style["default"].msg_center;

        var Content = (!!(children && children.length) || message) && (0, _preact.h)("div", {
          "class": _style["default"].content
        }, children && children.length > 0 ? children : (0, _preact.h)("div", {
          dangerouslySetInnerHTML: {
            __html: message
          },
          "class": contentStyle
        }));
        var Buttons = (0, _preact.h)("div", {
          "class": _style["default"].btngroup
        }, showCancel && (0, _preact.h)("button", {
          "class": _style["default"].btngroup__cancel,
          onClick: this.handleClick.bind(this, 'cancel')
        }, cancelContent), (0, _preact.h)("button", {
          "class": _style["default"].btngroup__confirm,
          onClick: this.handleClick.bind(this, 'confirm')
        }, confirmContent));
        return (0, _preact.h)("div", {
          "class": _style["default"].modal
        }, mask && (0, _preact.h)("div", {
          "class": _style["default"].modal_bg
        }), (0, _preact.h)("div", {
          "class": _style["default"].modal_content
        }, Title, Content, Buttons));
      } else {
        return null;
      }
    }
  }]);

  return Modal;
}(_preact.Component);

exports.Modal = Modal;

_defineProperty(Modal, "alert", alert);

_defineProperty(Modal, "confirm", confirm);

var _default = Modal;
exports["default"] = _default;