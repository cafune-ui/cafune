exports.ids = [10];
exports.modules = {

/***/ "CGs7":
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

// CONCATENATED MODULE: ../components/tabs/panel.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var panel_Panel = (_temp = _class = function (_Component) {
  _inherits(Panel, _Component);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Panel.prototype.render = function render(_ref) {
    var prefix = _ref.prefix,
        children = _ref.children,
        className = _ref.className,
        actived = _ref.actived,
        restProps = _objectWithoutProperties(_ref, ['prefix', 'children', 'className', 'actived']);

    var cls = classnames_default()(prefix, className);
    return Object(preact_min["h"])(
      'div',
      _extends({ className: cls, 'data-actived': actived ? 1 : 0 }, restProps),
      children
    );
  };

  return Panel;
}(preact_min["Component"]), _class.displayName = 'TabPanel', _class.defaultProps = {
  visable: true,
  prefix: 'caf-tabs-panel'
}, _temp);

// CONCATENATED MODULE: ../components/tabs/components/tab.jsx
var tab__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function tab__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tab__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function tab__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var tab_Tab = function (_Component) {
  tab__inherits(Tab, _Component);

  function Tab() {
    var _temp, _this, _ret;

    tab__classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = tab__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onItemClick = function () {
      var _this$props = _this.props,
          id = _this$props.id,
          actived = _this$props.actived,
          onSelected = _this$props.onSelected;

      if (!actived) {
        onSelected(id);
      }
    }, _temp), tab__possibleConstructorReturn(_this, _ret);
  }

  Tab.prototype.render = function render(_ref) {
    var actived = _ref.actived,
        children = _ref.children,
        tabStyle = _ref.tabStyle;

    var cx = classnames_default()('caf-tabs-item', {
      'caf-tabs-item__actived': !!actived
    });
    return Object(preact_min["h"])(
      'div',
      tab__extends({ className: cx, onClick: this.onItemClick }, tabStyle),
      Object(preact_min["h"])(
        'div',
        { className: 'caf-tabs-item-inner' },
        children
      )
    );
  };

  return Tab;
}(preact_min["Component"]);


// EXTERNAL MODULE: ../util/isomorphic.js
var isomorphic = __webpack_require__("2IOQ");

// CONCATENATED MODULE: ../components/tabs/nav.jsx
var nav__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var nav__class, _temp2;



function nav__objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function nav__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function nav__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function nav__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







function setTransform(obj, offsetLeft) {
  obj.style.transform = 'translate3d(' + offsetLeft + 'px, 0, 0)';
  obj.style.msTransform = 'translate3d(' + offsetLeft + 'px, 0, 0)';
  obj.style.MozTransform = 'translate3d(' + offsetLeft + 'px, 0, 0)';
  obj.style.webkitTransform = 'translate3d(' + offsetLeft + 'px, 0, 0)';
}

