(window.webpackJsonp=window.webpackJsonp||[]).push([[17,30],{"2blU":function(){},Ibrn:function(t,n,o){"use strict";o.r(n),function(t){o.d(n,"default",(function(){return r}));o("pVlN");var e=o("V86y"),i=o("yA1Q"),r=(o("2blU"),function(n){function o(){return n.apply(this,arguments)||this}var i,r;return r=n,(i=o).prototype=Object.create(r.prototype),i.prototype.constructor=i,i.__proto__=r,o.prototype.render=function(){return t("div",{class:"caf-demo caf-demo__noticebar"},t("p",null,"基础用法"),t(e.a,{text:"通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}),t("p",null,"自定义图标"),t(e.a,{icon:!1,text:"禁用图标通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}),t(e.a,{icon:"more",text:"自定义图标通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}),t("p",null,"禁止滚动"),t(e.a,{scrollable:!1,text:"通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}),t("p",null,"多行展示"),t(e.a,{wrapable:!0,text:"通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}),t("p",null,"自定义样式"),t(e.a,{color:"#fff",bgColor:"#177cb0",icon:"more",text:"通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}),t("p",null,"自定义右侧"),t(e.a,{action:"closable",onClick:function(){console.log("closed ")},text:"通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}),t(e.a,{action:"link",text:"通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}),t(e.a,{action:"去看看",text:"通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}),t(e.a,{action:t("span",{style:"color: #88ada6;"},"去看看"),text:"通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}))},o}(i.Component))}.call(this,o("yA1Q").h)},V86y:function(t,n,o){"use strict";(function(t){function e(){return(e=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])}return t}).apply(this,arguments)}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t,n,o){return n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}var a=o("yA1Q"),c=(o("17x9"),o("8Jek")),l=o.n(c),s=o("nV0/"),p=function(n){function o(){for(var t,o=arguments.length,e=new Array(o),c=0;c<o;c++)e[c]=arguments[c];return r(i(t=n.call.apply(n,[this].concat(e))||this),"state",{wrapWidth:0,offsetWidth:0,duration:0,isFirst:!0,isShow:!0}),r(i(t),"wrap",Object(a.createRef)()),r(i(t),"content",Object(a.createRef)()),r(i(t),"onAnimationEnd",(function(){t.setState({isFirst:!1},(function(){t.calcInfo()}))})),r(i(t),"onRightClick",(function(){"closable"===t.props.action&&t.setState({isShow:!1}),t.props.onClick&&t.props.onClick()})),t}var c,p;p=n,(c=o).prototype=Object.create(p.prototype),c.prototype.constructor=c,c.__proto__=p;var u=o.prototype;return u.componentWillReceiveProps=function(t){this.props.text!==t.text&&this.calcInfo()},u.componentDidMount=function(){this.calcInfo()},u.calcInfo=function(){var t=this.wrap,n=this.content,o=this.props,e=o.scrollable,i=o.speed;if(t.current&&n.current){n=n.current;var r=(t=t.current).getBoundingClientRect().width,a=n.getBoundingClientRect().width;e&&a>r&&this.setState({wrapWidth:r,offsetWidth:a,duration:a/i})}},u.render=function(n,o){var i=o.isFirst,r=o.duration,a=o.wrapWidth,c=o.isShow,p=n.prefix,u=n.className,f=n.text,d=n.icon,h=n.scrollable,b=n.wrapable,y=n.delay,w=n.color,m=n.bgColor,g=n.action,_=function(t,n){if(null==t)return{};var o,e,i={},r=Object.keys(t);for(e=0;e<r.length;e++)n.indexOf(o=r[e])>=0||(i[o]=t[o]);return i}(n,["prefix","className","text","icon","scrollable","wrapable","delay","color","bgColor","action"]),v={};(w||m)&&(v={color:w,backgroundColor:m});var x,k,C,j={};return b||(j={paddingLeft:i?0:a+"px",animationDelay:(i?y:0)+"s",animationDuration:r+"s"}),g&&(x="closable"===g||"link"===g?t("span",{className:p+"-action",onClick:this.onRightClick},t(s.a,{icon:"closable"===g?"wrong":"arrow_right"})):"string"==typeof g?t("span",{className:p+"-action"},g):g),c?t("div",e({className:l()(p,u,(k={},k[p+"__wrapable"]=b,k)),style:v},_),!!d&&t(s.a,{icon:"string"==typeof d?d:"notice"}),t("div",{className:p+"-wrapper",ref:this.wrap},t("p",{className:l()(p+"-content",(C={},C[p+"-content__scroll"]=h&&!b,C[p+"-content__scroll__infinite"]=!i&&!b,C[p+"-content__ellipsis"]=!h&&!b,C)),onAnimationend:this.onAnimationEnd,onWebkitAnimationEnd:this.onAnimationEnd,ref:this.content,style:j},f)),x):null},o}(a.Component);r(p,"defaultProps",{prefix:"caf-noticebar",scrollable:!0,wrapable:!1,icon:"notice",speed:50,delay:1}),n.a=p}).call(this,o("yA1Q").h)},jIpj:function(){},pVlN:function(t,n,o){"use strict";o("8mo1"),o("jIpj")}}]);