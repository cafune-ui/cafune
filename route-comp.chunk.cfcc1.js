(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"3SRf":function(e,t,s){"use strict";s.r(t),function(e){s.d(t,"Comp",(function(){return i}));var a=s("4dxh"),n=s("T8kc"),o=s("bs1W"),i=(s("pO3/"),function(t){function a(){return t.apply(this,arguments)||this}var i,r;r=t,(i=a).prototype=Object.create(r.prototype),i.prototype.constructor=i,i.__proto__=r;var l=a.prototype;return l.getComp=function(t){return t&&o[t]?e(n.a,{path:"/"+t,getComponent:function(){return s("ky+N")("./"+t).then((function(e){return e.default}))}}):e("div",null,"unavailable comp")},l.render=function(t){return e("div",{class:"comp"},this.getComp(t.name))},a}(a.Component));t.default=i}.call(this,s("4dxh").h)},T8kc:function(e,t,s){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}var n=s("4dxh");t.a=function(e){function t(){var t;return(t=e.call(this)||this).state={componentData:null},t}var s,o;o=e,(s=t).prototype=Object.create(o.prototype),s.prototype.constructor=s,s.__proto__=o;var i=t.prototype;return i.loadComponent=function(){var e=this;if(this.props.component)return this.setState({componentData:this.props.component});var t,s=this.props.getComponent(this.props.url,(function(t){var s=t.component;s&&e.setState({componentData:s})}),a({},this.props,this.props.matches));s&&s.then&&(t=this.props.url,s.then((function(s){t===e.props.url?e.setState({componentData:s}):e.setState({componentData:null},(function(){e.loadComponent()}))})))},i.componentWillReceiveProps=function(e){var t=this;this.props.path&&this.props.path!==e.path&&this.setState({componentData:null},(function(){t.loadComponent()}))},i.componentWillMount=function(){this.loadComponent()},i.render=function(){return this.state.componentData?Object(n.h)(this.state.componentData,this.props):this.props.loading?this.props.loading():null},t}(n.Component)},bs1W:function(e){e.exports=JSON.parse('{"action-bar":{"desc":"动作栏","displayName":"ActionBar"},"action-sheet":{"desc":"动作面板","displayName":"ActionSheet"},"button":{"desc":"按钮","displayName":"Button"},"calendar":{"desc":"日历","displayName":"Calendar"},"cell":{"desc":"单元格","displayName":"Cell"},"checkbox":{"desc":"复选框","displayName":"Checkbox"},"collapse":{"desc":"折叠面板","displayName":"Collapse"},"grid":{"desc":"宫格","displayName":"Grid"},"icon":{"desc":"图标","displayName":"Icon"},"layout":{"desc":"布局","displayName":"Layout"},"lazyload":{"desc":"懒加载包裹组件","displayName":"Lazyload"},"loading":{"desc":"加载","displayName":"Loading"},"modal":{"desc":"模态框","displayName":"Modal"},"nav-bar":{"desc":"导航栏","displayName":"NavBar"},"notice-bar":{"desc":"通知栏","displayName":"NoticeBar"},"pagination":{"desc":"分页","displayName":"Pagination"},"pull-refresh":{"desc":"下拉刷新","displayName":"PullRefresh"},"radio":{"desc":"单选框组","displayName":"Radio"},"scroller":{"desc":"","displayName":"Scroller"},"search-bar":{"desc":"搜索栏","displayName":"SearchBar"},"skeleton":{"desc":"骨架屏","displayName":"Skeleton"},"stepper":{"desc":"步进器","displayName":"Stepper"},"steps":{"desc":"步骤条","displayName":"Steps"},"swiper":{"desc":"轮播","displayName":"Swiper"},"switch":{"desc":"开关","displayName":"Switch"},"tab-bar":{"desc":"标签栏","displayName":"TabBar"},"tabs":{"desc":"标签卡","displayName":"Tabs"},"toast":{"desc":"轻提示","displayName":"Toast"},"transition":{"desc":"过渡","displayName":"Transition"}}')},"ky+N":function(e,t,s){function a(e){if(!s.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return Promise.all(t.slice(2).map(s.e)).then((function(){return s.t(a,t[1])}))}var n={"./":["RAzt",9],"./action-bar":["KuUb",9,0,25],"./action-bar/":["KuUb",9,0,25],"./action-bar/index":["KuUb",9,0,25],"./action-bar/index.js":["KuUb",9,0,25],"./action-sheet":["doho",9,0,5],"./action-sheet/":["doho",9,0,5],"./action-sheet/index":["doho",9,0,5],"./action-sheet/index.js":["doho",9,0,5],"./button":["vlsd",9,0,28],"./button/":["vlsd",9,0,28],"./button/index":["vlsd",9,0,28],"./button/index.js":["vlsd",9,0,28],"./calendar":["Vjl1",9,21],"./calendar/":["Vjl1",9,21],"./calendar/index":["Vjl1",9,21],"./calendar/index.js":["Vjl1",9,21],"./cell":["6Kup",9,4],"./cell/":["6Kup",9,4],"./cell/index":["6Kup",9,4],"./cell/index.js":["6Kup",9,4],"./checkbox":["+sNi",9,6],"./checkbox/":["+sNi",9,6],"./checkbox/index":["+sNi",9,6],"./checkbox/index.js":["+sNi",9,6],"./collapse":["vIG1",9,7],"./collapse/":["vIG1",9,7],"./collapse/index":["vIG1",9,7],"./collapse/index.js":["vIG1",9,7],"./grid":["NZM8",9,10],"./grid/":["NZM8",9,10],"./grid/index":["NZM8",9,10],"./grid/index.js":["NZM8",9,10],"./icon":["PSVV",9,9],"./icon/":["PSVV",9,9],"./icon/index":["PSVV",9,9],"./icon/index.js":["PSVV",9,9],"./icon/list":["d6Oj",9,36],"./icon/list.js":["d6Oj",9,36],"./index":["RAzt",9],"./index.js":["RAzt",9],"./layout":["CA/a",9,15],"./layout/":["CA/a",9,15],"./layout/index":["CA/a",9,15],"./layout/index.js":["CA/a",9,15],"./layout/style":["Sgrb",7,30],"./layout/style.scss":["Sgrb",7,30],"./lazyload":["C1KR",9,16],"./lazyload/":["C1KR",9,16],"./lazyload/index":["C1KR",9,16],"./lazyload/index.js":["C1KR",9,16],"./lazyload/style":["Kbvt",7,31],"./lazyload/style.scss":["Kbvt",7,31],"./loading":["csOB",9,17],"./loading/":["csOB",9,17],"./loading/index":["csOB",9,17],"./loading/index.js":["csOB",9,17],"./loading/style":["jqrg",7,32],"./loading/style.scss":["jqrg",7,32],"./modal":["qoy7",9,0,19],"./modal/":["qoy7",9,0,19],"./modal/index":["qoy7",9,0,19],"./modal/index.js":["qoy7",9,0,19],"./nav-bar":["rsI5",9,11],"./nav-bar/":["rsI5",9,11],"./nav-bar/index":["rsI5",9,11],"./nav-bar/index.js":["rsI5",9,11],"./nav-bar/style":["a83r",7,33],"./nav-bar/style.scss":["a83r",7,33],"./notice-bar":["0WL4",9,0,18],"./notice-bar/":["0WL4",9,0,18],"./notice-bar/index":["0WL4",9,0,18],"./notice-bar/index.js":["0WL4",9,0,18],"./notice-bar/style":["ubI5",7,34],"./notice-bar/style.scss":["ubI5",7,34],"./pagination":["p+TJ",9,0,27],"./pagination/":["p+TJ",9,0,27],"./pagination/index":["p+TJ",9,0,27],"./pagination/index.js":["p+TJ",9,0,27],"./pull-refresh":["zLq5",9,22],"./pull-refresh/":["zLq5",9,22],"./pull-refresh/index":["zLq5",9,22],"./pull-refresh/index.js":["zLq5",9,22],"./radio":["p2m0",9,23],"./radio/":["p2m0",9,23],"./radio/index":["p2m0",9,23],"./radio/index.js":["p2m0",9,23],"./scroller":["elsz",9,29],"./scroller/":["elsz",9,29],"./scroller/index":["elsz",9,29],"./scroller/index.js":["elsz",9,29],"./search-bar":["bI39",9,0,26],"./search-bar/":["bI39",9,0,26],"./search-bar/index":["bI39",9,0,26],"./search-bar/index.js":["bI39",9,0,26],"./skeleton":["/RZ2",9,20],"./skeleton/":["/RZ2",9,20],"./skeleton/index":["/RZ2",9,20],"./skeleton/index.js":["/RZ2",9,20],"./stepper":["gl+c",9,8],"./stepper/":["gl+c",9,8],"./stepper/index":["gl+c",9,8],"./stepper/index.js":["gl+c",9,8],"./steps":["W/D9",9,0,24],"./steps/":["W/D9",9,0,24],"./steps/index":["W/D9",9,0,24],"./steps/index.js":["W/D9",9,0,24],"./style":["pO3/",7],"./style.scss":["pO3/",7],"./swiper":["D826",9,1],"./swiper/":["D826",9,1],"./swiper/index":["D826",9,1],"./swiper/index.js":["D826",9,1],"./swiper/index.scss":["ASb5",7,42],"./switch":["83nq",9,13],"./switch/":["83nq",9,13],"./switch/index":["83nq",9,13],"./switch/index.js":["83nq",9,13],"./tab-bar":["y/H0",9,3],"./tab-bar/":["y/H0",9,3],"./tab-bar/index":["y/H0",9,3],"./tab-bar/index.js":["y/H0",9,3],"./tabs":["rJCw",9,14],"./tabs/":["rJCw",9,14],"./tabs/index":["rJCw",9,14],"./tabs/index.js":["rJCw",9,14],"./toast":["aAM5",9,0,12],"./toast/":["aAM5",9,0,12],"./toast/indes":["bywv",7,35],"./toast/indes.scss":["bywv",7,35],"./toast/index":["aAM5",9,0,12],"./toast/index.js":["aAM5",9,0,12],"./transition":["crIU",9,0,2],"./transition/":["crIU",9,0,2],"./transition/index":["crIU",9,0,2],"./transition/index.js":["crIU",9,0,2],"./transition/index.scss":["JRl5",7,43]};a.keys=function(){return Object.keys(n)},a.id="ky+N",e.exports=a},"pO3/":function(){}}]);