var defaultMax = 5;
var nav_Nav = (_temp2 = nav__class = function (_Component) {
  nav__inherits(Nav, _Component);

  function Nav() {
    var _temp, _this, _ret;

    nav__classCallCheck(this, Nav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = nav__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onTabSelected = function (id) {
      var onChange = _this.props.onChange;

      onChange(id);
    }, _this.resizing = function () {
      _this.positionInkBar();
    }, _temp), nav__possibleConstructorReturn(_this, _ret);
  }

  Nav.prototype.componentDidMount = function componentDidMount() {
    var _props$type = this.props.type,
        type = _props$type === undefined ? 'slider' : _props$type;

    if (type === 'slider' && isomorphic["a" /* isBrowser */]) {
      this.positionInkBar();
      window.addEventListener('resize', this.resizing);
    }
  };

  Nav.prototype.componentDidUpdate = function componentDidUpdate() {
    var _props$type2 = this.props.type,
        type = _props$type2 === undefined ? 'slider' : _props$type2;

    if (type === 'slider' && isomorphic["a" /* isBrowser */]) {
      this.positionInkBar();
    }
  };

  Nav.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.resizing);
  };
  // 定位底部指示线


  Nav.prototype.positionInkBar = function positionInkBar() {
    var inkBar = this.inkBar,
        activeTab = this.activeTab;

    if (activeTab) {
      var base = activeTab.base;

      var itemWidth = base.offsetWidth;
      var percent = 0.6;
      inkBar.style.width = itemWidth * percent + 'px';
      var offsetLeft = itemWidth * ((1 - percent) / 2) + base.offsetLeft;
      setTransform(inkBar, offsetLeft);
    }
  };

  Nav.prototype.renderTabs = function renderTabs() {
    var _this2 = this;

    var _props = this.props,
        tabsData = _props.tabsData,
        maxCount = _props.maxCount;

    var tabs = [];
    tabsData.forEach(function (item) {
      var ref = void 0;
      if (item.actived) {
        ref = function ref(c) {
          return _this2.activeTab = c;
        };
      }
      var tabStyle = {};
      if (maxCount !== defaultMax) {
        tabStyle.style = 'min-width:' + 1 / maxCount * 100 + '%';
      }
      tabs.push(Object(preact_min["h"])(
        tab_Tab,
        nav__extends({}, item, {
          id: item.id,
          onSelected: _this2.onTabSelected,
          ref: ref,
          tabStyle: tabStyle,
          key: item.key
        }),
        item.label
      ));
    });
    return tabs;
  };

  Nav.prototype.render = function render(_ref) {
    var _cx,
        _this3 = this;

    var prefix = _ref.prefix,
        className = _ref.className,
        navClass = _ref.navClass,
        type = _ref.type,
        restProps = nav__objectWithoutProperties(_ref, ['prefix', 'className', 'navClass', 'type']);

    var cls = classnames_default()(prefix, className, (_cx = {}, _cx[prefix + '__slider'] = type === 'slider', _cx[prefix + '__round'] = type === 'round', _cx[prefix + '__card'] = type === 'card', _cx), navClass);
    return Object(preact_min["h"])(
      'div',
      nav__extends({ className: cls }, restProps),
      Object(preact_min["h"])(
        'div',
        { className: prefix + '-content' },
        this.renderTabs()
      ),
      Object(preact_min["h"])('span', { className: prefix + '-ink', ref: function ref(c) {
          return _this3.inkBar = c;
        } })
    );
  };

  return Nav;
}(preact_min["Component"]), nav__class.defaultProps = {
  type: 'slider',
  prefix: 'caf-tabs-nav',
  maxCount: 5
}, _temp2);

// CONCATENATED MODULE: ../components/tabs/index.jsx
var tabs__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var tabs__class, tabs__temp2;



function tabs__objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function tabs__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tabs__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function tabs__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







function checkIfPanel(el) {
  return el.nodeName.displayName === 'TabPanel';
}

/**
 * 标签卡
 * @example
 * ```javascript
 * class NormalTab extends Component {
 *   state = {
 *     activeId: 'a'
 *   }
 *   onChange = id =>  {
 *    this.setState({
 *       activeId: id,
 *    })
 *   }
 *  render({}, { activeId }) {
 *    return (
 *      <Tabs activeId={ activeId } onChange={ this.onChange }>
 *        <TabPanel label="A" id="a">
 *         <div>A</div>
 *         </TabPanel>
 *         <TabPanel label="B" id="b">
 *           <div>B</div>
 *        </TabPanel>
 *        <TabPanel label="C" id="c" visable={false}>
 *          <div>C</div>
 *        </TabPanel>
 *    </Tabs>
 *     )
 *   }
 * }
 * ```
 */
