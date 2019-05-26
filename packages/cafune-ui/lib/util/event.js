"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTouch = exports.touchEventMap = void 0;
var isSupportTouch = !!(typeof window !== 'undefined' && window) && 'ontouchend' in document ? true : false;
var touchEventMap = isSupportTouch ? {
  down: 'touchstart',
  move: 'touchmove',
  up: 'touchend',
  over: 'touchstart',
  out: 'touchcancel'
} : {
  down: 'mousedown',
  move: 'mousemove',
  up: 'mouseup',
  over: 'mouseover',
  out: 'mouseout'
};
exports.touchEventMap = touchEventMap;

var getTouch = function getTouch(e, type) {
  return isSupportTouch ? type === 'touchend' ? e.changedTouches[0] : e.targetTouches[0] : e;
};

exports.getTouch = getTouch;