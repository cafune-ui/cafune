exports.ids = [7];
exports.modules = {

/***/ "7Yvu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridComp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cafune_components_icon__ = __webpack_require__("zHj6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cafune_components_grid__ = __webpack_require__("F3q8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon_list__ = __webpack_require__("6E4v");




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Item = __WEBPACK_IMPORTED_MODULE_1_cafune_components_grid__["a" /* default */].Item;



var GridComp = function (_Component) {
  _inherits(GridComp, _Component);

  function GridComp() {
    _classCallCheck(this, GridComp);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  GridComp.prototype.render = function render() {
    return Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(
      'div',
      null,
      Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(
        __WEBPACK_IMPORTED_MODULE_1_cafune_components_grid__["a" /* default */],
        { square: false },
        __WEBPACK_IMPORTED_MODULE_3__icon_list__["default"].map(function (item) {
          return Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(
            Item,
            { key: item },
            Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(__WEBPACK_IMPORTED_MODULE_0_cafune_components_icon__["a" /* default */], { icon: item }),
            Object(__WEBPACK_IMPORTED_MODULE_2_preact__["h"])(
              'span',
              null,
              item
            )
          );
        })
      )
    );
  };

  return GridComp;
}(__WEBPACK_IMPORTED_MODULE_2_preact__["Component"]);



/***/ }),

/***/ "F3q8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("EBst");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("5D9O");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("9qb7");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ../components/grid/item.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * 宫格单元
 */
var item_GridItem = (_temp = _class = function (_Component) {
  _inherits(GridItem, _Component);

  function GridItem() {
    _classCallCheck(this, GridItem);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  GridItem.prototype.render = function render(_ref, _ref2, _ref3) {
    var gutter = _ref3.gutter,
        column = _ref3.column,
        square = _ref3.square;

    _objectDestructuringEmpty(_ref2);

    var prefix = _ref.prefix,
        className = _ref.className,
        ind = _ref.ind,
        icon = _ref.icon,
        text = _ref.text,
        children = _ref.children,
        restProps = _objectWithoutProperties(_ref, ['prefix', 'className', 'ind', 'icon', 'text', 'children']);

    var percent = 100 / column + '%';
    var sty = {
      flexBasis: percent
    };
    var innerStyle = {};
    if (square) {
      sty.paddingTop = percent;
      if (gutter) {
        var halfGutter = gutter / 2;
        innerStyle = {
          right: halfGutter,
          left: halfGutter,
          top: halfGutter,
          bottom: halfGutter,
          height: 'auto'
        };
      }
    } else if (gutter) {
      sty.paddingRight = gutter;
      if (ind > column) {
        sty.marginTop = gutter;
      }
    }
    return Object(preact_min["h"])(
      'div',
      _extends({ className: classnames_default()(prefix, className), style: sty }, restProps),
      Object(preact_min["h"])(
        'div',
        { className: prefix + '-inner', style: innerStyle },
        children
      )
    );
  };

  return GridItem;
}(preact_min["Component"]), _class.displayName = 'GridItem', _class.defaultProps = {
  prefix: 'caf-grid-item'
}, _temp);

/* harmony default export */ var item = (item_GridItem);
// CONCATENATED MODULE: ../components/grid/index.jsx
var grid__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var grid__class, grid__temp;



function grid__objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function grid__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function grid__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function grid__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * 宫格
 */
var grid_Grid = (grid__temp = grid__class = function (_Component) {
  grid__inherits(Grid, _Component);

  function Grid() {
    grid__classCallCheck(this, Grid);

    return grid__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Grid.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
        gutter = _props.gutter,
        border = _props.border,
        square = _props.square,
        center = _props.center,
        column = _props.column;

    return {
      gutter: gutter,
      square: square,
      border: border,
      center: center,
      column: column
    };
  };

  Grid.prototype.renderChildren = function renderChildren() {
    var children = this.props.children;

    if (children && children.length) {
      var result = [];
      var ind = 0;
      children.forEach(function (item) {
        if (item.nodeName.displayName === 'GridItem') {
          ind += 1;
          item.attributes.ind = ind;
          result.push(item);
        }
      });
      return result;
    }
    return null;
  };

  Grid.prototype.render = function render(_ref) {
    var _cx;

    var prefix = _ref.prefix,
        className = _ref.className,
        square = _ref.square,
        border = _ref.border,
        center = _ref.center,
        gutter = _ref.gutter,
        restProps = grid__objectWithoutProperties(_ref, ['prefix', 'className', 'square', 'border', 'center', 'gutter']);

    return Object(preact_min["h"])(
      'div',
      grid__extends({
        className: classnames_default()(prefix, className, (_cx = {}, _cx[prefix + '__square'] = square, _cx[prefix + '__border'] = border, _cx[prefix + '__center'] = center, _cx[prefix + '__surround'] = border && gutter, _cx))
      }, restProps),
      this.renderChildren()
    );
  };

  return Grid;
}(preact_min["Component"]), grid__class.Item = item, grid__class.defaultProps = {
  prefix: 'caf-grid',
  column: 4,
  square: true,
  border: true,
  center: true,
  gutter: 0
}, grid__temp);

/* harmony default export */ var grid = __webpack_exports__["a"] = (grid_Grid);

/***/ })

};;
//# sourceMappingURL=7.chunk.816e3.js.map