var tabs_Tabs = (tabs__temp2 = tabs__class = function (_Component) {
  tabs__inherits(Tabs, _Component);

  function Tabs() {
    var _temp, _this, _ret;

    tabs__classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = tabs__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      activedKey: ''
    }, _this.onTabChange = function (key) {
      var onChange = _this.props.onChange;

      if (!_this.props.activeId) {
        _this.setState({
          activedKey: key
        });
      }
      if (onChange) {
        onChange(key);
      }
    }, _temp), tabs__possibleConstructorReturn(_this, _ret);
  }

  Tabs.prototype.renderNav = function renderNav(data, navClass) {
    var _this2 = this;

    var _props = this.props,
        type = _props.type,
        align = _props.align,
        maxCount = _props.maxCount;

    if (data && data.length) {
      return Object(preact_min["h"])(nav_Nav, {
        onChange: this.onTabChange,
        tabsData: data,
        type: type,
        align: align,
        navclassName: navClass,
        maxCount: maxCount,
        ref: function ref(c) {
          return _this2.tabNav = c;
        }
      });
    }
    return null;
  };

  Tabs.prototype.renderTabPanel = function renderTabPanel(data) {
    var panels = [];
    if (data && data.length) {
      panels = data.map(function (item) {
        return Object(preact_min["h"])(
          panel_Panel,
          { key: item.key, className: item.className, actived: item.actived },
          item.content
        );
      });
      return panels;
    }
    return null;
  };

  Tabs.prototype.getTabsData = function getTabsData(children, activeId) {
    var data = [];
    var activedKey = this.state.activedKey;

    children.forEach(function (item, ind) {
      if (checkIfPanel(item)) {
        var props = item.attributes;
        var id = props.id,
            label = props.label,
            className = props.className;
        var _children = item.children;

        var actived = false;
        if (activeId) {
          actived = id ? activeId === id : false;
        } else {
          actived = activedKey ? activedKey === id : ind === 0;
        }
        data.push({
          label: label,
          id: id,
          actived: actived,
          content: _children,
          className: className
        });
      }
    });
    return data;
  };

  Tabs.prototype.renderWithPanel = function renderWithPanel() {
    var _this3 = this;

    var _props2 = this.props,
        prefix = _props2.prefix,
        children = _props2.children,
        activeId = _props2.activeId,
        className = _props2.className,
        navClass = _props2.navClass,
        restProps = tabs__objectWithoutProperties(_props2, ['prefix', 'children', 'activeId', 'className', 'navClass']);

    var tabsData = this.getTabsData(children, activeId);
    var cls = classnames_default()(prefix, className);
    return Object(preact_min["h"])(
      'div',
      tabs__extends({ className: cls }, restProps),
      this.renderNav(tabsData, navClass),
      Object(preact_min["h"])(
        'div',
        { ref: function ref(c) {
            return _this3.tabPanel = c;
          } },
        this.renderTabPanel(tabsData)
      )
    );
  };

  Tabs.prototype.renderWithoutPanel = function renderWithoutPanel() {
    var _props3 = this.props,
        prefix = _props3.prefix,
        children = _props3.children,
        activeId = _props3.activeId,
        className = _props3.className,
        navClass = _props3.navClass,
        tabs = _props3.tabs,
        restProps = tabs__objectWithoutProperties(_props3, ['prefix', 'children', 'activeId', 'className', 'navClass', 'tabs']);

    tabs.forEach(function (item) {
      return item.actived = item.id === activeId;
    });
    var cls = classnames_default()(prefix, className);
    return Object(preact_min["h"])(
      'div',
      tabs__extends({ className: cls }, restProps),
      this.renderNav(tabs, navClass),
      children
    );
  };

  Tabs.prototype.render = function render(_ref) {
    var tabs = _ref.tabs;

    if (tabs) {
      return this.renderWithoutPanel();
    }
    return this.renderWithPanel();
  };

  return Tabs;
}(preact_min["Component"]), tabs__class.Panel = panel_Panel, tabs__class.Nav = nav_Nav, tabs__class.defaultProps = {
  type: 'slider',
  maxCount: 5
}, tabs__temp2);


/* harmony default export */ var components_tabs = (tabs_Tabs);
// CONCATENATED MODULE: ./pages/components/tabs/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tabs_TabsComp; });



function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function components_tabs__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function components_tabs__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function components_tabs__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var TabPanel = components_tabs.Panel;
var TabNav = components_tabs.Nav;

var containerStyle = {
  background: '#f5f5f5',
  height: '100px'
};

var tabs_tabsData = [{
  id: 'Sporttrey320',
  actived: true,
  label: '足球'
}, {
  id: 'Sporttrey307',
  actived: false,
  label: '篮球'
}, {
  id: 'Sporttrey327',
  actived: false,
  label: 'aa球'
}];

var _ref3 = Object(preact_min["h"])(
  TabPanel,
  { label: '\u65B9\u6848', id: 'forecast' },
  Object(preact_min["h"])(
    'div',
    null,
    '\u65B9\u6848'
  )
);

var _ref4 = Object(preact_min["h"])(
  TabPanel,
  { label: '\u6218\u7EE9', id: 'history' },
  Object(preact_min["h"])(
    'div',
    null,
    '\u6218\u7EE9'
  )
);

var _ref5 = Object(preact_min["h"])(
  TabPanel,
  { label: '\u8D54\u7387', id: 'odds', visable: false },
  Object(preact_min["h"])(
    'div',
    null,
    '\u8D54\u7387'
  )
);

