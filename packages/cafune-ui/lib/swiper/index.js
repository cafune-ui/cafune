"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Swiper = void 0;

var _preact = require("preact");

var _item = _interopRequireDefault(require("./components/item"));

var _event = require("../util/event");

var _style = _interopRequireDefault(require("./style.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// function checkIfIndicaotr(el) {
//   return el.nodeName.displayName === 'SwiperIndicator';
// }
function checkIfItem(el) {
  return el.nodeName.displayName === 'swiperItem';
}

var Swiper =
/*#__PURE__*/
function (_Component) {
  _inherits(Swiper, _Component);

  function Swiper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Swiper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Swiper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      current: _this.props.initialIndex
    });

    _defineProperty(_assertThisInitialized(_this), "total", 0);

    _defineProperty(_assertThisInitialized(_this), "autoPlayTimer", void 0);

    _defineProperty(_assertThisInitialized(_this), "size", 0);

    _defineProperty(_assertThisInitialized(_this), "swiperCurrent", 0);

    _defineProperty(_assertThisInitialized(_this), "resize", function () {
      var container = _this.swiperContainer.current;

      if (container) {
        var size = container.getBoundingClientRect();
        _this.size = size.width;
      }

      var rect = _this.swiperList.current;

      if (rect) {
        rect.style.width = "".concat(_this.size * _this.swiperData.length, "px");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isSwiping", false);

    _defineProperty(_assertThisInitialized(_this), "startX", void 0);

    _defineProperty(_assertThisInitialized(_this), "deltaX", void 0);

    _defineProperty(_assertThisInitialized(_this), "offsetX", 0);

    _defineProperty(_assertThisInitialized(_this), "direction", void 0);

    _defineProperty(_assertThisInitialized(_this), "onSwiperClick", function (e) {
      if (_this.offsetX > 0) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "readyMoving", function (e) {
      _this.startTimeStamp = Date.now();

      _this.clearAutoPlay();

      _this.isSwiping = true;
      var touch = (0, _event.getTouch)(e);
      _this.startX = touch.clientX;
    });

    _defineProperty(_assertThisInitialized(_this), "startMoving", function (e) {
      if (!_this.isSwiping) return;
      var touch = (0, _event.getTouch)(e);
      _this.deltaX = touch.clientX - _this.startX;
      _this.offsetX = Math.abs(_this.deltaX);
      _this.direction = _this.deltaX >= 0 ? -1 : 1;
      e.preventDefault();
      e.stopPropagation();

      _this.moveTo({
        offset: "".concat(_this.state.current * _this.size * -1 + _this.deltaX, "px")
      });
    });

    _defineProperty(_assertThisInitialized(_this), "endMoving", function () {
      if (!_this.isSwiping) return;
      _this.isSwiping = false; // 是否已经在第一或最后一张

      var inBound = _this.state.current + _this.direction >= 0 && _this.state.current + _this.direction < _this.swiperData.length;

      if (_this.offsetX < _this.size / 4 || !inBound) {
        _this.moveTo({
          ind: _this.state.current
        });
      } else if (inBound) {
        _this.moveTo({
          ind: _this.state.current + _this.direction
        });
      }

      setTimeout(function () {
        return _this.offsetX = 0;
      }, 500);
    });

    _defineProperty(_assertThisInitialized(_this), "swiperData", void 0);

    _defineProperty(_assertThisInitialized(_this), "swiperList", (0, _preact.createRef)());

    _defineProperty(_assertThisInitialized(_this), "swiperContainer", (0, _preact.createRef)());

    return _this;
  }

  _createClass(Swiper, [{
    key: "getSwiperData",
    value: function getSwiperData(children) {
      var _this2 = this;

      var data = [];
      children.forEach(function (item, ind) {
        if (item && checkIfItem(item)) {
          var props = item.attributes;
          var className = props.className;
          var _children = item.children;
          data.push({
            id: ind,
            actived: ind === _this2.state.current,
            content: _children,
            className: className
          });
        }
      });
      return data;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resize();
      window.addEventListener('resize', this.resize);
      var rect = this.swiperList.current;

      if (rect) {
        rect.addEventListener('click', this.onSwiperClick, true);
        rect.addEventListener(_event.touchEventMap.down, this.readyMoving);
        rect.addEventListener(_event.touchEventMap.move, this.startMoving);
        rect.addEventListener(_event.touchEventMap.up, this.endMoving);
        rect.addEventListener(_event.touchEventMap.out, this.endMoving);
      }

      this.moveTo({
        ind: this.state.current
      });
      this.autoPlay();
    }
  }, {
    key: "clearAutoPlay",
    value: function clearAutoPlay() {
      this.autoPlayTimer && clearTimeout(this.autoPlayTimer);
    }
  }, {
    key: "autoPlay",
    value: function autoPlay() {
      var _this3 = this;

      var _this$props = this.props,
          autoplay = _this$props.autoplay,
          intervel = _this$props.intervel;

      if (autoplay && this.swiperData.length > 1) {
        this.clearAutoPlay();
        this.autoPlayTimer = setTimeout(function () {
          _this3.swiperCurrent = _this3.state.current + 1;
          var current = _this3.state.current;
          current = current === _this3.swiperData.length - 1 ? 0 : current + 1;

          _this3.moveTo({
            ind: current
          });
        }, intervel);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearAutoPlay();
      var rect = this.swiperList.current;

      if (rect) {
        rect.removeEventListener('click', this.onSwiperClick, true);
        rect.removeEventListener(_event.touchEventMap.down, this.readyMoving);
        rect.removeEventListener(_event.touchEventMap.move, this.startMoving);
        rect.removeEventListener(_event.touchEventMap.up, this.endMoving);
        rect.removeEventListener(_event.touchEventMap.out, this.endMoving);
      }

      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: "moveTo",
    value: function moveTo(_ref) {
      var _this4 = this;

      var ind = _ref.ind,
          offset = _ref.offset;
      this.clearAutoPlay();

      if (this.swiperList && this.swiperList.current) {
        var $swiper = this.swiperList.current;

        if (ind !== undefined) {
          $swiper.style.transitionDuration = '500ms';
          $swiper.style.transform = "translate3d(".concat(ind * (1 / this.total) * -100, "%, 0, 0 )");
          this.setState({
            current: ind
          }, function () {
            _this4.autoPlay();

            _this4.props.onChange && _this4.props.onChange(ind);
          });
        } else if (offset) {
          // 在拖动时不要过渡时间，否则卡顿
          $swiper.style.transitionDuration = '0ms';
          $swiper.style.transform = "translate3d(".concat(offset, ", 0, 0 )");
        }
      }
    }
  }, {
    key: "renderIndicators",
    value: function renderIndicators(data) {
      var _this5 = this;

      return data && data.length > 1 ? Array.apply(void 0, _toConsumableArray(Array(data.length))).map(function (_, ind) {
        return (0, _preact.h)("span", {
          key: ind,
          "class": _style["default"].indicator,
          "data-status": ind === _this5.state.current ? 1 : 0,
          onClick: function onClick() {
            return _this5.moveTo({
              ind: ind
            });
          }
        });
      }) : null;
    }
  }, {
    key: "renderItems",
    value: function renderItems(data) {
      var _this6 = this;

      if (data && data.length) {
        return data.map(function (item) {
          return (0, _preact.h)(_item["default"], {
            key: item.id,
            onItemClick: _this6.onItemClick,
            actived: item.actived,
            width: "".concat(1 / data.length * 100, "%")
          }, item.content);
        });
      }
    }
  }, {
    key: "renderSwipers",
    value: function renderSwipers() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          showIndicators = _this$props2.showIndicators,
          customIndicator = _this$props2.customIndicator;

      if (children && children.length) {
        var swiperData = this.getSwiperData(children);
        this.swiperData = swiperData;
        this.total = swiperData.length;
        return (0, _preact.h)("div", {
          "class": _style["default"].swiper,
          ref: this.swiperContainer
        }, (0, _preact.h)("div", {
          "class": _style["default"].swiper_container,
          ref: this.swiperList
        }, this.renderItems(swiperData)), customIndicator ? customIndicator : showIndicators && (0, _preact.h)("div", {
          "class": _style["default"].swiper_indicator
        }, this.renderIndicators(swiperData)));
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderSwipers();
    }
  }]);

  return Swiper;
}(_preact.Component);

exports.Swiper = Swiper;

_defineProperty(Swiper, "SwiperItem", _item["default"]);

_defineProperty(Swiper, "defaultProps", {
  autoplay: true,
  intervel: 3000,
  initialIndex: 0,
  showIndicators: true
});

var _default = Swiper;
exports["default"] = _default;