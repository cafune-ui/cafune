webpackJsonp([13],{"7f35":function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t){return"Step"===t.nodeName.displayName}function f(t){if(null==t)throw new TypeError("Cannot destructure undefined")}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function b(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var d,y,O,j,m=n("zcpj"),v=n("EBst"),w=(n("5D9O"),n("9qb7")),S=n.n(w),N=n("zHj6"),_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},x=Object(v.h)(N.a,{icon:"check"}),g=Object(v.h)(N.a,{icon:"wrong"}),P=function(t,e,n,r){return n?Object(v.h)("span",{className:t+"-icon-decimal"},r):"finish"===e?Object(v.h)("span",{className:t+"-icon-container"},x):"error"===e?Object(v.h)("span",{className:t+"-icon-container"},g):Object(v.h)("i",{className:t+"-icon-circle"})},E=(y=d=function(t){function e(){return o(this,t.apply(this,arguments))}return c(e,t),e.prototype.renderIcon=function(){var t=this.props,e=t.prefix,n=t.icons,r=t.ind,o=t.status,c=this.context.isDecimalInd;return n&&n[o]?"string"==typeof n[o]?Object(v.h)(N.a,{icon:n[o]}):n[o]:P(e,o,c,r)},e.prototype.render=function(t){var e=t.prefix,n=t.className,o=t.title,c=t.desc,i=t.status,s=r(t,["prefix","className","title","desc","status"]);return Object(v.h)("div",_({className:S()(e,n,e+"__"+i)},s),Object(v.h)("div",{className:e+"-tail"}),Object(v.h)("div",{className:e+"-icon"},this.renderIcon()),Object(v.h)("div",{className:e+"-content"},!!o&&Object(v.h)("div",{className:e+"-content-title"},o),!!c&&Object(v.h)("div",{className:e+"-content-desc"},c)))},e}(v.Component),d.displayName="Step",d.defaultProps={prefix:"caf-step",status:"pend"},y),C=E,k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},I=(j=O=function(t){function e(){return s(this,e),a(this,t.apply(this,arguments))}return p(e,t),e.prototype.getChildContext=function(){return{isDecimalInd:this.props.isDecimalInd}},e.prototype.renderSteps=function(){var t=this.props,e=t.children,n=t.step,r=t.status,o=t.icons,c=[];return e.forEach(function(t,e){if(t&&u(t)){var i={ind:e},s=t.attributes;s.status||(i.status=n===e?r:e<n?"finish":"pend"),s.icons&&o&&Object.keys(o).length&&(i.icons=k({},o,s.icons)),c.push(Object(v.cloneElement)(t,i))}}),c},e.prototype.render=function(t){var e=t.prefix,n=t.className,r=t.direction,o=i(t,["prefix","className","direction"]);return Object(v.h)("div",k({className:S()(e,n,e+"__"+r)},o),this.renderSteps())},e}(v.Component),O.Step=C,O.defaultProps={prefix:"caf-steps",step:0,status:"process",direction:"horizontal"},j),T=I;n.d(e,"default",function(){return H});var D=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},z=T.Step,R=[{title:"Step 1",desc:"this is the step 1"},{title:"Step 2",icons:{pend:"search",finish:"notice"},status:"error"},{title:"Step 3",icon:{error:"search",process:"notice"},desc:"now is the step 3"},{title:"Step 4",desc:"this is the step 4"},{title:"Step 5"}],q=Object(v.h)("p",{class:"caf-demo-title"},"默认用法"),A=Object(v.h)("p",{class:"caf-demo-title"},"数字进度"),B=Object(v.h)("p",{class:"caf-demo-title"},"垂直方向"),H=function(t){function e(){var n,r,o;l(this,e);for(var c=arguments.length,i=Array(c),s=0;s<c;s++)i[s]=arguments[s];return n=r=h(this,t.call.apply(t,[this].concat(i))),r.state={current:3},r.nextStep=function(){var t=r.state.current;r.setState({current:t===R.length?0:t+1})},o=n,h(r,o)}return b(e,t),e.prototype.renderSteps=function(){return R.map(function(t,e){return Object(v.h)(z,D({},t,{key:e}))})},e.prototype.render=function(t,e){var n=e.current;return f(t),Object(v.h)("div",{class:"caf-demo-block"},Object(v.h)(m.a,{onClick:this.nextStep},"下一步"),q,Object(v.h)(T,{step:n},this.renderSteps()),A,Object(v.h)(T,{step:n,isDecimalInd:!0},this.renderSteps()),B,Object(v.h)(T,{step:n,direction:"vertical"},this.renderSteps()))},e}(v.Component)}});