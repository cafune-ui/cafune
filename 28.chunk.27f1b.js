(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"+Uxt":function(t,n,e){"use strict";e("ruW5"),e("8U1p"),e("cz+e"),e("eJtl")},eJtl:function(){},"p+TJ":function(t,n,e){"use strict";e.r(n),function(t){function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"default",(function(){return i}));e("+Uxt");var a=e("tv2M"),i=function(n){function e(){for(var t,e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return o(r(t=n.call.apply(n,[this].concat(a))||this),"state",{pn:1,pages:5}),o(r(t),"onChange",(function(n){t.setState({pn:n})})),t}var i,c;return c=n,(i=e).prototype=Object.create(c.prototype),i.prototype.constructor=i,i.__proto__=c,e.prototype.render=function(n,e){!function(t){if(null==t)throw new TypeError("Cannot destructure undefined")}(n);var r=e.pn,o=e.pages;return t("div",{class:"caf-demo-block"},t("p",{class:"caf-demo-title"},"自定义类型"),t(a.a,{simple:!0,current:r,total:o,onChange:this.onChange}),t(a.a,{mode:"number",current:r,total:o,onChange:this.onChange}),t(a.a,{mode:"pointer",current:r,total:o,onChange:this.onChange}),t("p",{class:"caf-demo-title"},"自定义按钮文字"),t(a.a,{current:r,total:o,onChange:this.onChange,btnText:{prev:"prev",next:"next"}}),t("p",{class:"caf-demo-title"},"自定义按钮图标"),t(a.a,{current:r,total:o,onChange:this.onChange,btnIcon:{prev:{type:"arrow-left"},next:{type:"arrow-right"}}}),t("p",{class:"caf-demo-title"},"自定义步进数"),t(a.a,{current:r,total:o,onChange:this.onChange,step:2}))},e}(e("4dxh").Component)}.call(this,e("4dxh").h)},tv2M:function(t,n,e){"use strict";(function(t){function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function o(t,n,e,r){return(n=Number(n))<e&&t>0||n>1&&t<0&&r?function(){r(n+t)}:function(){}}var a=e("O94r"),i=e.n(a),c=e("u6Ku"),u=function(n){var e,a,u,s=n.prefix,p=n.mode,l=n.simple,f=n.current,h=n.className,d=n.total,b=n.onChange,m=n.btnText,v=n.btnIcon,g=n.step,_=function(t,n){if(null==t)return{};var e,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n.indexOf(e=a[r])>=0||(o[e]=t[e]);return o}(n,["prefix","mode","simple","current","className","total","onChange","btnText","btnIcon","step"]);i()(s+"__btn",((e={})[s+"__btn--disabled"]=f<=1,e)),i()(s+"__btn",((a={})[s+"__btn--disabled"]=f>=d,a));if("pointer"===p){for(var x=[],C=0;C<d;C++)x.push(C+1===f);u=t("div",{className:s+"__dot"},x.map((function(n){var e;return t("span",{className:i()(s+"__dot__item",(e={},e[s+"__dot__item--current"]=n,e))})})))}var y="button"===p,w="number"===p||"button"===p&&!l;return t("div",r({className:i()(s,h)},_),y&&(!(!m||!m.prev)||!(!v||!v.prev))&&t(c.a,{type:f<=1?"cancel":"primary",onClick:o(-1*g,f,d,b),icon:v&&v.prev||null},m&&m.prev),w&&t("span",{className:s+"__indicator"},f," / ",d),y&&(!(!m||!m.next)||!(!v||!v.next))&&t(c.a,{type:f>=d?"cancel":"primary",onClick:o(1*g,f,d,b),icon:v&&v.next||null},m&&m.next),"pointer"===p&&u)};u.defaultProps={prefix:"caf-page",step:1,mode:"button",simple:!1},n.a=u}).call(this,e("4dxh").h)}}]);