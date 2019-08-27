exports.ids = [24];
exports.modules = {

/***/ "Y4Q1":
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

// EXTERNAL MODULE: ../components/icon/index.jsx
var components_icon = __webpack_require__("zHj6");

// EXTERNAL MODULE: ../components/loading/index.jsx + 1 modules
var loading = __webpack_require__("vf+f");

// CONCATENATED MODULE: ../components/action-sheet/index.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var availableAlign = ['left', 'center', 'right'];

var action_sheet_prefix = 'caf-actsheet';

var action_sheet__ref = Object(preact_min["h"])(loading["a" /* default */], { size: '24px' });

function renderList() {
  var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _cx, _cx2;

  var horizon = arguments[1];
  var wrap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  return Object(preact_min["h"])(
    'div',
    {
      className: classnames_default()(action_sheet_prefix + '-list', (_cx = {}, _cx[action_sheet_prefix + '-list__hori'] = horizon, _cx[action_sheet_prefix + '-list__vert'] = !horizon, _cx))
    },
    Object(preact_min["h"])(
      'div',
      {
        className: classnames_default()(action_sheet_prefix + '-list-wrapper', (_cx2 = {}, _cx2[action_sheet_prefix + '-list-wrapper__wrap'] = wrap, _cx2))
      },
      list.map(function (item) {
        var _cx3;

        var hasBadge = item.badge === '' || !!item.badge;
        var Badge = Object(preact_min["h"])(
          'span',
          { className: action_sheet_prefix + '-item-badge' },
          item.badge
        );
        if (item.align) {
          item.align = availableAlign.indexOf(item.align) === -1 ? 'center' : item.align;
        } else if (!horizon) {
          item.align = !!item.icon ? 'left' : 'center';
        }
        var action = typeof item.action === 'string' ? function () {
          location.href = item.action;
        } : item.action;
        var alignClass = action_sheet_prefix + '-item__' + item.align;
        var icon = Object(preact_min["h"])(components_icon["a" /* default */], { icon: item.icon, size: item.iconSize || '24px' });
        return Object(preact_min["h"])(
          'div',
          {
            className: classnames_default()(action_sheet_prefix + '-item', (_cx3 = {}, _cx3[alignClass] = !horizon, _cx3[action_sheet_prefix + '-item__loading'] = item.isLoading, _cx3[action_sheet_prefix + '-item__disabled'] = item.isDisabled, _cx3)),
            onClick: action
          },
          horizon ? Object(preact_min["h"])(
            'div',
            { className: action_sheet_prefix + '-item-icon' },
            icon,
            hasBadge && Badge
          ) : !!item.icon && Object(preact_min["h"])(
            'div',
            { className: action_sheet_prefix + '-item-icon' },
            icon
          ),
          Object(preact_min["h"])(
            'div',
            { className: action_sheet_prefix + '-item-name' },
            Object(preact_min["h"])(
              'p',
              { className: action_sheet_prefix + '-item-name-main' },
              item.name
            ),
            !!item.subName && Object(preact_min["h"])(
              'p',
              { className: action_sheet_prefix + '-item-name-sub' },
              item.subName
            ),
            !horizon && hasBadge && Badge
          ),
          item.isLoading && action_sheet__ref
        );
      })
    )
  );
}

/**
 * 动作面板
 */
var action_sheet_ActionSheet = (_temp2 = _class = function (_Component) {
  _inherits(ActionSheet, _Component);

  function ActionSheet() {
    var _temp, _this, _ret;

    _classCallCheck(this, ActionSheet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      isShow: _this.props.isShow,
      isFadding: true
    }, _this.renderData = function (data, horizon, wrap) {
      var result = void 0;
      var illegalMsg = '列表数据应为全数组或全对象';
      if (data && data.length) {
        // 如果为二维数组，则将每个数组单独渲染，否则直接渲染
        if (data.every(function (item) {
          return Object.prototype.toString.call(item) === '[object Array]';
        })) {
          result = data.map(function (list) {
            return renderList(list, horizon, wrap);
          });
        } else if (data.every(function (item) {
          return Object.prototype.toString.call(item) === '[object Object]';
        })) {
          result = renderList(data, horizon, wrap);
        } else {
          console.error(illegalMsg);
        }
      }
      return result;
    }, _this.renderContent = function () {
      var _this$props = _this.props,
          prefix = _this$props.prefix,
          horizon = _this$props.horizon,
          vertialList = _this$props.vertialList;

      var $horizon = _this.renderData(horizon ? horizon.list || [] : [], true, horizon.wrap);
      var $vertical = _this.renderData(vertialList, false);
      return Object(preact_min["h"])(
        'div',
        { className: prefix + '-content' },
        $horizon,
        $vertical
      );
    }, _this.onMaskClick = function (e) {
      var $target = e.target;
      var className = $target.className;
      if (className === action_sheet_prefix + '-wrapper') {
        _this.closeAct();
      }
    }, _this.openAct = function () {
      setTimeout(function () {
        _this.setState({
          isFadding: false
        }, function () {
          _this.props.onOpen && _this.props.onOpen();
        });
      }, 100);
    }, _this.closeAct = function () {
      _this.setState({
        isFadding: true
      }, function () {
        setTimeout(function () {
          _this.props.onClose && _this.props.onClose();
        }, 500);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ActionSheet.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if (nextProps.isShow !== this.state.isShow) {
      if (nextProps.isShow === true) {
        setTimeout(function () {
          _this2.setState({
            isFadding: false
          });
        });
      } else {
        this.closeAct();
      }
    }
  };

  ActionSheet.prototype.componentWillUnmount = function componentWillUnmount() {
    console.log('unmounting');
  };

  ActionSheet.prototype.render = function render(_ref2, _ref3) {
    var isFadding = _ref3.isFadding;

    var prefix = _ref2.prefix,
        className = _ref2.className,
        showMask = _ref2.showMask,
        children = _ref2.children,
        cancelText = _ref2.cancelText,
        closeOnClickMask = _ref2.closeOnClickMask,
        title = _ref2.title,
        isShow = _ref2.isShow,
        showCancel = _ref2.showCancel,
        restProps = _objectWithoutProperties(_ref2, ['prefix', 'className', 'showMask', 'children', 'cancelText', 'closeOnClickMask', 'title', 'isShow', 'showCancel']);

    var content = this.renderContent();
    var maskProp = {};
    if (closeOnClickMask) {
      maskProp.onClick = this.onMaskClick;
    }
    return isShow ? Object(preact_min["h"])(
      'div',
      _extends({ className: classnames_default()(prefix, className) }, restProps),
      showMask && Object(preact_min["h"])('div', { className: prefix + '-mask' }),
      Object(preact_min["h"])(
        'div',
        _extends({ className: prefix + '-wrapper' }, maskProp),
        Object(preact_min["h"])(
          'div',
          { className: prefix + '-container', 'data-status': isFadding ? 0 : 1 },
          !!title && Object(preact_min["h"])(
            'div',
            { className: prefix + '-title' },
            title
          ),
          Object(preact_min["h"])(
            'div',
            { className: prefix + '-main' },
            children,
            content
          ),
          showCancel && Object(preact_min["h"])(
            'div',
            { className: prefix + '-cancel', onClick: this.closeAct },
            cancelText
          )
        )
      )
    ) : null;
  };

  return ActionSheet;
}(preact_min["Component"]), _class.defaultProps = {
  prefix: action_sheet_prefix,
  isShow: false,
  showMask: true,
  closeOnClickMask: true,
  cancelText: '取消',
  showCancel: true
}, _temp2);

/* harmony default export */ var action_sheet = (action_sheet_ActionSheet);
// EXTERNAL MODULE: ../components/button/index.jsx
var components_button = __webpack_require__("zcpj");

// CONCATENATED MODULE: ./pages/components/action-sheet/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return action_sheet_ActionSheetComp; });




function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function action_sheet__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function action_sheet__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function action_sheet__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var action_sheet_ActionSheetComp = function (_Component) {
  action_sheet__inherits(ActionSheetComp, _Component);

  function ActionSheetComp() {
    var _temp, _this, _ret;

    action_sheet__classCallCheck(this, ActionSheetComp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = action_sheet__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      isActionShow1: false
    }, _this.showAction = function (name) {
      return function () {
        var _this$setState;

        return _this.setState((_this$setState = {}, _this$setState[name] = !_this.state[name], _this$setState));
      };
    }, _temp), action_sheet__possibleConstructorReturn(_this, _ret);
  }

  ActionSheetComp.prototype.componentDidMount = function componentDidMount() {
    Array.prototype.forEach.call(document.querySelectorAll('meta'), function (item) {
      if (item.name === 'viewport') item.content = 'width=device-width,initial-scale=1,viewport-fit=cover';
    });
  };

  ActionSheetComp.prototype.render = function render(_ref, _ref2) {
    var _this2 = this;

    var isActionShow1 = _ref2.isActionShow1;

    _objectDestructuringEmpty(_ref);

    return Object(preact_min["h"])(
      'div',
      { 'class': 'caf-demo-block' },
      Object(preact_min["h"])(
        components_button["a" /* default */],
        { onClick: this.showAction('isActionShow1') },
        '\u5C55\u793A\u9762\u677F'
      ),
      Object(preact_min["h"])(action_sheet, {
        isShow: isActionShow1,
        title: 'test title',
        horizon: {
          wrap: false,
          list: [{
            name: 'hi',
            subName: 'hi sub',
            icon: 'https://image.uisdc.com/wp-content/uploads/2018/07/uiii-ps-icon.png',
            badge: true,
            action: function action() {
              console.log('ps hi');
            }
          }, {
            name: 'hi2',
            subName: 'hi2 sub',
            icon: 'search',
            badge: '2',
            action: '/'
          }, {
            name: 'hi2',
            subName: 'hi2 sub',
            icon: 'search',
            badge: '2'
          }, {
            name: 'hi2',
            subName: 'hi2 sub',
            icon: 'search',
            badge: '2'
          }, {
            name: 'hi2',
            subName: 'hi2 sub',
            icon: 'search',
            badge: '2'
          }]
        },
        vertialList: [{
          name: 'hi',
          subName: 'hi sub',
          icon: 'https://image.uisdc.com/wp-content/uploads/2018/07/uiii-ps-icon.png',
          badge: true,
          align: 'right',
          isDisabled: true
        }, {
          name: 'hi2',
          subName: 'hi2 sub',
          icon: 'search',
          badge: '2',
          isLoading: true
        }, {
          name: 'hi2',
          subName: 'hi2 sub',
          badge: '2',
          isLoading: true
        }],
        onClose: function onClose() {
          _this2.setState({
            isActionShow1: false
          });
        }
      })
    );
  };

  return ActionSheetComp;
}(preact_min["Component"]);



/***/ })

};;
//# sourceMappingURL=24.chunk.30010.js.map