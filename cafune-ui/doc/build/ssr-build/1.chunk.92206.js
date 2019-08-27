exports.ids = [1,27];
exports.modules = {

/***/ "Lahf":
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

// CONCATENATED MODULE: ../components/nav-bar/index.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





var nav_bar_prefix = 'caf-navbar';

var themeColor = '#3f77f6';
var defaultLeftProp = {
  icon: 'back'
};

/**
 * 获取按钮内容
 * @param {object} data 按钮信息
 * @param {string} side 按钮位置
 * @param {boolean} isConflict icon和text 是否存在二选一
 */
function getBtn(data) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'left';
  var isConflict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (data) {
    var icon = data.icon,
        color = data.color,
        text = data.text,
        badge = data.badge,
        clickHandler = data.clickHandler;

    var textProp = {};
    if (color) {
      textProp.style = { color: color };
    }
    var hadText = !(isConflict && !!icon) && !!text;
    var $badge = !!badge && Object(preact_min["h"])(
      'span',
      { className: nav_bar_prefix + '-btn-badge' },
      typeof badge === 'string' && badge
    );
    // 竞争状态时只保留图标
    return Object(preact_min["h"])(
      'div',
      { className: nav_bar_prefix + '-btn ' + nav_bar_prefix + '-btn__' + side, onClick: clickHandler },
      !!icon && Object(preact_min["h"])(components_icon["a" /* default */], { icon: icon, color: color || themeColor }),
      hadText && Object(preact_min["h"])(
        'span',
        _extends({ className: nav_bar_prefix + '-btn-text' }, textProp, { 'data-badged': !!badge ? 1 : 0 }),
        text
      ),
      $badge
    );
  }
  return null;
}

/**
 * 导航栏
 */
var nav_bar_NavBar = function NavBar(_ref) {
  var _cx;

  var prefix = _ref.prefix,
      className = _ref.className,
      children = _ref.children,
      left = _ref.left,
      rights = _ref.rights,
      isFixed = _ref.isFixed,
      restProps = _objectWithoutProperties(_ref, ['prefix', 'className', 'children', 'left', 'rights', 'isFixed']);

  var rightIcons = Array.isArray(rights) ? rights.map(function (item) {
    return getBtn(item, 'right', true);
  }) : getBtn(rights, 'right', true);
  return Object(preact_min["h"])(
    'div',
    _extends({ className: classnames_default()(prefix, className, (_cx = {}, _cx[prefix + '__fixed'] = isFixed, _cx)) }, restProps),
    getBtn(_extends({}, defaultLeftProp, left)),
    Object(preact_min["h"])(
      'div',
      { className: prefix + '-title' },
      children && children.length > 0 && children
    ),
    rightIcons
  );
};

nav_bar_NavBar.defaultProps = {
  prefix: nav_bar_prefix,
  left: defaultLeftProp,
  rights: []
};

/* harmony default export */ var nav_bar = (nav_bar_NavBar);
// EXTERNAL MODULE: ./pages/components/nav-bar/style.scss
var style = __webpack_require__("lIn8");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./pages/components/nav-bar/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nav_bar_Page; });



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var nav_bar_Page = function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Page.prototype.render = function render() {
    return Object(preact_min["h"])(
      'div',
      { 'class': 'caf-demo-page' },
      Object(preact_min["h"])(
        nav_bar,
        {
          isFixed: true,
          left: {
            icon: 'wrong',
            text: '返回',
            clickHandler: function clickHandler() {
              console.log('返回');
            }
          },
          rights: {
            icon: 'search',
            text: '搜索',
            clickHandler: function clickHandler() {
              console.log('搜索');
            }
          }
        },
        '\u6807\u9898'
      ),
      Object(preact_min["h"])(
        nav_bar,
        {
          left: {
            icon: 'wrong',
            text: '返回',
            clickHandler: function clickHandler() {
              console.log('返回');
            }
          },
          rights: [{
            text: '搜索',
            badge: '22',
            clickHandler: function clickHandler() {
              console.log('搜索');
            }
          }, {
            text: '搜索',
            clickHandler: function clickHandler() {
              console.log('搜索');
            }
          }, {
            icon: 'img',
            text: '图片',
            badge: true,
            clickHandler: function clickHandler() {
              console.log('图标');
            }
          }]
        },
        '\u6807\u9898'
      )
    );
  };

  return Page;
}(preact_min["Component"]);



/***/ }),

/***/ "lIn8":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

};;
//# sourceMappingURL=1.chunk.92206.js.map