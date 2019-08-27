exports.ids = [19];
exports.modules = {

/***/ "QeC9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("EBst");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("9qb7");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("5D9O");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ../components/pagination/index.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




function changeFn(direction, pn, pages, onChange) {
  pn = Number(pn);
  if (pn < pages && direction === 1 || pn > 1 && direction === -1 && onChange) {
    return function () {
      onChange(pn + direction);
    };
  }
  return function () {};
}
/**
 * 分页
 * @example
 * ```javascript
 * <Pagination pn={pn} pages={pages} onChange={this.onPageChange} />
 * ```
 */
var pagination_Pagination = function Pagination(_ref) {
  var _cx, _cx2;

  var prefix = _ref.prefix,
      pn = _ref.pn,
      className = _ref.className,
      pages = _ref.pages,
      onChange = _ref.onChange,
      restProps = _objectWithoutProperties(_ref, ['prefix', 'pn', 'className', 'pages', 'onChange']);

  var prevCx = classnames_default()(prefix + '-btn', (_cx = {}, _cx[prefix + '__disabled'] = pn <= 1, _cx));
  var nextCx = classnames_default()(prefix + '-btn', (_cx2 = {}, _cx2[prefix + '__disabled'] = pn >= pages, _cx2));

  return Object(preact_min["h"])(
    'div',
    _extends({ className: classnames_default()(prefix, className) }, restProps),
    Object(preact_min["h"])(
      'button',
      { onClick: changeFn(-1, pn, pages, onChange), className: prevCx },
      '\u4E0A\u4E00\u9875'
    ),
    Object(preact_min["h"])(
      'span',
      { className: prefix + '-indicator' },
      pn,
      ' / ',
      pages
    ),
    Object(preact_min["h"])(
      'button',
      { onClick: changeFn(1, pn, pages, onChange), className: nextCx },
      '\u4E0B\u4E00\u9875'
    )
  );
};
pagination_Pagination.defaultProps = {
  prefix: 'caf-page'

};


/* harmony default export */ var pagination = (pagination_Pagination);
// CONCATENATED MODULE: ./pages/components/pagination/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pagination_Page; });



function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var pagination_Page = function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    var _temp, _this, _ret;

    _classCallCheck(this, Page);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      pn: 1,
      pages: 3
    }, _this.onChange = function (pn) {
      _this.setState({
        pn: pn
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Page.prototype.render = function render(_ref, _ref2) {
    var pn = _ref2.pn,
        pages = _ref2.pages;

    _objectDestructuringEmpty(_ref);

    return Object(preact_min["h"])(
      'div',
      { 'class': 'caf-demo-block' },
      Object(preact_min["h"])(pagination, { pn: pn, pages: pages, onChange: this.onChange })
    );
  };

  return Page;
}(preact_min["Component"]);



/***/ })

};;
//# sourceMappingURL=19.chunk.e9e20.js.map