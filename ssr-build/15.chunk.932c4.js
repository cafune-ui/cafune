exports.ids = [15];
exports.modules = {

/***/ "0PF1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("EBst");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("5D9O");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ../components/skeleton/rem.js
// import { isBrowser } from '../../util/isomorphic';
// let doc;
// if (isBrowser) {
//   doc = window.document.documentElement;
// }
function getRem(px) {
  px = Number(px.replace('px', ''));
  // const docWidth = isBrowser ? doc.clientWidth : 375;
  var rate = 14;
  // if (docWidth > 374) {
  //   rate = 14;
  // } else if (docWidth > 359) {
  //   rate = 13;
  // }
  // console.log(rate);
  return px / rate + 'rem';
}
/* harmony default export */ var rem = (getRem);
// CONCATENATED MODULE: ../components/skeleton/circle.jsx




var pxReg = /\d+px/;
var circle_Circle = function Circle(_ref) {
  var _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      _ref$radius = _ref.radius,
      radius = _ref$radius === undefined ? 50 : _ref$radius;

  if (pxReg.test(x)) x = rem(x);
  if (pxReg.test(y)) y = rem(y);
  if (pxReg.test(radius)) radius = rem(radius);
  return Object(preact_min["h"])('circle', { cx: x, cy: y, r: radius });
};

circle_Circle.defaultProps = {
  x: 0,
  y: 0,
  radius: 50
};
/* harmony default export */ var circle = (circle_Circle);
// CONCATENATED MODULE: ../components/skeleton/rect.jsx




var rect_pxReg = /\d+px/;
var rect_Rect = function Rect(_ref) {
  var _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      _ref$radius = _ref.radius,
      radius = _ref$radius === undefined ? 0 : _ref$radius,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 50 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 50 : _ref$height;

  if (rect_pxReg.test(x)) x = rem(x);
  if (rect_pxReg.test(y)) y = rem(y);
  if (rect_pxReg.test(radius)) radius = rem(radius);
  if (rect_pxReg.test(width)) width = rem(width);
  if (rect_pxReg.test(height)) height = rem(height);
  return Object(preact_min["h"])('rect', { x: x, y: y, rx: radius, ry: radius, width: width, height: height });
};

rect_Rect.defaultProps = {
  x: 0,
  y: 0,
  radius: 50
};
/* harmony default export */ var rect = (rect_Rect);
// CONCATENATED MODULE: ../components/skeleton/index.jsx
var _class, _temp;



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var skeleton_pxReg = /\d+px/;
var uid = function uid() {
  return Math.random().toString(36).substring(2);
};
/**
 * 骨架屏
 * @example
 * ```javascript
 * <Skeleton>
 *   <Circle radius={32} x={32} y={32} />
 *   <Rect radius={4} width={120} height={20} x={80} y={10} />
 *   <Rect radius={4} width={120} height={20} x={80} y={35} />
 * </Skeleton>
 * ```
 */
var skeleton_Skeleton = (_temp = _class = function (_Component) {
  _inherits(Skeleton, _Component);

  function Skeleton() {
    _classCallCheck(this, Skeleton);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Skeleton.prototype.render = function render(_ref) {
    var width = _ref.width,
        height = _ref.height,
        style = _ref.style,
        speed = _ref.speed,
        children = _ref.children,
        primaryColor = _ref.primaryColor,
        secondaryColor = _ref.secondaryColor;

    var idClip = uid();
    var idGradient = uid();
    if (skeleton_pxReg.test(width)) width = rem(width);
    if (skeleton_pxReg.test(height)) height = rem(height);
    return Object(preact_min["h"])(
      'svg',
      {
        width: width,
        height: height,
        version: '1.1',
        style: style,
        preserveAspectRatio: 'xMidYMid meet'
      },
      Object(preact_min["h"])('rect', {
        style: { fill: 'url(#' + idGradient + ')' },
        'clip-path': 'url(#' + idClip + ')',
        x: '0',
        y: '0',
        height: height,
        width: width
      }),
      Object(preact_min["h"])(
        'defs',
        null,
        Object(preact_min["h"])(
          'clipPath',
          { id: '' + idClip },
          children
        ),
        Object(preact_min["h"])(
          'linearGradient',
          { id: '' + idGradient },
          Object(preact_min["h"])(
            'stop',
            { offset: '0%', 'stop-color': primaryColor },
            Object(preact_min["h"])('animate', {
              attributeName: 'offset',
              values: '-2; 1',
              dur: speed + 's',
              repeatCount: 'indefinite'
            })
          ),
          Object(preact_min["h"])(
            'stop',
            { offset: '50%', 'stop-color': secondaryColor },
            Object(preact_min["h"])('animate', {
              attributeName: 'offset',
              values: '-1.5; 1.5',
              dur: speed + 's',
              repeatCount: 'indefinite'
            })
          ),
          Object(preact_min["h"])(
            'stop',
            { offset: '100%', 'stop-color': primaryColor },
            Object(preact_min["h"])('animate', {
              attributeName: 'offset',
              values: '-1; 2',
              dur: speed + 's',
              repeatCount: 'indefinite'
            })
          )
        )
      )
    );
  };

  return Skeleton;
}(preact_min["Component"]), _class.Circle = circle, _class.Rect = rect, _class.defaultProps = {
  speed: 2,
  width: '100%',
  height: '9.28rem',
  primaryColor: '#f5f5f5',
  secondaryColor: '#eaeaea'
}, _temp);


/* harmony default export */ var skeleton = (skeleton_Skeleton);
// CONCATENATED MODULE: ./pages/components/skeleton/index.js


var skeleton_Circle = skeleton.Circle,
    skeleton_Rect = skeleton.Rect;

var skeleton__ref = Object(preact_min["h"])(
  "div",
  { style: "padding: 20px;background: #fff;" },
  Object(preact_min["h"])(
    skeleton,
    { height: "70" },
    Object(preact_min["h"])(skeleton_Circle, { radius: 32, x: 32, y: 32 }),
    Object(preact_min["h"])(skeleton_Rect, { radius: 4, width: 120, height: 20, x: 80, y: 10 }),
    Object(preact_min["h"])(skeleton_Rect, { radius: 4, width: 120, height: 20, x: 80, y: 35 })
  )
);

var SkeletonComp = function SkeletonComp() {
  return skeleton__ref;
};
/* harmony default export */ var components_skeleton = __webpack_exports__["default"] = (SkeletonComp);

/***/ })

};;
//# sourceMappingURL=15.chunk.932c4.js.map