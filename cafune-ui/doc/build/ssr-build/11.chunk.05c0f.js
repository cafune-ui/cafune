exports.ids = [11];
exports.modules = {

/***/ "rCPV":
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

// CONCATENATED MODULE: ../components/tab-bar/item.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var item_TabBarItem = (_temp2 = _class = function (_Component) {
  _inherits(TabBarItem, _Component);

  function TabBarItem() {
    var _temp, _this, _ret;

    _classCallCheck(this, TabBarItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleChange = function () {
      var _this$props = _this.props,
          id = _this$props.id,
          disabled = _this$props.disabled;
      var onChange = _this.context.onChange;

      !disabled && onChange && onChange(id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  TabBarItem.prototype.render = function render(_ref, _ref2) {
    _objectDestructuringEmpty(_ref2);

    var prefix = _ref.prefix,
        className = _ref.className,
        text = _ref.text,
        id = _ref.id,
        icons = _ref.icons,
        disabled = _ref.disabled,
        restProps = _objectWithoutProperties(_ref, ['prefix', 'className', 'text', 'id', 'icons', 'disabled']);

    var _context = this.context,
        activedId = _context.activedId,
        activedColor = _context.activedColor;

    var isActived = activedId === id;
    var iconType = isActived ? 'actived' : disabled ? 'disabled' : 'normal';
    var tabStyle = isActived ? { color: activedColor } : {};
    return Object(preact_min["h"])(
      'div',
      _extends({
        className: classnames_default()(prefix, className),
        onClick: this.handleChange,
        style: tabStyle,
        'data-status': isActived ? 1 : disabled ? 2 : 0
      }, restProps),
      !!icons && Object(preact_min["h"])('div', {
        className: prefix + '-icon',
        style: 'background-image: url(' + (icons[iconType] || icons.normal) + ')'
      }),
      Object(preact_min["h"])(
        'p',
        null,
        text
      )
    );
  };

  return TabBarItem;
}(preact_min["Component"]), _class.defaultProps = {
  disabled: false,
  prefix: 'caf-tabbar-item'
}, _temp2);

// EXTERNAL MODULE: ../util/isomorphic.js
var isomorphic = __webpack_require__("2IOQ");

// CONCATENATED MODULE: ../components/tab-bar/index.jsx
var tab_bar__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var tab_bar__class, tab_bar__temp2;



function tab_bar__objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function tab_bar__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tab_bar__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function tab_bar__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * 标签栏
 * @example
 * ```jsx
 * const { TabBarItem } = TabBar;
 * export default class TestComp extends Component {
 *   state = {
 *     page: 'news',
 *   }
 *   onChange = activedId => {
 *     this.setState({
 *       page: activedId,
 *     })
 *   };
 *   render({}, {page}) {
 *     return (
 *       <div>
 *         <TabBar activedId={page} onChange={this.onChange}>
 *           <TabBarItem
 *              text="news"
 *              id="news"
 *              icons={{
 *                actived: '/assets/icons/news_actived.png',
 *                normal: '/assets/icons/news.png'
 *              }}
 *           />
 *           <TabBarItem text="match" id="match" />
 *           <TabBarItem text="leagues" id="leagues" />
 *         </TabBar>
 *       </div>
 *    );
 *   }
 * }
 * ```
 */
var tab_bar_TabBar = (tab_bar__temp2 = tab_bar__class = function (_Component) {
  tab_bar__inherits(TabBar, _Component);

  function TabBar() {
    var _temp, _this, _ret;

    tab_bar__classCallCheck(this, TabBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = tab_bar__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.currentActive = _this.props.activedId, _this.onChange = function (activedId) {
      if (_this.currentActive !== activedId) {
        var onChange = _this.props.onChange;

        onChange && onChange(activedId);
        _this.currentActive = activedId;
      }
    }, _temp), tab_bar__possibleConstructorReturn(_this, _ret);
  }

  TabBar.prototype.componentDidMount = function componentDidMount() {
    Object(isomorphic["b" /* setPadding */])(this.base.getBoundingClientRect().height + 'px');
  };

  TabBar.prototype.componentWillUnmount = function componentWillUnmount() {
    Object(isomorphic["b" /* setPadding */])('');
  };

  TabBar.prototype.getChildContext = function getChildContext() {
    return {
      activedId: this.props.activedId,
      activedColor: this.props.activedColor,
      onChange: this.onChange
    };
  };

  TabBar.prototype.render = function render(_ref) {
    var _cx;

    var prefix = _ref.prefix,
        className = _ref.className,
        fixed = _ref.fixed,
        children = _ref.children,
        restProps = tab_bar__objectWithoutProperties(_ref, ['prefix', 'className', 'fixed', 'children']);

    var cls = classnames_default()(prefix, className, (_cx = {}, _cx[prefix + '__fixed'] = fixed, _cx));
    return Object(preact_min["h"])(
      'div',
      tab_bar__extends({ className: cls }, restProps),
      children
    );
  };

  return TabBar;
}(preact_min["Component"]), tab_bar__class.TabBarItem = item_TabBarItem, tab_bar__class.defaultProps = {
  prefix: 'caf-tabbar',
  fixed: true,
  activedColor: '#3f77f6'
}, tab_bar__temp2);

/* harmony default export */ var tab_bar = (tab_bar_TabBar);
// CONCATENATED MODULE: ./pages/components/tab-bar/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tab_bar_TabBarComp; });



function tab_bar__objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function components_tab_bar__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function components_tab_bar__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function components_tab_bar__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var tab_bar_TabBarItem = tab_bar.TabBarItem;

var tab_bar_TabBarComp = function (_Component) {
  components_tab_bar__inherits(TabBarComp, _Component);

  function TabBarComp() {
    var _temp, _this, _ret;

    components_tab_bar__classCallCheck(this, TabBarComp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = components_tab_bar__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      page: 'news'
    }, _this.onChange = function (activedId) {
      _this.setState({
        page: activedId
      });
    }, _temp), components_tab_bar__possibleConstructorReturn(_this, _ret);
  }

  TabBarComp.prototype.render = function render(_ref, _ref2) {
    var page = _ref2.page;

    tab_bar__objectDestructuringEmpty(_ref);

    return Object(preact_min["h"])(
      'div',
      null,
      Object(preact_min["h"])(
        'div',
        { 'class': 'caf-demo-block' },
        Object(preact_min["h"])(
          'p',
          null,
          page
        )
      ),
      Object(preact_min["h"])(
        tab_bar,
        { activedId: page, onChange: this.onChange },
        Object(preact_min["h"])(tab_bar_TabBarItem, {
          text: 'news',
          id: 'news',
          icons: {
            actived: 'https://image.flaticon.com/icons/png/128/2026/2026462.png',
            normal: 'https://image.flaticon.com/icons/png/128/2026/2026450.png'
          }
        }),
        Object(preact_min["h"])(tab_bar_TabBarItem, {
          text: 'match',
          id: 'match',
          icons: {
            actived: 'https://image.flaticon.com/icons/png/128/2026/2026478.png',
            normal: 'https://image.flaticon.com/icons/png/128/2026/2026469.png'
          }
        }),
        Object(preact_min["h"])(tab_bar_TabBarItem, {
          text: 'leagues',
          id: 'leagues',
          icons: {
            actived: 'https://image.flaticon.com/icons/png/128/2026/2026518.png',
            normal: 'https://image.flaticon.com/icons/png/128/2026/2026521.png'
          }
        })
      )
    );
  };

  return TabBarComp;
}(preact_min["Component"]);



/***/ })

};;
//# sourceMappingURL=11.chunk.05c0f.js.map