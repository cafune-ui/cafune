exports.ids = [20];
exports.modules = {

/***/ "OTkm":
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

// EXTERNAL MODULE: ../components/cell/index.jsx + 1 modules
var cell = __webpack_require__("z3JL");

// CONCATENATED MODULE: ../components/collapse/item.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





// import Icon from '../icon';

/**
 * 折叠面板子项
 */
var item_Item = (_temp2 = _class = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    var _temp, _this, _ret;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.contentRef = Object(preact_min["createRef"])(), _this.contentWrapRef = Object(preact_min["createRef"])(), _this.onToggle = function () {
      var _this$props = _this.props,
          id = _this$props.id,
          disabled = _this$props.disabled,
          onToggle = _this$props.onToggle;

      if (!disabled) {
        onToggle(id);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Item.prototype.updateStyle = function updateStyle() {
    var style = '';
    var actived = this.props.actived;
    /* istanbul ignore if  */

    if (this.contentWrapRef.current && this.contentRef.current) {
      style = 'max-height: ' + (actived ? this.contentWrapRef.current.offsetHeight : 0) + 'px';
      this.contentRef.current.style = style;
    }
  };

  Item.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updateStyle();
  };

  Item.prototype.componentDidMount = function componentDidMount() {
    this.updateStyle();
  };

  Item.prototype.render = function render(_ref) {
    var _cx, _cx2;

    var prefix = _ref.prefix,
        className = _ref.className,
        children = _ref.children,
        title = _ref.title,
        actived = _ref.actived,
        disabled = _ref.disabled,
        icon = _ref.icon,
        restProps = _objectWithoutProperties(_ref, ['prefix', 'className', 'children', 'title', 'actived', 'disabled', 'icon']);

    return Object(preact_min["h"])(
      'div',
      _extends({
        className: classnames_default()(prefix + '-item', className, (_cx = {}, _cx[prefix + '-item__disabled'] = disabled, _cx)),
        'data-status': actived ? 1 : 0
      }, restProps),
      Object(preact_min["h"])(
        'div',
        { className: classnames_default()(prefix + '-header', (_cx2 = {}, _cx2[prefix + '-header__default'] = icon === Item.defaultProps.icon, _cx2)), onClick: this.onToggle },
        Object(preact_min["h"])(cell["a" /* default */], { title: title, rightIcon: icon })
      ),
      Object(preact_min["h"])(
        'div',
        { className: prefix + '-wrapper', ref: this.contentRef },
        Object(preact_min["h"])(
          'div',
          { className: prefix + '-wrapper-content', ref: this.contentWrapRef },
          children
        )
      )
    );
  };

  return Item;
}(preact_min["Component"]), _class.displayName = 'CollapseItem', _class.defaultProps = {
  prefix: 'caf-collapse',
  icon: 'arrow_right',
  disabled: false
}, _class.propType = {
  /**
   * 标题
   */
  title: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.node]).isRequired,
  /**
   * 自定义前缀
   */
  prefix: prop_types_default.a.string,
  /**
   * 是否处于激活状态
   */
  actived: prop_types_default.a.bool,
  /**
   * 是否禁用此单元
   */
  disabled: prop_types_default.a.bool,
  /**
  * 右侧按钮
  */
  icon: prop_types_default.a.string
}, _temp2);


/* harmony default export */ var collapse_item = (item_Item);
// CONCATENATED MODULE: ../components/collapse/index.jsx
var collapse__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var collapse__class, collapse__temp2;



function collapse__objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function collapse__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function collapse__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function collapse__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






function checkIfItem(el) {
  return el.nodeName.displayName === "CollapseItem";
}

/**
 * 折叠面板
 * @example
 * ```javascript
 * const CollapseItem = Collapse.Item;
 * // ...
 * <Collapse actives={activeCol} onChange={this.onChange}>
 *  <CollapseItem title="标题1" id="a">
 *    内容1
 *  </CollapseItem>
 *  <CollapseItem title="标题2" id="b">
 *    内容2
 *  </CollapseItem>
 *  <CollapseItem title="标题3" id="c" disabled>
 *    内容3
 *  </CollapseItem>
 * </Collapse>
 * ```
 */
