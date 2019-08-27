exports.ids = [18];
exports.modules = {

/***/ "gATp":
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

// CONCATENATED MODULE: ../components/pull-refresh/index.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var MIN_DISTANCE = 10;
function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }
  return '';
}

function setTransform(obj, offsetY) {
  obj.style.transform = 'translate3d(0, ' + offsetY + 'px, 0)';
  obj.style.msTransform = 'translate3d(0, ' + offsetY + 'px, 0)';
  obj.style.MozTransform = 'translate3d(0, ' + offsetY + 'px, 0)';
  obj.style.webkitTransform = 'translate3d(0, ' + offsetY + 'px, 0)';
}

function getScrolltop() {
  return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
}
var stateMap = {
  'loosing': '',
  'pulling': '释放可刷新',
  'loading': '加载中...'
  /**
   * 下拉刷新
   */
};var pull_refresh_PullRefresh = (_temp2 = _class = function (_Component) {
  _inherits(PullRefresh, _Component);

  function PullRefresh() {
    var _temp, _this, _ret;

    _classCallCheck(this, PullRefresh);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      status: 'normal',
      height: 0
    }, _this.pullrefresh = Object(preact_min["createRef"])(), _this.pullrefresh_loading = Object(preact_min["createRef"])(), _this.headHeight = 50, _this.touchStart = function (event) {
      _this.resetTouchStatus();
      _this.startX = event.touches[0].clientX;
      _this.startY = event.touches[0].clientY;
    }, _this.touchMove = function (event) {
      var touch = event.touches[0];
      _this.deltaX = touch.clientX - _this.startX;
      _this.deltaY = touch.clientY - _this.startY;
      _this.offsetX = Math.abs(_this.deltaX);
      _this.offsetY = Math.abs(_this.deltaY);
      _this.direction = _this.direction || getDirection(_this.offsetX, _this.offsetY);
    }, _this.resetTouchStatus = function () {
      _this.direction = '';
      _this.deltaX = 0;
      _this.deltaY = 0;
      _this.offsetX = 0;
      _this.offsetY = 0;
    }, _this.onTouchStart = function (event) {
      // console.log('start')
      if (!_this.untouchable() && _this.getCeiling()) {
        _this.touchStart(event);
      }
    }, _this.onTouchMove = function (event) {
      if (_this.untouchable()) {
        return;
      }
      _this.touchMove(event);
      if (!_this.ceiling && _this.getCeiling()) {
        _this.startY = event.touches[0].clientY;
        _this.deltaY = 0;
      }
      if (_this.ceiling && _this.deltaY >= 0) {
        if (_this.direction === 'vertical') {
          _this.setStatus(_this.ease(_this.deltaY));
          event.cancelable && event.preventDefault();
        }
      }
    }, _this.onTouchEnd = function () {
      // console.log('end');
      if (!_this.untouchable() && _this.ceiling && _this.deltaY) {
        if (_this.state.status === 'loosing') {
          _this.props.onRefresh && _this.props.onRefresh();
          _this.setStatus(_this.headHeight, true);
        } else {
          _this.setStatus(0);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  PullRefresh.prototype.componentDidMount = function componentDidMount() {
    if (this.pullrefresh) {
      var pullrefresh = this.pullrefresh.current;
      pullrefresh.addEventListener('touchstart', this.onTouchStart, false);
      pullrefresh.addEventListener('touchmove', this.onTouchMove, false);
      pullrefresh.addEventListener('touchend', this.onTouchEnd, false);
      pullrefresh.addEventListener('touchcancel', this.onTouchEnd, false);
    }
  };

  PullRefresh.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.pullrefresh) {
      var pullrefresh = this.pullrefresh.current;
      pullrefresh.removeEventListener('touchstart', this.onTouchStart, false);
      pullrefresh.removeEventListener('touchmove', this.onTouchMove, false);
      pullrefresh.removeEventListener('touchend', this.onTouchEnd, false);
      pullrefresh.removeEventListener('touchcancel', this.onTouchEnd, false);
    }
  };

  PullRefresh.prototype.untouchable = function untouchable() {
    return this.state.status === 'loading' || this.state.status === 'success' || this.props.disabled;
  };

  PullRefresh.prototype.getCeiling = function getCeiling() {
    this.ceiling = getScrolltop() === 0;
    return this.ceiling;
  };

  PullRefresh.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!nextProps.loading) {
      this.setStatus(0);
    } else {
      this.setStatus(nextProps.loading ? this.headHeight : 0, nextProps.loading);
    }
  };

  PullRefresh.prototype.ease = function ease(height) {
    var headHeight = this.headHeight;

    return height < headHeight ? height : height < headHeight * 2 ? Math.round(headHeight + (height - headHeight) / 2) : height > headHeight * 1.5 ? headHeight * 1.5 : Math.round(headHeight * 1.5 + (height - headHeight * 2) / 4);
  };

  PullRefresh.prototype.setStatus = function setStatus(height, isLoading) {
    setTransform(this.pullrefresh_loading.current, height);
    var status = isLoading ? 'loading' : height === 0 ? 'normal' : height < this.headHeight ? 'pulling' : 'loosing';
    if (status !== this.state.status) {
      this.setState({
        status: status
      });
    }
  };

  PullRefresh.prototype.render = function render(_ref) {
    var prefix = _ref.prefix,
        className = _ref.className,
        children = _ref.children,
        restProps = _objectWithoutProperties(_ref, ['prefix', 'className', 'children']);

    return Object(preact_min["h"])(
      'div',
      _extends({ className: classnames_default()(prefix, className), ref: this.pullrefresh }, restProps),
      Object(preact_min["h"])('span', { className: prefix + '-loading', ref: this.pullrefresh_loading }),
      children
    );
  };

  return PullRefresh;
}(preact_min["Component"]), _class.defaultProps = {
  prefix: 'caf-pullref'
}, _temp2);

/* harmony default export */ var pull_refresh = (pull_refresh_PullRefresh);
// CONCATENATED MODULE: ./pages/components/pull-refresh/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pull_refresh_GridComp; });



function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function pull_refresh__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pull_refresh__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function pull_refresh__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var pull_refresh_GridComp = function (_Component) {
  pull_refresh__inherits(GridComp, _Component);

  function GridComp() {
    var _temp, _this, _ret;

    pull_refresh__classCallCheck(this, GridComp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = pull_refresh__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      count: 1,
      loading: false
    }, _this.onRefresh = function () {
      setTimeout(function () {
        console.log('刷新成功');
        _this.setState({
          loading: false,
          count: _this.state.count + 1
        });
      }, 2000);
    }, _temp), pull_refresh__possibleConstructorReturn(_this, _ret);
  }

  GridComp.prototype.render = function render(_ref, _ref2) {
    var loading = _ref2.loading,
        count = _ref2.count;

    _objectDestructuringEmpty(_ref);

    return Object(preact_min["h"])(
      pull_refresh,
      { loading: loading, onRefresh: this.onRefresh },
      Object(preact_min["h"])(
        'div',
        { 'class': 'caf-demo-block', style: 'min-height: 500px;' },
        'count: ',
        count
      )
    );
  };

  return GridComp;
}(preact_min["Component"]);



/***/ })

};;
//# sourceMappingURL=18.chunk.8282a.js.map