webpackJsonp([15],{"0PF1":function(t,e,r){"use strict";function i(t){t=Number(t.replace("px",""));return t/14+"rem"}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=r("EBst"),c=(r("5D9O"),i),a=/\d+px/,u=function(t){var e=t.x,r=void 0===e?0:e,i=t.y,o=void 0===i?0:i,n=t.radius,u=void 0===n?50:n;return a.test(r)&&(r=c(r)),a.test(o)&&(o=c(o)),a.test(u)&&(u=c(u)),Object(s.h)("circle",{cx:r,cy:o,r:u})};u.defaultProps={x:0,y:0,radius:50};var d=u,h=/\d+px/,f=function(t){var e=t.x,r=void 0===e?0:e,i=t.y,o=void 0===i?0:i,n=t.radius,a=void 0===n?0:n,u=t.width,d=void 0===u?50:u,f=t.height,p=void 0===f?50:f;return h.test(r)&&(r=c(r)),h.test(o)&&(o=c(o)),h.test(a)&&(a=c(a)),h.test(d)&&(d=c(d)),h.test(p)&&(p=c(p)),Object(s.h)("rect",{x:r,y:o,rx:a,ry:a,width:d,height:p})};f.defaultProps={x:0,y:0,radius:50};var p,l,b=f,y=/\d+px/,O=function(){return Math.random().toString(36).substring(2)},j=(l=p=function(t){function e(){return o(this,t.apply(this,arguments))}return n(e,t),e.prototype.render=function(t){var e=t.width,r=t.height,i=t.style,o=t.speed,n=t.children,a=t.primaryColor,u=t.secondaryColor,d=O(),h=O();return y.test(e)&&(e=c(e)),y.test(r)&&(r=c(r)),Object(s.h)("svg",{width:e,height:r,version:"1.1",style:i,preserveAspectRatio:"xMidYMid meet"},Object(s.h)("rect",{style:{fill:"url(#"+h+")"},"clip-path":"url(#"+d+")",x:"0",y:"0",height:r,width:e}),Object(s.h)("defs",null,Object(s.h)("clipPath",{id:""+d},n),Object(s.h)("linearGradient",{id:""+h},Object(s.h)("stop",{offset:"0%","stop-color":a},Object(s.h)("animate",{attributeName:"offset",values:"-2; 1",dur:o+"s",repeatCount:"indefinite"})),Object(s.h)("stop",{offset:"50%","stop-color":u},Object(s.h)("animate",{attributeName:"offset",values:"-1.5; 1.5",dur:o+"s",repeatCount:"indefinite"})),Object(s.h)("stop",{offset:"100%","stop-color":a},Object(s.h)("animate",{attributeName:"offset",values:"-1; 2",dur:o+"s",repeatCount:"indefinite"})))))},e}(s.Component),p.Circle=d,p.Rect=b,p.defaultProps={speed:2,width:"100%",height:"9.28rem",primaryColor:"#f5f5f5",secondaryColor:"#eaeaea"},l),v=j,x=v.Circle,m=v.Rect,g=Object(s.h)("div",{style:"padding: 20px;background: #fff;"},Object(s.h)(v,{height:"70"},Object(s.h)(x,{radius:32,x:32,y:32}),Object(s.h)(m,{radius:4,width:120,height:20,x:80,y:10}),Object(s.h)(m,{radius:4,width:120,height:20,x:80,y:35}))),w=function(){return g};e.default=w}});