const isSupportTouch =
  !!(typeof window !== 'undefined' && window) && 'ontouchend' in document
    ? true
    : false;
export const touchEventMap = isSupportTouch
  ? {
      down: 'touchstart',
      move: 'touchmove',
      up: 'touchend',
      over: 'touchstart',
      out: 'touchcancel'
    }
  : {
      down: 'mousedown',
      move: 'mousemove',
      up: 'mouseup',
      over: 'mouseover',
      out: 'mouseout'
    };

export const getTouch = (e, type?) =>
  isSupportTouch
    ? type === 'touchend'
      ? e.changedTouches[0]
      : e.targetTouches[0]
    : e;
