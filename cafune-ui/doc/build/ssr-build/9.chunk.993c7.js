exports.ids = [9];
exports.modules = {

/***/ "xe2t":
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

// EXTERNAL MODULE: ../components/icon/index.jsx
var components_icon = __webpack_require__("zHj6");

// EXTERNAL MODULE: ../util/isomorphic.js
var isomorphic = __webpack_require__("2IOQ");

// CONCATENATED MODULE: ../components/toast/index.jsx
var _class, toast__temp, toast__initialiseProps;



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var seed = 0;
function getUuid(type) {
  var now = Date.now();
  return 'cToast_' + type + '_' + now + '_' + seed++;
}
var notifyContainerNode = void 0;
var durationDefault = 2000;
var ToastList = {};
// const browserPrefixs = ['-webkit-', '-moz-', '-o-', ''];
/**
 * 消息提示
 * @example
 * - 不同类型提示
 *
 *  ```js
 *  Toast.show({ content: 'show' });
 *  Toast.success({ content: 'success' });
 *
 *  Toast.error({ content: 'error' });
 *
 *  Toast.loading({ content: 'loading' });
 *  ```
 * - 自定义时长提示
 *
 *  ```javascript
 *  Toast.show({ content: '3秒之后消失', duration: 3000 })
 *  ```
 * - 带回调函数提示
 *
 *  ```javascript
 *  Toast.show({ content: '弹出消失alert', onClose() { alert('消失！') } })
 *  ```
 * - 自定义取消Toast
 * 当 duration 为0时，toast 需要调用`hide` 方法才能让toast 消失，loading 方法默认duration 为0
 *
 *  ```javascript
 * const toast = Toast.loading({ content: '弹出消失alert', onClose() { alert('消失！') } });
 * Toast.hide(toast);
 * ```
 */

var toast_Toast = (toast__temp = _class = function (_Component) {
  _inherits(Toast, _Component);

  function Toast(props) {
    _classCallCheck(this, Toast);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    toast__initialiseProps.call(_this);

    var uid = _this.props.uid;

    ToastList[uid] = { comp: _this };
    return _this;
  }

  Toast.prototype.clearCloseTimer = function clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  };

  Toast.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var _props$duration = this.props.duration,
        duration = _props$duration === undefined ? durationDefault : _props$duration;

    if (duration > 0) {
      this.closeTimer = setTimeout(function () {
        _this2.close();
      }, duration);
    }
  };

  Toast.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearCloseTimer();
  };

  Toast.prototype.render = function render(_ref, _ref2) {
    var prefix = _ref.prefix,
        icon = _ref.icon,
        content = _ref.content,
        type = _ref.type;
    var shouldClose = _ref2.shouldClose;

    var toastIcon = null;
    if (icon) {
      if (typeof icon === 'string') {
        toastIcon = Object(preact_min["h"])(components_icon["a" /* default */], { icon: icon, size: '42px' });
      } else if (icon.icon) {
        toastIcon = Object(preact_min["h"])(components_icon["a" /* default */], { icon: icon.icon, size: icon.size || '42px' });
      }
    }
    return Object(preact_min["h"])(
      'div',
      {
        className: prefix,
        'data-type': type,
        'data-status': shouldClose ? 0 : 1
      },
      toastIcon,
      Object(preact_min["h"])(
        'p',
        { className: prefix + '-content' },
        content
      )
    );
  };

  return Toast;
}(preact_min["Component"]), _class.show = show, _class.success = success, _class.error = error, _class.loading = loading, _class.hide = hide, _class.defaultProps = {
  duration: 2000,
  type: 'normal',
  multiple: false,
  prefix: 'caf-toast'
}, toast__initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.state = {
    shouldClose: false
  };

  this.close = function () {
    var _props = _this3.props,
        onClose = _props.onClose,
        uid = _props.uid;

    if (ToastList[uid]) {
      _this3.clearCloseTimer();
      _this3.setState({
        shouldClose: true
      });
      onClose && onClose();
      var node = ToastList[uid].node;
      delete ToastList[uid];
      /* istanbul ignore next */
      _this3.cleanTimer = setTimeout(function () {
        /* istanbul ignore else */
        if (notifyContainerNode) {
          Object(preact_min["render"])('', notifyContainerNode, node);
        }
        clearTimeout(_this3.cleanTimer);
        _this3.cleanTimer = null;
      }, 600);
    }
  };
}, toast__temp);
/**
 * 创建toast 容器
 */

