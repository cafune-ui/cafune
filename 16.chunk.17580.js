(window.webpackJsonp=window.webpackJsonp||[]).push([[16,29],{ICK7:function(n,t,e){"use strict";e.r(t),function(n){e.d(t,"default",(function(){return c}));e("gAxU");var o=e("v3Mn"),r=e("yA1Q"),c=(e("gmsm"),function(t){function e(){return t.apply(this,arguments)||this}var r,c;return c=t,(r=e).prototype=Object.create(c.prototype),r.prototype.constructor=r,r.__proto__=c,e.prototype.render=function(){return n("div",{class:"caf-demo-page"},n(o.a,{isFixed:!0,left:{icon:"wrong",text:"返回",clickHandler:function(){console.log("返回")}},rights:{icon:"search",text:"搜索",clickHandler:function(){console.log("搜索")}}},"标题"),n(o.a,{left:{icon:"wrong",text:"返回",clickHandler:function(){console.log("返回")}},rights:[{text:"搜索",badge:"22",clickHandler:function(){console.log("搜索")}},{text:"搜索",clickHandler:function(){console.log("搜索")}},{icon:"img",text:"图片",badge:!0,clickHandler:function(){console.log("图标")}}]},"标题"))},e}(r.Component))}.call(this,e("yA1Q").h)},a3aN:function(){},gAxU:function(n,t,e){"use strict";e("8mo1"),e("a3aN")},gmsm:function(){},v3Mn:function(n,t,e){"use strict";(function(n){function o(){return(o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}).apply(this,arguments)}function r(t,e,r){if(void 0===e&&(e="left"),void 0===r&&(r=!1),t){var c=t.icon,i=t.color,f=t.text,u=t.badge,d=t.clickHandler,g={};i&&(g.style={color:i});var p=!(r&&c||!f),h=!!u&&n("span",{className:l+"-btn-badge"},"string"==typeof u&&u);return n("div",{className:l+"-btn "+l+"-btn__"+e,onClick:d},!!c&&n(a.a,{icon:c,color:i||s}),p&&n("span",o({className:l+"-btn-text"},g,{"data-badged":u?1:0}),f),h)}return null}e("17x9");var c=e("8Jek"),i=e.n(c),a=e("nV0/"),l="caf-navbar",s="#3f77f6",f={icon:"back"},u=function(t){var e,c=t.prefix,a=t.className,l=t.children,s=t.left,u=t.rights,d=t.isFixed,g=function(n,t){if(null==n)return{};var e,o,r={},c=Object.keys(n);for(o=0;o<c.length;o++)t.indexOf(e=c[o])>=0||(r[e]=n[e]);return r}(t,["prefix","className","children","left","rights","isFixed"]),p=Array.isArray(u)?u.map((function(n){return r(n,"right",!0)})):r(u,"right",!0);return n("div",o({className:i()(c,a,(e={},e[c+"__fixed"]=d,e))},g),r(o({},f,s)),n("div",{className:c+"-title"},l&&l.length>0&&l),p)};u.defaultProps={prefix:l,left:f,rights:[]},t.a=u}).call(this,e("yA1Q").h)}}]);