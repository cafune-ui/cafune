webpackJsonp([4,30],{"676T":function(e,c,t){"use strict";function o(e,c){var t={};for(var o in e)c.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}function l(e){if(null==e)throw new TypeError("Cannot destructure undefined")}function n(e,c){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!c||"object"!=typeof c&&"function"!=typeof c?e:c}function r(e,c){if("function"!=typeof c&&null!==c)throw new TypeError("Super expression must either be null or a function, not "+typeof c);e.prototype=Object.create(c&&c.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(e,c):e.__proto__=c)}function b(e,c){var t={};for(var o in e)c.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}function a(e,c){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}function i(e,c){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!c||"object"!=typeof c&&"function"!=typeof c?e:c}function h(e,c){if("function"!=typeof c&&null!==c)throw new TypeError("Super expression must either be null or a function, not "+typeof c);e.prototype=Object.create(c&&c.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(e,c):e.__proto__=c)}function O(e,c){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}function j(e,c){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!c||"object"!=typeof c&&"function"!=typeof c?e:c}function s(e,c){if("function"!=typeof c&&null!==c)throw new TypeError("Super expression must either be null or a function, not "+typeof c);e.prototype=Object.create(c&&c.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(e,c):e.__proto__=c)}Object.defineProperty(c,"__esModule",{value:!0});var f,u,p,d,m=t("EBst"),y=(t("5D9O"),t("9qb7")),v=t.n(y),g=Object.assign||function(e){for(var c=1;c<arguments.length;c++){var t=arguments[c];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},w=(u=f=function(e){function c(){return n(this,e.apply(this,arguments))}return r(c,e),c.prototype.render=function(e,c,t){var n,r=t.gutter;l(c);var b=e.className,a=e.tag,i=e.offset,h=e.col,O=e.prefix,j=e.children,s=o(e,["className","tag","offset","col","prefix","children"]),f=a,u={};if(r){var p=void 0;if("string"==typeof r){var d=r.match(/(\d+)(\w+$)?/);d&&(p=""+Number(d[1])/2+(d[2]||"px"))}else p=Number(r)/2+"px";u={paddingLeft:p,paddingRight:p}}return Object(m.h)(f,g({className:v()(O,b,(n={},n[O+"__"+h]=!!h,n[O+"__offset_"+i]=!!i,n)),style:u},s),j)},c}(m.Component),f.displayName="LayoutItem",f.defaultProps={prefix:"caf-layout-item",tag:"div"},u),x=w,_=Object.assign||function(e){for(var c=1;c<arguments.length;c++){var t=arguments[c];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},k=(d=p=function(e){function c(){return a(this,c),i(this,e.apply(this,arguments))}return h(c,e),c.prototype.getChildContext=function(){return{gutter:this.props.gutter}},c.prototype.render=function(e){var c,t=e.tag,o=e.prefix,l=e.className,n=e.direction,r=e.wrap,a=e.justify,i=e.align,h=e.alignContent,O=e.children,j=b(e,["tag","prefix","className","direction","wrap","justify","align","alignContent","children"]),s=t;return Object(m.h)(s,_({className:v()(o,l,(c={},c[o+"__direction_"+n]=!!n,c[o+"__wrap_"+r]=!!r,c[o+"__justify_"+a]=!!a,c[o+"__align_"+i]=!!i,c[o+"__alignContent_"+h]=!!h,c))},j),O)},c}(m.Component),p.Item=x,p.defaultProps={prefix:"caf-layout",tag:"div"},d),C=k;t("boPo");t.d(c,"default",function(){return N});var P=C.Item,E=Object(m.h)("div",{class:"caf-demo"},Object(m.h)("div",{class:"caf-demo-block"},Object(m.h)("p",{class:"caf-demo-title"},"正常使用"),Object(m.h)(C,null,Object(m.h)(P,{col:"3"},"col: 3"),Object(m.h)(P,{col:"7",offset:"2"},"col: 7, offset: 3"),Object(m.h)(P,{col:"8"},"col: 8"))),Object(m.h)("div",{class:"caf-demo-block"},Object(m.h)("p",{class:"caf-demo-title"},"间距"),Object(m.h)(C,{gutter:"20"},Object(m.h)(P,null,"col: 8, gutter: 20"),Object(m.h)(P,null,"col: 8, gutter: 20"),Object(m.h)(P,null,"col: 8, gutter: 20")),Object(m.h)(C,{gutter:"8px"},Object(m.h)(P,null,"col: 8, gutter: 8px"),Object(m.h)(P,null,"col: 8, gutter: 8px"),Object(m.h)(P,null,"col: 8, gutter: 8px"))),Object(m.h)("div",{class:"caf-demo-block"},Object(m.h)("p",{class:"caf-demo-title"},"flex 方向",Object(m.h)("p",{class:"caf-demo-title-addition"},"依次为",Object(m.h)("b",null,"row"),Object(m.h)("b",null,"row-reverse"),Object(m.h)("b",null,"column"),Object(m.h)("b",null,"column-reverse"))),Object(m.h)(C,{direction:"row"},Object(m.h)(P,{col:"3"},"col: 3"),Object(m.h)(P,{col:"4"},"col: 4"),Object(m.h)(P,{col:"5"},"col: 5")),Object(m.h)(C,{direction:"row-reverse"},Object(m.h)(P,{col:"3"},"col: 3"),Object(m.h)(P,{col:"4"},"col: 4"),Object(m.h)(P,{col:"5"},"col: 5")),Object(m.h)(C,{direction:"column"},Object(m.h)(P,{col:"3"},"col: 3"),Object(m.h)(P,{col:"4"},"col: 4"),Object(m.h)(P,{col:"5"},"col: 5")),Object(m.h)(C,{direction:"column-reverse"},Object(m.h)(P,{col:"3"},"col: 3"),Object(m.h)(P,{col:"4"},"col: 4"),Object(m.h)(P,{col:"5"},"col: 5"))),Object(m.h)("div",{class:"caf-demo-block"},Object(m.h)("p",{class:"caf-demo-title"},"flex 换行",Object(m.h)("p",{class:"caf-demo-title-addition"},"依次为",Object(m.h)("b",null,"nowrap"),Object(m.h)("b",null,"wrap"),Object(m.h)("b",null,"wrap-reverse"))),Object(m.h)(C,{wrap:"nowrap"},Object(m.h)(P,{col:"8"},"col: 8"),Object(m.h)(P,{col:"8"},"col: 8"),Object(m.h)(P,{col:"10"},"col: 10")),Object(m.h)(C,{wrap:"wrap"},Object(m.h)(P,{col:"8"},"col: 8"),Object(m.h)(P,{col:"8"},"col: 8"),Object(m.h)(P,{col:"10"},"col: 10")),Object(m.h)(C,{wrap:"wrap-reverse"},Object(m.h)(P,{col:"8"},"col: 8"),Object(m.h)(P,{col:"8"},"col: 8"),Object(m.h)(P,{col:"10"},"col: 10"))),Object(m.h)("div",{class:"caf-demo-block"},Object(m.h)("p",{class:"caf-demo-title"},"flex 主轴对齐",Object(m.h)("p",{class:"caf-demo-title-addition"},"依次为",Object(m.h)("b",null,"start"),Object(m.h)("b",null,"end"),Object(m.h)("b",null,"center"),Object(m.h)("b",null,"between"),Object(m.h)("b",null,"around"))),Object(m.h)(C,{justify:"start"},Object(m.h)(P,{col:"3"},"col: 3"),Object(m.h)(P,{col:"3"},"col: 3"),Object(m.h)(P,{col:"3"},"col: 3")),Object(m.h)(C,{justify:"end"},Object(m.h)(P,{col:"3"},"col: 3"),Object(m.h)(P,{col:"3"},"col: 3"),Object(m.h)(P,{col:"3"},"col: 3")),Object(m.h)(C,{justify:"center"},Object(m.h)(P,{col:"3"},"col: 3"),Object(m.h)(P,{col:"3"},"col: 3"),Object(m.h)(P,{col:"3"},"col: 3")),Object(m.h)(C,{justify:"between"},Object(m.h)(P,{col:"3"},"col: 3"),Object(m.h)(P,{col:"3"},"col: 3"),Object(m.h)(P,{col:"3"},"col: 3")),Object(m.h)(C,{justify:"around"},Object(m.h)(P,{col:"3"},"col: 3"),Object(m.h)(P,{col:"3"},"col: 3"),Object(m.h)(P,{col:"3"},"col: 3"))),Object(m.h)("div",{class:"caf-demo-block"},Object(m.h)("p",{class:"caf-demo-title"},"flex 交叉轴对齐",Object(m.h)("p",{class:"caf-demo-title-addition"},"依次为",Object(m.h)("b",null,"start"),Object(m.h)("b",null,"center"),Object(m.h)("b",null,"end"),Object(m.h)("b",null,"baseline"),Object(m.h)("b",null,"stretch"))),Object(m.h)("div",{class:"caf-demo-flexblock"},Object(m.h)(C,{align:"start",direction:"column"},Object(m.h)(P,{col:"15"},"col: 15"),Object(m.h)(P,{col:"10"},"col: 10"),Object(m.h)(P,{col:"8"},"col: 8"))),Object(m.h)("div",{class:"caf-demo-flexblock"},Object(m.h)(C,{align:"center",direction:"column"},Object(m.h)(P,{col:"15"},"col: 15"),Object(m.h)(P,{col:"10"},"col: 10"),Object(m.h)(P,{col:"8"},"col: 8"))),Object(m.h)("div",{class:"caf-demo-flexblock"},Object(m.h)(C,{align:"end",direction:"column"},Object(m.h)(P,{col:"15"},"col: 15"),Object(m.h)(P,{col:"10"},"col: 10"),Object(m.h)(P,{col:"8"},"col: 8"))),Object(m.h)("div",{class:"caf-demo-flexblock"},Object(m.h)(C,{align:"baseline",direction:"column"},Object(m.h)(P,{col:"15"},"col: 15"),Object(m.h)(P,{col:"10"},"col: 10"),Object(m.h)(P,{col:"8"},"col: 8"))),Object(m.h)("div",{class:"caf-demo-flexblock"},Object(m.h)(C,{align:"stretch",direction:"column"},Object(m.h)(P,{col:"15"},"col: 15"),Object(m.h)(P,{col:"10"},"col: 10"),Object(m.h)(P,{col:"8"},"col: 8")))),Object(m.h)("div",{class:"caf-demo-block"},Object(m.h)("p",{class:"caf-demo-title"},"flex 交叉轴对齐",Object(m.h)("p",{class:"caf-demo-title-addition",direction:"column"},"依次为",Object(m.h)("b",null,"start"),Object(m.h)("b",null,"center"),Object(m.h)("b",null,"end"),Object(m.h)("b",null,"baseline"),Object(m.h)("b",null,"stretch"))),Object(m.h)("div",{class:"caf-demo-flexblock"},Object(m.h)(C,{alignContent:"start"},Object(m.h)(P,{col:"15"},"col: 15"),Object(m.h)(P,{col:"10"},"col: 10"),Object(m.h)(P,{col:"8"},"col: 8"))),Object(m.h)("div",{class:"caf-demo-flexblock"},Object(m.h)(C,{alignContent:"center"},Object(m.h)(P,{col:"15"},"col: 15"),Object(m.h)(P,{col:"10"},"col: 10"),Object(m.h)(P,{col:"8"},"col: 8"))),Object(m.h)("div",{class:"caf-demo-flexblock"},Object(m.h)(C,{alignContent:"end"},Object(m.h)(P,{col:"15"},"col: 15"),Object(m.h)(P,{col:"10"},"col: 10"),Object(m.h)(P,{col:"8"},"col: 8"))),Object(m.h)("div",{class:"caf-demo-flexblock"},Object(m.h)(C,{alignContent:"between"},Object(m.h)(P,{col:"15"},"col: 15"),Object(m.h)(P,{col:"10"},"col: 10"),Object(m.h)(P,{col:"8"},"col: 8"))),Object(m.h)("div",{class:"caf-demo-flexblock"},Object(m.h)(C,{alignContent:"around"},Object(m.h)(P,{col:"15"},"col: 15"),Object(m.h)(P,{col:"10"},"col: 10"),Object(m.h)(P,{col:"8"},"col: 8"))),Object(m.h)("div",{class:"caf-demo-flexblock"},Object(m.h)(C,{alignContent:"stretch"},Object(m.h)(P,{col:"15"},"col: 15"),Object(m.h)(P,{col:"10"},"col: 10"),Object(m.h)(P,{col:"8"},"col: 8"))))),N=function(e){function c(){return O(this,c),j(this,e.apply(this,arguments))}return s(c,e),c.prototype.render=function(){return E},c}(m.Component)},boPo:function(){}});