var createNotifyContainerNode = function createNotifyContainerNode() {
  var notifyContainerClass = 'caf-notify';
  var notifyContainerNode = document.querySelector('.' + notifyContainerClass);

  if (!notifyContainerNode) {
    var bodyNode = document.body;
    var div = document.createElement('div');
    div.className = notifyContainerClass;
    notifyContainerNode = bodyNode.appendChild(div);
  }

  return notifyContainerNode;
};

/**
 * 基础Toast（不包含图标
 */
function show(_ref3) {
  var content = _ref3.content,
      _ref3$duration = _ref3.duration,
      duration = _ref3$duration === undefined ? durationDefault : _ref3$duration,
      icon = _ref3.icon,
      _ref3$type = _ref3.type,
      type = _ref3$type === undefined ? 'normal' : _ref3$type,
      onClose = _ref3.onClose,
      _ref3$multiple = _ref3.multiple,
      multiple = _ref3$multiple === undefined ? false : _ref3$multiple;

  if (!isomorphic["a" /* isBrowser */]) return null;
  notifyContainerNode = createNotifyContainerNode();
  if (!multiple) {
    // notifyContainerNode.innerHTML = '';
    hide();
  }
  var uid = getUuid(type);
  var props = {
    content: content,
    icon: icon,
    duration: duration,
    onClose: onClose,
    type: type,
    uid: uid
  };
  var toast = Object(preact_min["render"])(Object(preact_min["h"])(toast_Toast, props), notifyContainerNode);
  ToastList[uid].node = toast;
  return uid;
}
/**
 * 成功Toast
 */
function success() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      content = _ref4.content,
      duration = _ref4.duration,
      _ref4$icon = _ref4.icon,
      icon = _ref4$icon === undefined ? 'success' : _ref4$icon,
      onClose = _ref4.onClose;

  return show({ content: content, duration: duration, icon: icon, type: 'success', onClose: onClose });
}
/**
 * 失败Toast
 */
function error() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      content = _ref5.content,
      duration = _ref5.duration,
      _ref5$icon = _ref5.icon,
      icon = _ref5$icon === undefined ? 'error' : _ref5$icon,
      onClose = _ref5.onClose;

  return show({ content: content, duration: duration, icon: icon, type: 'error', onClose: onClose });
}

/**
 * 加载中Toast
 */
function loading() {
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref6$content = _ref6.content,
      content = _ref6$content === undefined ? '加载中' : _ref6$content,
      _ref6$duration = _ref6.duration,
      duration = _ref6$duration === undefined ? 0 : _ref6$duration,
      onClose = _ref6.onClose;

  return show({ content: content, duration: duration, type: 'loading', onClose: onClose });
}

function hide(toastid) {
  if (!isomorphic["a" /* isBrowser */]) return null;
  if (toastid && ToastList[toastid]) {
    ToastList[toastid].comp.close(true);
  } else {
    for (var i in ToastList) {
      ToastList[i].comp.close(true);
    }
  }
}

// export const Toast = {
//   show,
//   success,
//   error,
//   loading,
//   hide
// };

/* harmony default export */ var components_toast = (toast_Toast);
// CONCATENATED MODULE: ./pages/components/toast/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toast_ToastComp; });




function toast__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function toast__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function toast__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var toast__ref2 = Object(preact_min["h"])(
  'p',
  { 'class': 'caf-demo-title' },
  'toast \u7C7B\u578B'
);