var collapse_Collapse = (collapse__temp2 = collapse__class = function (_Component) {
  collapse__inherits(Collapse, _Component);

  function Collapse() {
    var _temp, _this, _ret;

    collapse__classCallCheck(this, Collapse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = collapse__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      actives: _this.props.actives
    }, _this.onToggle = function (id) {
      var actives = _this.state.actives;

      if (Array.isArray(actives)) {
        var idInd = actives.indexOf(id);
        if (idInd === -1) {
          actives.push(id);
        } else {
          actives.splice(idInd, 1);
        }
      } else {
        actives = actives === id ? '' : id;
      }
      _this.setState({
        actives: actives
      });
    }, _temp), collapse__possibleConstructorReturn(_this, _ret);
  }

  Collapse.prototype.renderContent = function renderContent(data) {
    var _this2 = this;

    var panels = [];
    if (data && data.length) {
      panels = data.map(function (item) {
        return Object(preact_min["h"])(
          collapse_item,
          collapse__extends({}, item, { onToggle: _this2.onToggle }),
          item.content
        );
      });
      return panels;
    }
    return null;
  };

  Collapse.prototype.getListData = function getListData(children, actives, accordion) {
    if (accordion) {
      if (Array.isArray(actives)) {
        console.error("actives should be a String while using accordion");
        return;
      }
    } else if (typeof actives === "string") {
      actives = [actives];
    }
    var data = [];
    children.forEach(function (item) {
      if (checkIfItem(item)) {
        var props = item.attributes;
        var id = props.id;
        var _children = item.children;

        var actived = false;
        if (actives && id) actived = typeof actives === "string" ? actives == id : actives.indexOf(id) !== -1;
        data.push(collapse__extends({
          actived: actived,
          content: _children
        }, props));
      }
    });
    return data;
  };

  Collapse.prototype.renderList = function renderList() {
    var _props = this.props,
        prefix = _props.prefix,
        children = _props.children,
        accordion = _props.accordion,
        className = _props.className,
        restProps = collapse__objectWithoutProperties(_props, ['prefix', 'children', 'accordion', 'className']);

    var actives = this.state.actives;

    var listData = this.getListData(children, actives, accordion);
    return Object(preact_min["h"])(
      'div',
      collapse__extends({ className: classnames_default()(prefix, className) }, restProps),
      this.renderContent(listData)
    );
  };

  Collapse.prototype.render = function render() {
    return this.renderList();
  };

  return Collapse;
}(preact_min["Component"]), collapse__class.Item = collapse_item, collapse__class.defaultProps = {
  accordion: false,
  prefix: "caf-collapse"
}, collapse__class.propType = {
  /**
   * 是否开启手风琴效果
    */
  accordion: prop_types_default.a.bool,
  /**
   * 自定义前缀
    */
  prefix: prop_types_default.a.string
}, collapse__temp2);

/* harmony default export */ var collapse = (collapse_Collapse);
// CONCATENATED MODULE: ./pages/components/collapse/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return collapse_CollapseCom; });



function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function components_collapse__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function components_collapse__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function components_collapse__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var CollapseItem = collapse.Item;

var _ref3 = Object(preact_min["h"])(
  'p',
  null,
  '\u9ED8\u8BA4\u6A21\u5F0F'
);

var _ref4 = Object(preact_min["h"])(
  CollapseItem,
  { title: '\u57FA\u7840\u7EC4\u4EF6', id: 'basic' },
  Object(preact_min["h"])(
    'div',
    { style: 'padding: 15px' },
    '\u9ED8\u8BA4\u5F00\u542F'
  )
);

var _ref5 = Object(preact_min["h"])(
  CollapseItem,
  { title: '\u5C55\u793A\u7EC4\u4EF6', id: 'display' },
  Object(preact_min["h"])(
    'div',
    { style: 'padding: 15px' },
    '\u9ED8\u8BA4\u5173\u95ED'
  )
);

var _ref6 = Object(preact_min["h"])(
  'p',
  null,
  '\u624B\u98CE\u8F66\u6548\u679C\uFF08\u53EA\u5F00\u4E00\u4E2A\uFF09'
);

var _ref7 = Object(preact_min["h"])(
  CollapseItem,
  { title: '\u57FA\u7840\u7EC4\u4EF6', id: 'basic' },
  Object(preact_min["h"])(
    'div',
    { style: 'padding: 15px' },
    '\u9ED8\u8BA4\u5F00\u542F\u5185\u5BB9'
  )
);

var _ref8 = Object(preact_min["h"])(
  CollapseItem,
  { title: '\u5C55\u793A\u7EC4\u4EF6', id: 'display' },
  Object(preact_min["h"])(
    'div',
    { style: 'padding: 15px' },
    '\u9ED8\u8BA4\u5173\u95ED'
  )
);

var _ref9 = Object(preact_min["h"])(
  CollapseItem,
  { title: '\u5C55\u793A\u7EC4\u4EF6(\u7981\u7528)', id: 'disabled', disabled: true },
  '\u9ED8\u8BA4\u5173\u95ED'
);

var collapse_CollapseCom = function (_Component) {
  components_collapse__inherits(CollapseCom, _Component);

  function CollapseCom() {
    var _temp, _this, _ret;

    components_collapse__classCallCheck(this, CollapseCom);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = components_collapse__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      actives: 'basic',
      activeCol: []
    }, _this.onChange = function (name) {
      return function (actives) {
        var _this$setState;

        _this.setState((_this$setState = {}, _this$setState[name] = actives, _this$setState));
      };
    }, _temp), components_collapse__possibleConstructorReturn(_this, _ret);
  }

  CollapseCom.prototype.render = function render(_ref, _ref2) {
    var actives = _ref2.actives,
        activeCol = _ref2.activeCol;

    _objectDestructuringEmpty(_ref);

    return Object(preact_min["h"])(
      'div',
      { 'class': '' },
      _ref3,
      Object(preact_min["h"])(
        collapse,
        { actives: activeCol, onChange: this.onChange('activeCol') },
        _ref4,
        _ref5
      ),
      _ref6,
      Object(preact_min["h"])(
        collapse,
        { actives: actives, accordion: true },
        _ref7,
        _ref8,
        _ref9
      )
    );
  };

  return CollapseCom;
}(preact_min["Component"]);



/***/ })

};;
//# sourceMappingURL=20.chunk.dc501.js.map