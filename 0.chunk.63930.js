(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/VYW":function(e,t,i){"use strict";i("dXIs"),i("Re0E")},"4yN2":function(e,t,i){"use strict";(function(e){t.a={step:{cSize:"60px",cColor:"#ccc",func:function(t,i){return e("svg",{version:"1.1",id:"L4",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 40","enable-background":"new 0 0 0 0",xmlSpace:"preserve",style:"fill: "+(t||this.cColor)+";width:"+(i||this.cSize)+";"},e("circle",{stroke:"none",cx:"25",cy:20,r:"6"},e("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.1"})),e("circle",{stroke:"none",cx:"50",cy:20,r:"6"},e("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.2"})),e("circle",{stroke:"none",cx:"75",cy:20,r:"6"},e("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.3"})))}},spinner:{cColor:"#ccc",cSize:"32px",func:function(t,i){var n=this.cSize;return e("svg",{xmlns:"http://www.w3.org/2000/svg",width:i||n,height:i||n,viewBox:"0 0 38 38",stroke:t||this.cColor},e("g",{fill:"none","fill-rule":"evenodd"},e("g",{transform:"translate(1 1)","stroke-width":"2"},e("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),e("path",{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(275.955 18 18)"},e("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))}},ripple:{cColor:"#ccc",cSize:"60px",func:function(t,i){var n=this.cSize;return e("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:i||n,height:i||n},viewBox:"0 0 45 45",stroke:t||this.cColor},e("g",{fill:"none","fill-rule":"evenodd",transform:"translate(1 1)","stroke-width":"2"},e("circle",{cx:"22",cy:"22",r:"13.2878","stroke-opacity":"0"},e("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),e("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),e("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),e("circle",{cx:"22",cy:"22",r:"21.2878","stroke-opacity":"0"},e("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),e("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),e("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),e("circle",{cx:"22",cy:"22",r:"5.46583"},e("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"}))))}}}}).call(this,i("yA1Q").h)},"6ETe":function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"a",(function(){return o}));var n=!!("undefined"!=typeof window&&window&&"ontouchend"in document),r=n?{down:"touchstart",move:"touchmove",up:"touchend",over:"touchstart",out:"touchcancel"}:{down:"mousedown",move:"mousemove",up:"mouseup",over:"mouseover",out:"mouseout"},o=function(e,t){return n?"touchend"===t?e.changedTouches[0]:e.targetTouches[0]:e}},"7Adi":function(e,t,i){"use strict";(function(e){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var o=i("yA1Q"),a=(i("17x9"),i("8Jek")),c=i.n(a),s=i("Mw2m"),l=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return r(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e=t.call.apply(t,[this].concat(n))||this),"clickHandler",(function(){var t=e.props,i=t.onChange;t.isDisabled||t.isLoading||i&&i(!t.isActived)})),e}var o,a;return a=t,(o=i).prototype=Object.create(a.prototype),o.prototype.constructor=o,o.__proto__=a,i.prototype.render=function(t){var i,r=t.prefix,o=t.className,a=t.isActived,l=t.isLoading,u=t.isDisabled,p=t.size,f=t.activedColor,d=t.inActivedColor,v=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(i=o[n])>=0||(r[i]=e[i]);return r}(t,["prefix","className","isActived","isLoading","isDisabled","size","activedColor","inActivedColor"]),h={};p&&(h.fontSize=p);var m=a?"#3f77f6":"#ccc";return(f||d)&&(h.backgroundColor=m=a?f:d),e("div",n({className:c()(r,o,(i={},i[r+"__on"]=a,i[r+"__disabled"]=u,i)),style:h,onClick:this.clickHandler},v),e("div",{className:r+"-circle"},l&&e(s.a,{size:"16px",color:m})))},i}(o.Component);r(l,"defaultProps",{prefix:"caf-switch",isDisabled:!1,isLoading:!1,isActived:!1}),t.a=l}).call(this,i("yA1Q").h)},"7QdH":function(){},CyeN:function(e,t,i){"use strict";i.r(t),function(e){i.d(t,"default",(function(){return c}));i("/VYW");var n=i("7Adi"),r=(i("pM7f"),i("NKah")),o=i("yA1Q"),a=r.a.CellGroup,c=function(t){function i(){for(var e,i,n,r,o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return e=t.call.apply(t,[this].concat(a))||this,i=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e),r={active:!0},(n="state")in i?Object.defineProperty(i,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[n]=r,e}var o,c;return c=t,(o=i).prototype=Object.create(c.prototype),o.prototype.constructor=o,o.__proto__=c,i.prototype.render=function(t,i){var o=this;!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(t);var c=i.active;return e("div",null,e("div",{class:""},e(r.a,{title:"基础用法"}),e(r.a,{title:"不带边框",border:!1}),e(r.a,{title:"带icon",icon:"check"}),e(r.a,{title:"带右滑",swipeList:[{name:"标为未读",clickHandler:function(){console.log("标为未读")},style:{backgroundColor:"#e9e7ef"}},{name:"删除",clickHandler:function(){console.log("删除")},style:{backgroundColor:"#c93756"}}]}),e(r.a,{title:"自定义",icon:"https://image.uisdc.com/wp-content/uploads/2018/07/uiii-ps-icon.png",iconSize:"30px"}),e(r.a,{title:"带链接",icon:"img",url:"/"}),e(r.a,{title:"带描述信息",icon:"search",label:"此处为描述信息"}),e(r.a,{title:"带右侧内容",icon:"search",label:"此处为描述信息",value:"右侧内容"}),e(r.a,{title:"带右侧icon",icon:"search",label:"此处为描述信息",value:"右侧内容",rightIcon:"more"}),e(r.a,{title:"垂直居中",icon:"search",label:"此处为描述信息",value:"右侧内容",rightIcon:"more",middle:!0}),e(r.a,{title:"右侧使用组件",icon:"search",label:"此处为描述信息",value:e(n.a,{isActived:c,onClick:function(){o.setState({active:!o.state.active})}}),middle:!0}),e(a,{title:"单元格分组"},e(r.a,{value:"纯内容"}),e(r.a,{title:"单元格2"})),e(a,{title:"单元格分组(不带边框)",border:!1},e(r.a,{title:"单元格"}),e(r.a,{title:"单元格2"}))))},i}(o.Component)}.call(this,i("yA1Q").h)},Mw2m:function(e,t,i){"use strict";(function(e){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var r,o,a,c=i("yA1Q"),s=(i("17x9"),i("8Jek")),l=i.n(s),u=i("4yN2"),p=(Object.keys(u.a),function(t){function i(){return t.apply(this,arguments)||this}var r,o;o=t,(r=i).prototype=Object.create(o.prototype),r.prototype.constructor=r,r.__proto__=o;var a=i.prototype;return a.getSvg=function(e){var t=this.props;return u.a[e]&&u.a[e].func(t.color,t.size)},a.render=function(t){var i,r=t.className,o=t.prefix,a=t.type,c=t.text,s=t.vertical,u=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(i=o[n])>=0||(r[i]=e[i]);return r}(t,["className","prefix","type","text","vertical"]),p=this.getSvg(a);return!!p&&e("div",n({className:l()(o,r,(i={},i[o+"__vertical"]=s,i))},u),p,!!c&&e("span",{className:o+"-text"},c))},i}(c.Component));a={prefix:"caf-loading",type:"spinner",vertical:!1},(o="defaultProps")in(r=p)?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,t.a=p}).call(this,i("yA1Q").h)},NKah:function(e,t,i){"use strict";(function(e){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var a=i("yA1Q"),c=(i("17x9"),i("8Jek")),s=i.n(c),l=i("nV0/"),u=i("lkHa"),p=i("6ETe"),f=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return o(r(e=t.call.apply(t,[this].concat(n))||this),"isSwiping",!1),o(r(e),"movedSize",0),o(r(e),"readyMoving",(function(t){e.startTimeStamp=Date.now(),e.isSwiping=!0;var i=Object(p.a)(t);e.startX=i.clientX})),o(r(e),"startMoving",(function(t){if(e.isSwiping){var i=Object(p.a)(t);e.deltaX=i.clientX-e.startX,e.offsetX=Math.abs(e.deltaX),e.direction=e.deltaX>=0?-1:1,t.preventDefault(),t.stopPropagation(),e.direction>0?e.offsetX>0&&e.offsetX<=e.swiperSize&&e.moveTo(e.deltaX,!0):e.moveTo(0)}})),o(r(e),"endMoving",(function(){e.isSwiping&&(e.isSwiping=!1,e.offsetX>0&&e.offsetX<=e.swiperSize&&e.moveTo(e.offsetX<e.swiperSize/2?0:-1*e.swiperSize),setTimeout((function(){return e.offsetX=0}),500))})),o(r(e),"swipable",!1),o(r(e),"promiseFunc",(function(t){setTimeout(t.bind(r(e)),0)})),o(r(e),"swiperSize",0),o(r(e),"cellWrapper",Object(a.createRef)()),o(r(e),"cellMain",Object(a.createRef)()),o(r(e),"cellSwiper",Object(a.createRef)()),e}var c,u;u=t,(c=i).prototype=Object.create(u.prototype),c.prototype.constructor=c,c.__proto__=u;var f=i.prototype;return f.moveTo=function(e,t){if(void 0===t&&(t=!1),this.cellWrapper&&this.cellWrapper.current){var i=this.cellWrapper.current;i.style.transitionDuration=t?"0ms":"500ms",i.style.transform="translate3d("+e+"px, 0, 0 )",this.movedSize=e}},f.registeSwiperEvent=function(){if(this.cellSwiper&&this.cellSwiper.current){this.swipable=!0;var e=this.cellSwiper.current.getBoundingClientRect();this.swiperSize=e.width}if(this.cellMain&&this.cellMain.current){var t=this.cellMain.current;t.addEventListener(p.b.down,this.readyMoving),t.addEventListener(p.b.move,this.startMoving),t.addEventListener(p.b.up,this.endMoving),t.addEventListener(p.b.out,this.endMoving)}},f.unRegisteSwiperEvent=function(){if(this.cellMain&&this.cellMain.current&&this.swipable){var e=this.cellMain.current;this.swipable=!1,e.removeEventListener(p.b.down,this.readyMoving),e.removeEventListener(p.b.move,this.startMoving),e.removeEventListener(p.b.up,this.endMoving),e.removeEventListener(p.b.out,this.endMoving)}},f.componentWillUnmount=function(){this.unRegisteSwiperEvent()},f.render=function(t){var i,r=t.prefix,o=t.className,a=t.icon,c=t.iconSize,u=t.title,p=t.label,f=t.value,d=t.url,v=t.rightIcon,h=t.border,m=t.middle,b=t.swipeList,w=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(i=o[n])>=0||(r[i]=e[i]);return r}(t,["prefix","className","icon","iconSize","title","label","value","url","rightIcon","border","middle","swipeList"]),y=!!d||!!v,g=s()(r,o,((i={})[r+"__clickable"]=y,i[r+"__border"]=h,i[r+"__middle"]=m,i));a=a?e(l.a,{icon:a,size:c}):null,u=e("div",{className:r+"-title"},e("span",null,u),!!p&&e("div",{className:r+"-label"},p));var x=f?e("div",{className:r+"-value"},e("span",null,f)):null,k=y?e(l.a,{icon:v||"arrow_right"}):null,N=d?"a":"div",C=d?{href:d}:{},S=null;return b&&b.length?(S=e("div",{className:r+"-swiper",ref:this.cellSwiper},b.map((function(t){return e("span",{className:r+"-swiper-item",onClick:t.clickHandler,style:t.style},t.name)}))),this.promiseFunc(this.registeSwiperEvent)):this.promiseFunc(this.unRegisteSwiperEvent),e("div",n({className:g},w),e("div",{className:r+"-wrapper",ref:this.cellWrapper},e(N,n({},C,{className:r+"-main",ref:this.cellMain}),a,u,x,k),S))},i}(a.Component);o(f,"CellGroup",u.a),o(f,"defaultProps",{prefix:"caf-cell",border:!0,swipeList:[]}),t.a=f}).call(this,i("yA1Q").h)},Re0E:function(){},dXIs:function(){},lkHa:function(e,t,i){"use strict";(function(e){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var r,o,a,c=i("yA1Q"),s=(i("17x9"),i("8Jek")),l=i.n(s),u=function(t){function i(){return t.apply(this,arguments)||this}var r,o;return o=t,(r=i).prototype=Object.create(o.prototype),r.prototype.constructor=r,r.__proto__=o,i.prototype.render=function(t){var i,r=t.prefix,o=t.className,a=t.border,c=t.title,s=t.children,u=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(i=o[n])>=0||(r[i]=e[i]);return r}(t,["prefix","className","border","title","children"]);return e("div",n({className:l()(r,o)},u),!!c&&e("div",{className:r+"-title"},c),e("div",{className:l()(r+"-wrapper",(i={},i[r+"-wrapper__border"]=a,i))},s))},i}(c.Component);a={prefix:"caf-cellgroup",border:!0},(o="defaultProps")in(r=u)?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,t.a=u}).call(this,i("yA1Q").h)},pM7f:function(e,t,i){"use strict";i("8mo1"),i("7QdH")}}]);