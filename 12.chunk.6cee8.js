(window.webpackJsonp=window.webpackJsonp||[]).push([[12,28],{"4yN2":function(e,t,i){"use strict";(function(e){t.a={step:{cSize:"60px",cColor:"#ccc",func:function(t,i){return e("svg",{version:"1.1",id:"L4",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 40","enable-background":"new 0 0 0 0",xmlSpace:"preserve",style:"fill: "+(t||this.cColor)+";width:"+(i||this.cSize)+";"},e("circle",{stroke:"none",cx:"25",cy:20,r:"6"},e("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.1"})),e("circle",{stroke:"none",cx:"50",cy:20,r:"6"},e("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.2"})),e("circle",{stroke:"none",cx:"75",cy:20,r:"6"},e("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.3"})))}},spinner:{cColor:"#ccc",cSize:"32px",func:function(t,i){var r=this.cSize;return e("svg",{xmlns:"http://www.w3.org/2000/svg",width:i||r,height:i||r,viewBox:"0 0 38 38",stroke:t||this.cColor},e("g",{fill:"none","fill-rule":"evenodd"},e("g",{transform:"translate(1 1)","stroke-width":"2"},e("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),e("path",{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(275.955 18 18)"},e("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))}},ripple:{cColor:"#ccc",cSize:"60px",func:function(t,i){var r=this.cSize;return e("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:i||r,height:i||r},viewBox:"0 0 45 45",stroke:t||this.cColor},e("g",{fill:"none","fill-rule":"evenodd",transform:"translate(1 1)","stroke-width":"2"},e("circle",{cx:"22",cy:"22",r:"13.2878","stroke-opacity":"0"},e("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),e("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),e("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),e("circle",{cx:"22",cy:"22",r:"21.2878","stroke-opacity":"0"},e("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),e("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),e("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),e("circle",{cx:"22",cy:"22",r:"5.46583"},e("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"}))))}}}}).call(this,i("yA1Q").h)},Mw2m:function(e,t,i){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}var n,a,o,c=i("yA1Q"),s=(i("17x9"),i("8Jek")),l=i.n(s),u=i("4yN2"),p=(Object.keys(u.a),function(t){function i(){return t.apply(this,arguments)||this}var n,a;a=t,(n=i).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a;var o=i.prototype;return o.getSvg=function(e){var t=this.props;return u.a[e]&&u.a[e].func(t.color,t.size)},o.render=function(t){var i,n=t.className,a=t.prefix,o=t.type,c=t.text,s=t.vertical,u=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(i=a[r])>=0||(n[i]=e[i]);return n}(t,["className","prefix","type","text","vertical"]),p=this.getSvg(o);return!!p&&e("div",r({className:l()(a,n,(i={},i[a+"__vertical"]=s,i))},u),p,!!c&&e("span",{className:a+"-text"},c))},i}(c.Component));o={prefix:"caf-loading",type:"spinner",vertical:!1},(a="defaultProps")in(n=p)?Object.defineProperty(n,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[a]=o,t.a=p}).call(this,i("yA1Q").h)},dXIs:function(){},olaf:function(e,t,i){"use strict";i("dXIs")},rGQV:function(e,t,i){"use strict";i.r(t),function(e){i("olaf");var r=i("Mw2m");i("s8eq");t.default=function(){return e("div",{class:"demo-loading"},e("p",null,"加载类型"),e(r.a,null),e(r.a,{type:"step"}),e(r.a,{type:"wave"}),e("p",null,"自定义颜色"),e(r.a,{color:"#1989fa"}),e(r.a,{type:"step",color:"#1989fa"}),e("p",null,"自定义尺寸"),e(r.a,{size:"40px"}),e(r.a,{type:"step",size:"60px"}),e("p",null,"加载文案及自定义文字大小"),e(r.a,{text:"Loading..."}),e(r.a,{text:"Loading...",textSize:"16px"}),e("p",null,"垂直文案"),e(r.a,{text:"加载",vertical:!0}))}}.call(this,i("yA1Q").h)},s8eq:function(){}}]);