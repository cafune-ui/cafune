(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8U1p":function(){},"9fRP":function(e,t,r){"use strict";r("KdSC")},"9hRe":function(e,t,r){"use strict";(function(e){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=r("4dxh"),a=r("O94r"),c=r.n(a),s=r("fbC/"),l=function(t){function r(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return i(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e=t.call.apply(t,[this].concat(n))||this),"clickHandler",(function(){var t=e.props,r=t.onChange;t.isDisabled||t.isLoading||r&&r(!t.isActived)})),e}var o,a;return a=t,(o=r).prototype=Object.create(a.prototype),o.prototype.constructor=o,o.__proto__=a,r.prototype.render=function(t){var r,i=t.prefix,o=t.className,a=t.isActived,l=t.isLoading,u=t.isDisabled,p=t.size,f=t.activedColor,d=t.inActivedColor,h=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}(t,["prefix","className","isActived","isLoading","isDisabled","size","activedColor","inActivedColor"]),v={};p&&(v.fontSize=p);var b=a?"#3f77f6":"#ccc";return(f||d)&&(v.backgroundColor=b=a?f:d),e("div",n({className:c()(i,o,(r={},r[i+"--on"]=a,r[i+"--disabled"]=u,r)),style:v,onClick:this.clickHandler},h),e("div",{className:i+"__circle"},l&&e(s.a,{size:"16px",color:b})))},r}(o.Component);i(l,"defaultProps",{prefix:"caf-switch",isDisabled:!1,isLoading:!1,isActived:!1}),t.a=l}).call(this,r("4dxh").h)},IE5c:function(e,t,r){"use strict";(function(e){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=r("4dxh"),a=r("O94r"),c=r.n(a),s=r("Vy76"),l=function(t){function r(){return t.apply(this,arguments)||this}var i,o;o=t,(i=r).prototype=Object.create(o.prototype),i.prototype.constructor=i,i.__proto__=o;var a=r.prototype;return a.getData=function(e,t){var r=[],n=this.props,i=n.onChange,o=n.labelPosition,a=n.checkedColor;return e.forEach((function(e,n){if("RadioItem"===e.nodeName.displayName){var c=e.attributes,s=c.value;r.push({prefix:c.prefix,disabled:c.disabled,value:s,checked:t?!!s&&t===s:0===n,children:e.children,className:c.className,checkedColor:a,labelPosition:o,onChange:i})}})),r},a.renderChild=function(){var t=this.props,r=this.getData(t.children,t.value),i=[];return r&&r.length&&(i=r.map((function(t){return e(s.a,n({key:t.value},t))}))),i},a.render=function(t){var r=t.prefix,i=t.className,o=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}(t,["prefix","className","value","children"]);return e("div",n({className:c()(r,i)},o),this.renderChild())},r}(o.Component);i(l,"RadioItem",s.a),i(l,"defaultProps",{labelPosition:"caf-radio",position:"left"}),t.a=l}).call(this,r("4dxh").h)},Ix4R:function(){},IypD:function(e,t,r){"use strict";(function(e){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=r("4dxh"),c=r("O94r"),s=r.n(c),l=r("Q+hs"),u=r("dzJc"),p=r("t3JU"),f=r("OaM3"),d=function(t){function r(){for(var e,r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return o(i(e=t.call.apply(t,[this].concat(n))||this),"isSwiping",!1),o(i(e),"movedSize",0),o(i(e),"startTimeStamp",void 0),o(i(e),"startX",void 0),o(i(e),"deltaX",void 0),o(i(e),"direction",void 0),o(i(e),"offsetX",void 0),o(i(e),"readyMoving",(function(t){e.startTimeStamp=Date.now(),e.isSwiping=!0;var r=Object(p.a)(t);e.startX=r.clientX})),o(i(e),"startMoving",(function(t){if(e.isSwiping){var r=Object(p.a)(t);e.deltaX=r.clientX-e.startX,e.offsetX=Math.abs(e.deltaX),e.direction=e.deltaX>=0?-1:1,t.preventDefault(),t.stopPropagation(),e.direction>0?e.offsetX>0&&e.offsetX<=e.swiperSize&&e.moveTo(e.deltaX,!0):e.moveTo(0)}})),o(i(e),"endMoving",(function(){e.isSwiping&&(e.isSwiping=!1,e.offsetX>0&&e.offsetX<=e.swiperSize&&e.moveTo(e.offsetX<e.swiperSize/2?0:-1*e.swiperSize),setTimeout((function(){return e.offsetX=0}),500))})),o(i(e),"swipable",!1),o(i(e),"promiseFunc",(function(t){setTimeout(t.bind(i(e)),0)})),o(i(e),"swiperSize",0),o(i(e),"cellWrapper",Object(a.createRef)()),o(i(e),"cellMain",Object(a.createRef)()),o(i(e),"cellSwiper",Object(a.createRef)()),e}var c,u;u=t,(c=r).prototype=Object.create(u.prototype),c.prototype.constructor=c,c.__proto__=u;var d=r.prototype;return d.moveTo=function(e,t){if(void 0===t&&(t=!1),this.cellWrapper&&this.cellWrapper.current){var r=this.cellWrapper.current;r.style.transitionDuration=t?"0ms":"500ms",r.style.transform="translate3d("+e+"px, 0, 0 )",this.movedSize=e}},d.registeSwiperEvent=function(){if(f.a){if(this.cellSwiper&&this.cellSwiper.current){this.swipable=!0;var e=this.cellSwiper.current.getBoundingClientRect();this.swiperSize=e.width}if(this.cellMain&&this.cellMain.current){var t=this.cellMain.current;t.addEventListener(p.b.down,this.readyMoving),t.addEventListener(p.b.move,this.startMoving),t.addEventListener(p.b.up,this.endMoving),t.addEventListener(p.b.out,this.endMoving)}}},d.unRegisteSwiperEvent=function(){if(this.cellMain&&this.cellMain.current&&this.swipable&&f.a){var e=this.cellMain.current;this.swipable=!1,e.removeEventListener(p.b.down,this.readyMoving),e.removeEventListener(p.b.move,this.startMoving),e.removeEventListener(p.b.up,this.endMoving),e.removeEventListener(p.b.out,this.endMoving)}},d.componentWillUnmount=function(){this.unRegisteSwiperEvent()},d.render=function(t){var r,i=t.prefix,o=t.className,a=t.icon,c=t.iconSize,u=t.title,p=t.label,f=t.value,d=t.url,h=t.rightIcon,v=t.border,b=t.middle,m=t.swipeList,y=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}(t,["prefix","className","icon","iconSize","title","label","value","url","rightIcon","border","middle","swipeList"]),g=!!d||!!h,w=s()(i,o,((r={})[i+"__clickable"]=g,r[i+"__border"]=v,r[i+"__middle"]=b,r));a=a?e(l.a,{icon:a,size:c}):null,u=e("div",{className:i+"-title"},e("span",null,u),!!p&&e("div",{className:i+"-label"},p));var x=f?e("div",{className:i+"-value"},e("span",null,f)):null,O=g?e(l.a,{icon:h||"arrow-right"}):null,C=d?"a":"div",j=d?{href:d}:{},_=null;return m&&m.length?(_=e("div",{className:i+"-swiper",ref:this.cellSwiper},m.map((function(t){return e("span",{className:i+"-swiper-item",onClick:t.clickHandler,style:t.style},t.name)}))),this.promiseFunc(this.registeSwiperEvent)):this.promiseFunc(this.unRegisteSwiperEvent),e("div",n({className:w},y),e("div",{className:i+"-wrapper",ref:this.cellWrapper},e(C,n({},j,{className:i+"-main",ref:this.cellMain}),a,u,x,O),_))},r}(a.Component);o(d,"CellGroup",u.a),o(d,"defaultProps",{prefix:"caf-cell",border:!0,swipeList:[]}),t.a=d}).call(this,r("4dxh").h)},KdSC:function(){},Kx16:function(e,t,r){"use strict";(function(e){t.a={step:{cSize:"45px",cColor:"#ccc",func:function(t,r){return e("svg",{version:"1.1",id:"L4",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 40","enable-background":"new 0 0 0 0",xmlSpace:"preserve",style:"fill: "+(t||this.cColor)+";width:"+(r||this.cSize)+";"},e("circle",{stroke:"none",cx:"25",cy:20,r:"6"},e("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.1"})),e("circle",{stroke:"none",cx:"50",cy:20,r:"6"},e("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.2"})),e("circle",{stroke:"none",cx:"75",cy:20,r:"6"},e("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.3"})))}},spinner:{cColor:"#ccc",cSize:"32px",func:function(t,r){var n=this.cSize;return e("svg",{xmlns:"http://www.w3.org/2000/svg",width:r||n,height:r||n,viewBox:"0 0 38 38",stroke:t||this.cColor},e("g",{fill:"none",fillRule:"evenodd"},e("g",{transform:"translate(1 1)","stroke-width":"2"},e("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),e("path",{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(125.364 18 18)"},e("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))}},ripple:{cColor:"#ccc",cSize:"50px",func:function(t,r){var n=this.cSize,i=this.cColor;return e("svg",{style:{width:r||n,height:r||n},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",class:"lds-ripple"},e("circle",{cx:"50",cy:"50",r:"16.2741",fill:"none",stroke:t||i,"stroke-width":"2"},e("animate",{attributeName:"r",calcMode:"spline",values:"0;40",keyTimes:"0;1",dur:"3.1",keySplines:"0 0.2 0.8 1",begin:"-1.55s",repeatCount:"indefinite"}),e("animate",{attributeName:"opacity",calcMode:"spline",values:"1;0",keyTimes:"0;1",dur:"3.1",keySplines:"0.2 0 0.8 1",begin:"-1.55s",repeatCount:"indefinite"})),e("circle",{cx:"50",cy:"50",r:"35.0733",fill:"none",stroke:t||i,"stroke-width":"2"},e("animate",{attributeName:"r",calcMode:"spline",values:"0;40",keyTimes:"0;1",dur:"3.1",keySplines:"0 0.2 0.8 1",begin:"0s",repeatCount:"indefinite"}),e("animate",{attributeName:"opacity",calcMode:"spline",values:"1;0",keyTimes:"0;1",dur:"3.1",keySplines:"0.2 0 0.8 1",begin:"0s",repeatCount:"indefinite"})))}}}}).call(this,r("4dxh").h)},MfCh:function(e,t,r){"use strict";r("8U1p"),r("eGar")},O94r:function(e,t){var r;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var a=n.apply(null,r);a&&e.push(a)}else if("object"===o)for(var c in r)i.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}var i={}.hasOwnProperty;e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},OaM3:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));var n=!("undefined"==typeof window||!window),i=function(e,t){void 0===t&&(t="body"),n&&document.querySelector(t)&&(document.querySelector(t).style.paddingBottom=e)}},PMho:function(){},"Q+hs":function(e,t,r){"use strict";(function(e){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=r("O94r"),c=r.n(a),s=function(t){var r,a=t.prefix,s=t.className,l=t.icon,u=t.color,p=t.size,f=t.tag,d=t.customPrefix,h=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}(t,["prefix","className","icon","color","size","tag","customPrefix"]),v=function(e){return e&&-1!==e.indexOf("/")}(l),b=c()(a,s,d,((r={})[d+"-"+l]=!v,r)),m=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},h);v?m.style="width: "+(p=p||"16px")+";height: "+p+";line-height: "+p+";":(u&&(m.style=(m.style||"")+"color: "+u+";"),p&&(m.style=(m.style||"")+"font-size: "+p+";"));var y=f;return v?e(y,n({className:b},m),v&&e("img",{src:l,className:a+"-img"})):e(y,n({className:b},m))};s.defaultProps={prefix:"caf-icons",customPrefix:"caf-icon",tag:"i"},t.a=s}).call(this,r("4dxh").h)},TDLu:function(e,t,r){"use strict";(function(e){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return l}));var o=r("4dxh"),a=r("O94r"),c=r.n(a),s=r("Q+hs"),l=function(t){function r(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return i(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e=t.call.apply(t,[this].concat(n))||this),"handleChange",(function(){var t=e.props,r=e.context.onChange;!t.disabled&&r&&r(t.id)})),e}var o,a;return a=t,(o=r).prototype=Object.create(a.prototype),o.prototype.constructor=o,o.__proto__=a,r.prototype.render=function(t,r){var i;!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(r);var o=t.prefix,a=t.className,l=t.text,u=t.id,p=t.icons,f=t.activedColor,d=t.inactivedColor,h=t.activedBgColor,v=t.disabled,b=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}(t,["prefix","className","text","id","icons","activedColor","inactivedColor","activedBgColor","disabled"]),m=this.context,y=m.activedId===u,g=y?"actived":v?"disabled":"normal",w=y?{color:f||this.context.activedColor||""}:{color:d||this.context.inactivedColor||""},x={};return"bubble"===m.type&&y&&h&&(x.backgroundColor=h),e("div",n({className:c()(o,a,(i={},i[o+"--actived"]=y,i[o+"--disabled"]=v,i)),onClick:this.handleChange,style:w},b),e("div",{className:o+"__container",style:x},!!p&&e("div",{className:o+"__icon"},e(s.a,{icon:p[g]||p.normal})),e("div",{className:o+"__title"},e("p",{className:o+"__title__text"},l))))},r}(o.Component);i(l,"defaultProps",{disabled:!1,prefix:"caf-tabbar-item"})}).call(this,r("4dxh").h)},Uztw:function(e,t,r){"use strict";r("ruW5"),r("Ix4R")},Vy76:function(e,t,r){"use strict";(function(e){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=r("4dxh"),a=r("O94r"),c=r.n(a),s=function(t){function r(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return i(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e=t.call.apply(t,[this].concat(n))||this),"onItemClick",(function(){var t=e.props,r=t.onChange;t.checked||t.disabled||!r||r(t.value)})),e}var o,a;return a=t,(o=r).prototype=Object.create(a.prototype),o.prototype.constructor=o,o.__proto__=a,r.prototype.render=function(t){var r,i=t.prefix,o=t.className,a=t.children,s=t.checked,l=t.disabled,u=t.labelPosition,p=t.checkedColor,f=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}(t,["prefix","className","children","value","checked","disabled","labelPosition","checkedColor"]);return e("div",n({className:c()(i,o,(r={},r[i+"--disabled"]=l,r[i+"--checked"]=s,r[i+"--rtl"]="right"===u,r)),onClick:this.onItemClick},f),e("div",{className:i+"__content"},a),e("div",{className:i+"__icon",style:{color:p,backgroundColor:p}},e("div",{className:i+"__icon__indicator"})))},r}(o.Component);i(s,"displayName","RadioItem"),i(s,"defaultProps",{prefix:"caf-radio-item"}),t.a=s}).call(this,r("4dxh").h)},dzJc:function(e,t,r){"use strict";(function(e){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i,o,a,c=r("4dxh"),s=r("O94r"),l=r.n(s),u=function(t){function r(){return t.apply(this,arguments)||this}var i,o;return o=t,(i=r).prototype=Object.create(o.prototype),i.prototype.constructor=i,i.__proto__=o,r.prototype.render=function(t){var r,i=t.prefix,o=t.className,a=t.border,c=t.title,s=t.children,u=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}(t,["prefix","className","border","title","children"]);return e("div",n({className:l()(i,o)},u),!!c&&e("div",{className:i+"-title"},c),e("div",{className:l()(i+"-wrapper",(r={},r[i+"-wrapper__border"]=a,r))},s))},r}(c.Component);a={prefix:"caf-cellgroup",border:!0},(o="defaultProps")in(i=u)?Object.defineProperty(i,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[o]=a,t.a=u}).call(this,r("4dxh").h)},e11i:function(e,t,r){"use strict";r("ruW5"),r("PMho")},eGar:function(){},"fbC/":function(e,t,r){"use strict";(function(e){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i,o,a,c=r("4dxh"),s=r("O94r"),l=r.n(s),u=r("Kx16"),p=function(t){function r(){return t.apply(this,arguments)||this}var i,o;o=t,(i=r).prototype=Object.create(o.prototype),i.prototype.constructor=i,i.__proto__=o;var a=r.prototype;return a.getSvg=function(e){var t=this.props;return u.a[e]&&u.a[e].func(t.color,t.size)},a.render=function(t){var r,i=t.className,o=t.prefix,a=t.type,c=t.text,s=t.vertical,u=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}(t,["className","prefix","type","text","vertical"]),p=this.getSvg(a);return!!p&&e("div",n({className:l()(o,i,(r={},r[o+"--vertical"]=s,r))},u),p,!!c&&e("span",{className:o+"__text"},c))},r}(c.Component);a={prefix:"caf-loading",type:"spinner",vertical:!1},(o="defaultProps")in(i=p)?Object.defineProperty(i,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[o]=a,t.a=p}).call(this,r("4dxh").h)},juec:function(e,t,r){"use strict";(function(e){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=r("4dxh"),c=r("O94r"),s=r.n(c),l=r("TDLu"),u=r("OaM3"),p=function(t){function r(){for(var e,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return o(i(e=t.call.apply(t,[this].concat(n))||this),"currentActive",e.props.activedId),o(i(e),"onChange",(function(t){if(e.currentActive!==t){var r=e.props.onChange;r&&r(t),e.currentActive=t}})),e}var a,c;c=t,(a=r).prototype=Object.create(c.prototype),a.prototype.constructor=a,a.__proto__=c;var l=r.prototype;return l.componentDidMount=function(){Object(u.b)(this.base.getBoundingClientRect().height+"px")},l.componentWillUnmount=function(){Object(u.b)("")},l.getChildContext=function(){return{activedId:this.props.activedId,activedColor:this.props.activedColor,inactivedColor:this.props.inactivedColor,type:this.props.type,onChange:this.onChange}},l.render=function(t){var r,i=t.prefix,o=t.type,a=t.className,c=t.fixed,l=t.children,u=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}(t,["prefix","type","className","activedId","fixed","children"]),p=s()(i,a,((r={})[i+"--fixed"]=c,r[i+"--"+o]=!!o,r));return e("div",n({className:p},u),l)},r}(a.Component);o(p,"TabBarItem",l.a),o(p,"defaultProps",{prefix:"caf-tabbar",fixed:!0}),t.a=p}).call(this,r("4dxh").h)},ruW5:function(){},t3JU:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return o}));var n=!!("undefined"!=typeof window&&window&&"ontouchend"in document),i=n?{down:"touchstart",move:"touchmove",up:"touchend",over:"touchstart",out:"touchcancel"}:{down:"mousedown",move:"mousemove",up:"mouseup",over:"mouseover",out:"mouseout"},o=function(e,t){return n?"touchend"===t?e.changedTouches[0]:e.targetTouches[0]:e}},"y/H0":function(e,t,r){"use strict";r.r(t),function(e){function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"default",(function(){return d}));r("e11i");var o=r("IypD"),a=(r("MfCh"),r("9hRe")),c=(r("Uztw"),r("juec")),s=(r("9fRP"),r("IE5c")),l=r("4dxh"),u=s.a.RadioItem,p=c.a.TabBarItem,f=[{value:"normal",label:"普通tab"},{value:"bubble",label:"冒泡tab"},{value:"flash",label:"闪烁tab"}],d=function(t){function r(){for(var e,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return i(n(e=t.call.apply(t,[this].concat(o))||this),"state",{page:"home",type:"bubble"}),i(n(e),"onChange",(function(t){e.setState({page:t})})),i(n(e),"onRadioChange",(function(t){e.setState({type:t})})),i(n(e),"toggleCustomStyle",(function(){e.setState({isCustomStyle:!e.state.isCustomStyle})})),e}var l,d;return d=t,(l=r).prototype=Object.create(d.prototype),l.prototype.constructor=l,l.__proto__=d,r.prototype.render=function(t,r){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(t);var n=r.page,i=r.type,l=r.isCustomStyle;return e("div",null,e("div",{class:"caf-demo-block"},e(s.a,{onChange:this.onRadioChange,value:i},f.map((function(t){return e(u,{key:t.value,value:t.value,disabled:t.disabled},t.label)}))),e(o.a,{title:"自定义颜色",value:e(a.a,{isActived:l,onChange:this.toggleCustomStyle}),middle:!0})),e(c.a,{type:i,activedId:n,onChange:this.onChange},e(p,{text:"home",id:"home",activedColor:l?"#e27777":"",activedBgColor:l?"#f5e3e3":"",icons:{normal:"home"}}),e(p,{text:"browser",id:"browser",icons:{normal:"browser"}}),e(p,{text:"astro",id:"astro",activedColor:l?"#5da0a2":"",activedBgColor:l?"#e3f5ed":"",icons:{actived:"https://image.flaticon.com/icons/png/128/2026/2026518.png",normal:"https://image.flaticon.com/icons/png/128/2026/2026521.png"}}),e(p,{text:"help",id:"help",disabled:!0,icons:{normal:"help"}})))},r}(l.Component)}.call(this,r("4dxh").h)}}]);