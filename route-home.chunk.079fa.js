(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"+v5G":function(){},"5zTz":function(e,t,n){e.exports=n.p+"5e2b04dda935aba7a6de71e0969a3f4f.png"},AWqn:function(e,t,n){function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,7)}))}var a={"./action-bar.md":["qGwn",39],"./action-sheet.md":["lVGV",40],"./button.md":["1EiK",41],"./calendar.md":["RbId",42],"./cell.md":["JEJf",43],"./checkbox.md":["KUia",44],"./collapse.md":["qHRm",45],"./grid.md":["e4ov",46],"./icon.md":["VeUD",47],"./layout.md":["a+9S",48],"./lazyload.md":["qZJI",49],"./loading.md":["ORqK",50],"./modal.md":["DMtZ",51],"./nav-bar.md":["9sLI",52],"./notice-bar.md":["9b5D",53],"./pagination.md":["o/tj",54],"./pull-refresh.md":["bUg9",55],"./scroller.md":["2hfg",56],"./search-bar.md":["McOx",57],"./skeleton.md":["nuZg",58],"./stepper.md":["MIct",59],"./steps.md":["HRZ2",60],"./swiper.md":["e9XM",61],"./switch.md":["Z3gC",62],"./tab-bar.md":["hIEC",63],"./tabs.md":["1sgO",64],"./toast.md":["L40Y",65]};r.keys=function(){return Object.keys(a)},r.id="AWqn",e.exports=r},BKwF:function(){},C3VE:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var r=n("4dxh"),a=n("Pxk5"),o=function(t){function r(){for(var e,n,r,a,o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return e=t.call.apply(t,[this].concat(s))||this,n=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e),a={markdown:null},(r="state")in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,e}var o,s;s=t,(o=r).prototype=Object.create(s.prototype),o.prototype.constructor=o,o.__proto__=s;var i=r.prototype;return i.getMd=function(e){var t=this;e&&(this.props.compInfo[e]?n("AWqn")("./"+e+".md"):n("f4t+")("./"+e+".md")).then((function(e){var n=e.default.match(/module.exports = "((.|\n)+)";$/);n&&(n=n[1].replace(/\\n(?!(<\/|$))/g,"&#10;").replace(/\\n/g,"").replace(/\\/g,""),t.setState({markdown:n}))})).catch((function(e){console.error(e),t.setState({markdown:"<div>markdown not exist</div>"})}))},i.componentWillReceiveProps=function(e){this.props.name!==e.name&&(this.getMd(e.name),this.setState({shownav:!1}))},i.componentWillMount=function(){this.getMd(this.props.name)},i.render=function(t,n){var r=t.name,o=t.compInfo,s=t.type;return e("div",{class:"caf-doc-content caf-markdown"},e("div",{class:"caf-markdown-contain",dangerouslySetInnerHTML:{__html:n.markdown}}),"component"===s&&e(a.a,{name:r,compInfo:o}))},r}(r.Component)}).call(this,n("4dxh").h)},DEDn:function(e){e.exports=JSON.parse('{"doc":{"name":"指南","prefix":"doc","list":[{"list":[{"name":"介绍","url":"intro"},{"name":"使用","url":"usage"},{"name":"自定义主题","url":"customTheme"}]}]},"components":{"name":"组件","prefix":"components","list":[{"name":"基础组件","list":[{"url":"cell"},{"url":"icon"},{"url":"button"},{"url":"layout"}]},{"name":"表单组件","list":[{"url":"switch"},{"url":"checkbox"},{"url":"calendar"},{"url":"stepper"},{"url":"search-bar"}]},{"name":"反馈组件","list":[{"url":"action-sheet"},{"url":"action-bar"},{"url":"toast"},{"url":"pull-refresh"}]},{"name":"展示组件","list":[{"url":"grid"},{"url":"swiper"},{"url":"skeleton"},{"url":"notice-bar"},{"url":"lazyload"},{"url":"steps"}]},{"name":"导航组件","list":[{"url":"tabs"},{"url":"tab-bar"},{"url":"pagination"},{"url":"nav-bar"}]}]}}')},"H/Qd":function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,"Home",(function(){return d}));var o=n("4dxh"),s=n("bs1W"),i=n("qmoi"),c=n("ZKvv"),l=n("C3VE"),d=(n("BKwF"),n("+v5G"),function(e){function t(){for(var t,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return a(r(t=e.call.apply(e,[this].concat(o))||this),"state",{showcode:!1,shownav:!1}),a(r(t),"toggleStatus",(function(e){return function(){var n;t.setState(((n={})[e]=!t.state[e],n))}})),t}var n,d;return d=e,(n=t).prototype=Object.create(d.prototype),n.prototype.constructor=n,n.__proto__=d,t.prototype.render=function(e,t){var n=e.type,r=e.name,a=t.showcode,d=t.shownav;return Object(o.h)("div",{class:"caf-doc"},Object(o.h)(i.a,{toggleStatus:this.toggleStatus}),Object(o.h)("div",{class:"caf-doc-main"},Object(o.h)(c.a,{shownav:d,toggleStatus:this.toggleStatus,compInfo:s,name:r}),Object(o.h)(l.a,{name:r,compInfo:s,toggleStatus:this.toggleStatus,type:n}),"component"===n&&Object(o.h)("div",{class:"caf-doc-simulator","data-status":a?1:0},Object(o.h)("div",{class:"simulator-head"}),Object(o.h)("iframe",{src:"#/comp/"+r,frameBorder:"0"}),Object(o.h)("div",{class:"simulator-foot"}))))},t}(o.Component));t.default=d},O94r:function(e,t){var n;!function(){"use strict";function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}var a={}.hasOwnProperty;e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},Pxk5:function(e,t,n){"use strict";(function(e){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}));n("idj9");var o=n("Q+hs"),s=n("4dxh"),i=function(t){function i(){for(var e,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return a(r(e=t.call.apply(t,[this].concat(o))||this),"state",{code:null,isCodeOpen:!1,codeMaxheight:0,codeTransTime:.3}),a(r(e),"codeBlock",Object(s.createRef)()),a(r(e),"toggleStatus",(function(t){return function(){var n;e.setState(((n={})[t]=!e.state[t],n))}})),e}var c,l;l=t,(c=i).prototype=Object.create(l.prototype),c.prototype.constructor=c,c.__proto__=l;var d=i.prototype;return d.getCode=function(e){var t=this;e&&this.props.compInfo[e]?n("mcGb")("./"+e+"/index.js").then((function(e){e&&(e=(e=e.default).replace(/\\n+/g,"<br />").replace(/\\/g,""),t.setState({code:e}),setTimeout((function(){return t.setCodeProps()})))})):this.setState({code:"<div>unavailable code</div>"})},d.componentWillMount=function(){this.getCode(this.props.name)},d.componentDidMount=function(){this.setCodeProps()},d.setCodeProps=function(){if(this.codeBlock&&this.codeBlock.current){var e=this.codeBlock.current.getBoundingClientRect().height+200;this.setState({codeMaxheight:e,codeTransTime:e/2e3*.3}),this.isCodeSetted=!0}},d.componentWillReceiveProps=function(e){this.props.name!==e.name&&(this.isCodeSetted=!1,this.getCode(e.name),this.setState({showcode:!1,isCodeOpen:!1}))},d.render=function(t,n){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(t);var r=n.code,a=n.isCodeOpen,s=n.codeMaxheight,i=n.codeTransTime;return r&&e("div",{class:"caf-doc-code"},e("h4",{class:"caf-doc-code-header"},e("span",{class:"title"},"代码示例"),e("div",{class:"btn",onClick:this.toggleStatus("isCodeOpen")},e(o.a,{icon:a?"invisible":"visible "}))),e("div",{class:"caf-doc-code-body",style:a?{transitionDuration:i+"s",maxHeight:s+"px"}:{transitionDuration:i+"s"}},e("div",{class:"caf-doc-code-wrapper",ref:this.codeBlock},e("pre",{class:"language-jsx"},e("code",{class:"language-jsx",dangerouslySetInnerHTML:{__html:r}})))))},i}(s.Component)}).call(this,n("4dxh").h)},"Q+hs":function(e,t,n){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=n("O94r"),i=n.n(s),c=function(t){var n,s=t.prefix,c=t.className,l=t.icon,d=t.color,u=t.size,p=t.tag,f=t.customPrefix,h=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}(t,["prefix","className","icon","color","size","tag","customPrefix"]),m=function(e){return e&&-1!==e.indexOf("/")}(l),b=i()(s,c,f,((n={})[f+"-"+l]=!m,n)),v=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},h);m?v.style="width: "+(u=u||"16px")+";height: "+u+";line-height: "+u+";":(d&&(v.style=(v.style||"")+"color: "+d+";"),u&&(v.style=(v.style||"")+"font-size: "+u+";"));var y=p;return m?e(y,r({className:b},v),m&&e("img",{src:l,className:s+"-img"})):e(y,r({className:b},v))};c.defaultProps={prefix:"caf-icons",customPrefix:"caf-icon",tag:"i"},t.a=c}).call(this,n("4dxh").h)},ZKvv:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var r=n("4dxh"),a=n("O94r"),o=n.n(a),s=n("DEDn"),i=function(t){function n(){return t.apply(this,arguments)||this}var r,a;a=t,(r=n).prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a;var i=n.prototype;return i.renderSide=function(){var t=this.props,n=t.compInfo,r=t.name,a=[],i=function(t){var i=s[t],c=i.prefix,l=i.list,d="components"===c,u=e("div",{class:"nav"},e("h3",{class:"nav-head"},i.name),l.map((function(t,a){return e("div",{class:"nav-block",key:a},t.name&&e("p",{class:"nav-name"},t.name),t.list.map((function(t){return d&&n[t.url]||!d?e("a",{class:o()("nav-item",{"nav-item__actived":t.url===r}),href:"/"+c+"/"+t.url,key:t.url},d?n[t.url].displayName+" - "+n[t.url].desc:t.name):null})))})));a.push(u)};for(var c in s)i(c);return e("div",{class:"caf-doc-side-wrapper"},a)},i.render=function(t){return e("div",{class:"caf-doc-side","data-status":t.shownav?1:0},e("div",{class:"caf-doc-side-mask",onClick:(0,t.toggleStatus)("shownav")}),this.renderSide())},n}(r.Component)}).call(this,n("4dxh").h)},bs1W:function(e){e.exports=JSON.parse('{"action-bar":{"desc":"动作栏","displayName":"ActionBar"},"action-sheet":{"desc":"动作面板","displayName":"ActionSheet"},"button":{"desc":"按钮","displayName":"Button"},"calendar":{"desc":"日历","displayName":"Calendar"},"cell":{"desc":"单元格","displayName":"Cell"},"checkbox":{"desc":"复选框","displayName":"Checkbox"},"collapse":{"desc":"折叠面板","displayName":"Collapse"},"grid":{"desc":"宫格","displayName":"Grid"},"icon":{"desc":"图标","displayName":"Icon"},"layout":{"desc":"布局","displayName":"Layout"},"lazyload":{"desc":"懒加载包裹组件","displayName":"Lazyload"},"loading":{"desc":"加载","displayName":"Loading"},"modal":{"desc":"模态框","displayName":"Modal"},"nav-bar":{"desc":"导航栏","displayName":"NavBar"},"notice-bar":{"desc":"通知栏","displayName":"NoticeBar"},"pagination":{"desc":"分页","displayName":"Pagination"},"pull-refresh":{"desc":"下拉刷新","displayName":"PullRefresh"},"scroller":{"desc":"","displayName":"Scroller"},"search-bar":{"desc":"搜索栏","displayName":"SearchBar"},"skeleton":{"desc":"骨架屏","displayName":"Skeleton"},"stepper":{"desc":"步进器","displayName":"Stepper"},"steps":{"desc":"步骤条","displayName":"Steps"},"swiper":{"desc":"轮播","displayName":"Swiper"},"switch":{"desc":"开关","displayName":"Switch"},"tab-bar":{"desc":"标签栏","displayName":"TabBar"},"tabs":{"desc":"标签卡","displayName":"Tabs"},"toast":{"desc":"消息提示","displayName":"Toast"}}')},"f4t+":function(e,t,n){function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,7)}))}var a={"./customTheme.md":["8PSi",66],"./intro.md":["fuZ4",67],"./usage.md":["Vp0Q",68]};r.keys=function(){return Object.keys(a)},r.id="f4t+",e.exports=r},idj9:function(e,t,n){"use strict";n("ruW5")},mcGb:function(e,t,n){function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,7)}))}var a={"./action-bar/index.js":["/5Lq",69],"./action-sheet/index.js":["Ar0Q",70],"./button/index.js":["Dn1U",71],"./calendar/index.js":["CQAM",72],"./cell/index.js":["Fx+H",73],"./checkbox/index.js":["ZpBg",74],"./collapse/index.js":["AMgc",75],"./grid/index.js":["EsPM",76],"./icon/index.js":["oNW5",77],"./layout/index.js":["OI4U",78],"./lazyload/index.js":["QMen",79],"./loading/index.js":["+EdX",80],"./nav-bar/index.js":["DVP5",81],"./notice-bar/index.js":["TMdl",82],"./pagination/index.js":["qpR5",83],"./pull-refresh/index.js":["fKux",84],"./scroller/index.js":["g6Am",85],"./search-bar/index.js":["CQDE",86],"./skeleton/index.js":["6lPn",87],"./stepper/index.js":["BKER",88],"./steps/index.js":["eodp",89],"./swiper/index.js":["gQG+",90],"./switch/index.js":["DfLf",91],"./tab-bar/index.js":["k4mW",92],"./tabs/index.js":["czrS",93],"./toast/index.js":["63sL",94]};r.keys=function(){return Object.keys(a)},r.id="mcGb",e.exports=r},qmoi:function(e,t,n){"use strict";(function(e){n("idj9");var r=n("Q+hs"),a=n("5zTz"),o=n.n(a);t.a=function(t){var n=t.toggleStatus;return e("h1",{class:"caf-doc-head"},e("span",{class:"head-icon head-icon__menu",onClick:n("shownav")},e(r.a,{icon:"menu",size:"20px"})),e("div",{class:"head-bar"},e("img",{src:o.a,class:"head-bar-logo"})),e("a",{class:"head-icon head-icon__github",href:"https://github.com/cafune-ui/cafune/",alt:"cafune",target:"__blank"}),e("span",{class:"head-icon head-icon__code",onClick:n("showcode")},e(r.a,{icon:"more",size:"20px"})))}}).call(this,n("4dxh").h)},ruW5:function(){}}]);