var tabs_NormalTab = function (_Component) {
  components_tabs__inherits(NormalTab, _Component);

  function NormalTab() {
    var _temp, _this, _ret;

    components_tabs__classCallCheck(this, NormalTab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = components_tabs__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      activeId: 'forecast'
    }, _this.onChange = function (id) {
      _this.setState({
        activeId: id
      });
    }, _temp), components_tabs__possibleConstructorReturn(_this, _ret);
  }

  NormalTab.prototype.render = function render(_ref, _ref2) {
    var activeId = _ref2.activeId;

    _objectDestructuringEmpty(_ref);

    return Object(preact_min["h"])(
      'div',
      { style: containerStyle },
      Object(preact_min["h"])(
        components_tabs,
        { activeId: activeId, onChange: this.onChange },
        _ref3,
        _ref4,
        _ref5
      )
    );
  };

  return NormalTab;
}(preact_min["Component"]);

var _ref8 = Object(preact_min["h"])(
  TabPanel,
  { label: '\u65B9\u6848', id: 'forecast' },
  Object(preact_min["h"])(
    'div',
    null,
    '\u65B9\u6848'
  )
);

var _ref9 = Object(preact_min["h"])(
  TabPanel,
  { label: '\u6218\u7EE9', id: 'history' },
  Object(preact_min["h"])(
    'div',
    null,
    '\u6218\u7EE9'
  )
);

var _ref10 = Object(preact_min["h"])(
  TabPanel,
  { label: '\u8D54\u7387', id: 'odds' },
  Object(preact_min["h"])(
    'div',
    null,
    '\u8D54\u7387'
  )
);

var tabs_RoundTab = function (_Component2) {
  components_tabs__inherits(RoundTab, _Component2);

  function RoundTab() {
    var _temp2, _this2, _ret2;

    components_tabs__classCallCheck(this, RoundTab);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = components_tabs__possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
      activeId: 'forecast'
    }, _this2.onChange = function (id) {
      _this2.setState({
        activeId: id
      });
    }, _temp2), components_tabs__possibleConstructorReturn(_this2, _ret2);
  }

  RoundTab.prototype.render = function render(_ref6, _ref7) {
    var activeId = _ref7.activeId;

    _objectDestructuringEmpty(_ref6);

    return Object(preact_min["h"])(
      'div',
      { style: containerStyle },
      Object(preact_min["h"])(
        components_tabs,
        { activeId: activeId, onChange: this.onChange, type: 'round' },
        _ref8,
        _ref9,
        _ref10
      )
    );
  };

  return RoundTab;
}(preact_min["Component"]);

var _ref11 = Object(preact_min["h"])(
  'p',
  { 'class': 'caf-demo-title' },
  '\u9ED8\u8BA4\u7528\u6CD5'
);

var _ref12 = Object(preact_min["h"])(tabs_NormalTab, null);

var _ref13 = Object(preact_min["h"])(
  'p',
  { 'class': 'caf-demo-title' },
  '\u5706\u5F62Tab'
);

var _ref14 = Object(preact_min["h"])(tabs_RoundTab, null);

var _ref15 = Object(preact_min["h"])(
  'p',
  { 'class': 'caf-demo-title' },
  '\u5355\u72EC\u4F7F\u7528Nav'
);

var _ref16 = Object(preact_min["h"])(TabNav, { tabsData: tabs_tabsData, type: 'card' });

var _ref17 = Object(preact_min["h"])(
  'p',
  null,
  '\u5F53\u9700\u8981\u9690\u85CF\u6389\u67D0\u4E2Atab\u4F46\u91CC\u9762\u6D89\u53CA\u7684\u529F\u80FD\u9700\u8981\u4FDD\u7559\u65F6\uFF0C\u4F7F\u7528visable\u5C06\u8BE5tab\u6807\u7B7E\u9690\u85CF\u6389\uFF0C\u9700\u8981\u914D\u5408activeId \u66F4\u6539'
);

var tabs_TabsComp = function (_Component3) {
  components_tabs__inherits(TabsComp, _Component3);

  function TabsComp() {
    components_tabs__classCallCheck(this, TabsComp);

    return components_tabs__possibleConstructorReturn(this, _Component3.apply(this, arguments));
  }

  TabsComp.prototype.render = function render() {
    return Object(preact_min["h"])(
      'div',
      null,
      _ref11,
      _ref12,
      _ref13,
      _ref14,
      _ref15,
      Object(preact_min["h"])(
        'div',
        {
          style: {
            width: '100%',
            padding: '10px 20px',
            margin: '20px auto',
            background: '#3f77f6',
            boxSizing: 'border-box'
          }
        },
        _ref16
      ),
      _ref17
    );
  };

  return TabsComp;
}(preact_min["Component"]);



/***/ })

};;
//# sourceMappingURL=10.chunk.8ff10.js.map