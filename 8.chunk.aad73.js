webpackJsonp([8],{"+mZQ":function(e,t,r){"use strict";function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"default",function(){return h});var c=r("zHj6"),i=r("F3q8"),a=r("EBst"),u=(r.n(a),r("6E4v")),p=i.a.Item,s=Object(a.h)("p",{class:"caf-demo-title"},"正常使用"),f=Object(a.h)("p",{class:"caf-demo-title"},"无边框"),l=Object(a.h)("p",{class:"caf-demo-title"},"不居中显示"),b=Object(a.h)("p",{class:"caf-demo-title"},"设置边距"),h=function(e){function t(){return n(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return Object(a.h)("div",null,Object(a.h)("div",{class:"caf-demo-block"},s,Object(a.h)(i.a,null,u.default.map(function(e){return Object(a.h)(p,{key:e},Object(a.h)(c.a,{icon:e}),Object(a.h)("span",null,e))})),f,Object(a.h)(i.a,{border:!1},u.default.map(function(e){return Object(a.h)(p,{key:e},Object(a.h)(c.a,{icon:e}),Object(a.h)("span",null,e))})),l,Object(a.h)(i.a,{center:!1},u.default.map(function(e){return Object(a.h)(p,{key:e},Object(a.h)(c.a,{icon:e}),Object(a.h)("span",null,e))})),b,Object(a.h)(i.a,{gutter:20},u.default.map(function(e){return Object(a.h)(p,{key:e},Object(a.h)(c.a,{icon:e}),Object(a.h)("span",null,e))}))))},t}(a.Component)},F3q8:function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e){if(null==e)throw new TypeError("Cannot destructure undefined")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f,l,b,h,d=r("EBst"),y=(r("5D9O"),r("9qb7")),O=r.n(y),j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m=(l=f=function(e){function t(){return c(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(e,t,r){var c=r.gutter,i=r.column,a=r.square;o(t);var u=e.prefix,p=e.className,s=e.ind,f=e.children,l=n(e,["prefix","className","ind","icon","text","children"]),b=100/i+"%",h={flexBasis:b},y={};if(a){if(h.paddingTop=b,c){var m=c/2;y={right:m,left:m,top:m,bottom:m,height:"auto"}}}else c&&(h.paddingRight=c,s>i&&(h.marginTop=c));return Object(d.h)("div",j({className:O()(u,p),style:h},l),Object(d.h)("div",{className:u+"-inner",style:y},f))},t}(d.Component),f.displayName="GridItem",f.defaultProps={prefix:"caf-grid-item"},l),v=m,g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w=(h=b=function(e){function t(){return u(this,t),p(this,e.apply(this,arguments))}return s(t,e),t.prototype.getChildContext=function(){var e=this.props;return{gutter:e.gutter,square:e.square,border:e.border,center:e.center,column:e.column}},t.prototype.renderChildren=function(){var e=this.props.children;if(e&&e.length){var t=[],r=0;return e.forEach(function(e){"GridItem"===e.nodeName.displayName&&(r+=1,e.attributes.ind=r,t.push(e))}),t}return null},t.prototype.render=function(e){var t,r=e.prefix,n=e.className,o=e.square,c=e.border,i=e.center,u=e.gutter,p=a(e,["prefix","className","square","border","center","gutter"]);return Object(d.h)("div",g({className:O()(r,n,(t={},t[r+"__square"]=o,t[r+"__border"]=c,t[r+"__center"]=i,t[r+"__surround"]=c&&u,t))},p),this.renderChildren())},t}(d.Component),b.Item=v,b.defaultProps={prefix:"caf-grid",column:4,square:!0,border:!0,center:!0,gutter:0},h);t.a=w}});