var toast__ref3 = Object(preact_min["h"])(
  'p',
  { 'class': 'caf-demo-title' },
  '\u5B9A\u4E49\u65F6\u957F'
);

var _ref4 = Object(preact_min["h"])(
  'p',
  { 'class': 'caf-demo-button-desc' },
  '(4s)'
);

var _ref5 = Object(preact_min["h"])(
  'p',
  { 'class': 'caf-demo-title' },
  '\u5B9A\u4E49\u5173\u95ED\u56DE\u8C03'
);

var _ref6 = Object(preact_min["h"])(
  'p',
  { 'class': 'caf-demo-title' },
  '\u5B9A\u4E49\u56FE\u6807'
);

var toast_ToastComp = function (_Component) {
  toast__inherits(ToastComp, _Component);

  function ToastComp() {
    var _temp, _this, _ret;

    toast__classCallCheck(this, ToastComp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = toast__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.showToast = function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$kind = _ref.kind,
          kind = _ref$kind === undefined ? 'show' : _ref$kind,
          duration = _ref.duration,
          icon = _ref.icon,
          onClose = _ref.onClose,
          mutiple = _ref.mutiple;

      return function () {
        components_toast[kind]({
          content: kind,
          duration: duration,
          icon: icon,
          onClose: onClose,
          mutiple: mutiple
        });
      };
    }, _temp), toast__possibleConstructorReturn(_this, _ret);
  }

  ToastComp.prototype.render = function render() {
    return Object(preact_min["h"])(
      'div',
      null,
      Object(preact_min["h"])(
        'div',
        { 'class': 'caf-demo-block' },
        toast__ref2,
        Object(preact_min["h"])(
          components_button["a" /* default */],
          { onClick: this.showToast() },
          '\u5E38\u89C4Toast'
        ),
        Object(preact_min["h"])(
          components_button["a" /* default */],
          { onClick: this.showToast({ kind: 'loading' }) },
          '\u52A0\u8F7DToast'
        ),
        Object(preact_min["h"])(
          components_button["a" /* default */],
          { type: 'warning', onClick: this.showToast({ kind: 'error' }) },
          '\u9519\u8BEFToast'
        ),
        Object(preact_min["h"])(
          components_button["a" /* default */],
          { type: 'primary', onClick: this.showToast({ kind: 'success' }) },
          '\u6210\u529FToast'
        )
      ),
      Object(preact_min["h"])(
        'div',
        { 'class': 'caf-demo-block' },
        toast__ref3,
        Object(preact_min["h"])(
          components_button["a" /* default */],
          { onClick: this.showToast({ duration: 4000 }) },
          '\u81EA\u5B9A\u4E49\u65F6\u957F',
          _ref4
        )
      ),
      Object(preact_min["h"])(
        'div',
        { 'class': 'caf-demo-block' },
        _ref5,
        Object(preact_min["h"])(
          components_button["a" /* default */],
          {
            onClick: this.showToast({
              onClose: function onClose() {
                alert('关闭');
              }
            })
          },
          '\u56DE\u8C03'
        )
      ),
      Object(preact_min["h"])(
        'div',
        { 'class': 'caf-demo-block' },
        _ref6,
        Object(preact_min["h"])(
          components_button["a" /* default */],
          {
            onClick: this.showToast({
              icon: 'like'
            })
          },
          '\u5185\u7F6E\u56FE\u6807'
        ),
        Object(preact_min["h"])(
          components_button["a" /* default */],
          {
            onClick: this.showToast({
              icon: {
                icon: 'https://image.flaticon.com/icons/png/128/2026/2026462.png',
                size: '32px'
              }
            })
          },
          '\u56FE\u7247\u56FE\u6807'
        )
      )
    );
  };

  return ToastComp;
}(preact_min["Component"]);



/***/ })

};;
//# sourceMappingURL=9.chunk.993c7.js.map