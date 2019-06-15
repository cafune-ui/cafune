"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Pagination = void 0;

var _preact = require("preact");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function changeFn(direction, pn, pages, onChange) {
  pn = Number(pn);

  if (pn < pages && direction === 1 || pn > 1 && direction === -1) {
    return function () {
      onChange(pn + direction);
    };
  }

  return function () {};
}

var Pagination = function Pagination(_ref) {
  var pn = _ref.pn,
      pages = _ref.pages,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;
  var prevCx = (0, _classnames["default"])(style.pagination_btn, _defineProperty({}, style.pagination_btn__disabled, pn <= 1));
  var nextCx = (0, _classnames["default"])(style.pagination_btn, _defineProperty({}, style.pagination_btn__disabled, pn >= pages));
  return (0, _preact.h)("div", {
    "class": style.pagination
  }, (0, _preact.h)("button", {
    onClick: changeFn(-1, pn, pages, onChange),
    "class": prevCx
  }, "\u4E0A\u4E00\u9875"), (0, _preact.h)("span", {
    "class": style.pagination_indicator
  }, pn, " / ", pages), (0, _preact.h)("button", {
    onClick: changeFn(1, pn, pages, onChange),
    "class": nextCx
  }, "\u4E0B\u4E00\u9875"));
};

exports.Pagination = Pagination;
var _default = Pagination;
exports["default"] = _default;