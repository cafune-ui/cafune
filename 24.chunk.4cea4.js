(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"5jQP":function(){},OaM3:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return r}));var o=!("undefined"==typeof window||!window),r=function(n,e){void 0===e&&(e="body"),o&&document.querySelector(e)&&(document.querySelector(e).style.paddingBottom=n)}},bI39:function(n,e,t){"use strict";t.r(e),function(n){function o(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,"default",(function(){return a}));t("nksK");var i=t("rWRV"),a=function(e){function t(){for(var n,t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return r(o(n=e.call.apply(e,[this].concat(i))||this),"state",{val:"关键词"}),r(o(n),"focusInput",(function(){n.inpRef.focus()})),n}var a,c;return c=e,(a=t).prototype=Object.create(c.prototype),a.prototype.constructor=a,a.__proto__=c,t.prototype.render=function(e,t){var o=this;!function(n){if(null==n)throw new TypeError("Cannot destructure undefined")}(e);var r=t.val;return n("div",null,n("div",null,n("p",{class:"caf-demo-title"},"默认用法"),n(i.a,{placeholder:"请输入关键词"})),n("div",null,n("p",{class:"caf-demo-title"},"自定义值"),n(i.a,{placeholder:"请输入关键词",value:r,onChange:function(n){return o.setState({val:n})}})),n("div",null,n("p",{class:"caf-demo-title"},"设置回调"),n(i.a,{placeholder:"请输入关键词",onConfirm:function(n){return alert("确认，输入值为"+n)},onChange:function(n){return console.log(n)}})),n("div",null,n("p",{class:"caf-demo-title"},"定义右侧按钮"),n(i.a,{placeholder:"请输入关键词",onConfirm:function(){return alert("确认")},onCancel:function(){return alert("取消")},action:{type:"cancel",onClick:function(){console.log("action cancel")}}}),n(i.a,{placeholder:"请输入关键词",onConfirm:function(n){return alert(n)},onCancel:function(){return alert("取消")},action:{type:"confirm",onClick:function(){console.log("action confirm")}}}),n(i.a,{placeholder:"请输入关键词",onConfirm:function(){return alert("确认")},onCancel:function(){return alert("取消")},action:{type:"custom",text:"试试手气",keepShow:!1,onClick:function(){alert("试试手气")}}})),n("div",null,n("p",{class:"caf-demo-title",onClick:this.focusInput},"点击聚焦"),n(i.a,{placeholder:"请输入关键词",ref:function(n){return o.inpRef=n}})))},t}(t("4dxh").Component)}.call(this,t("4dxh").h)},nksK:function(n,e,t){"use strict";t("ruW5"),t("8U1p"),t("cz+e"),t("5jQP")},rWRV:function(n,e,t){"use strict";(function(n){function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function r(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var a=t("4dxh"),c=t("O94r"),u=t.n(c),l=t("Q+hs"),f=t("u6Ku"),s=t("OaM3"),p={confirm:{icon:"search",keepShow:!0},cancel:{icon:"wrong",keepShow:!1},custom:{keepShow:!0}},h=function(e){function t(n){var t;return i(r(t=e.call(this,n)||this),"actionSize",0),i(r(t),"onBlurTimeout",void 0),i(r(t),"clear",(function(){"value"in t.props||t.setState({value:""}),t.props.onChange&&t.props.onChange("")})),i(r(t),"onChange",(function(n){var e=n.target.value;"value"in t.props||t.setState({value:e}),t.props.onChange&&t.props.onChange(e)})),i(r(t),"onConfirm",(function(n){var e;n&&n.preventDefault(),e=t.inputRef&&t.inputRef.current?t.inputRef.current.value:t.state.value,t.props.onConfirm&&t.props.onConfirm(e)})),i(r(t),"onCancel",(function(){t.props.onCancel?t.props.onCancel(t.state.value||""):t.clear()})),i(r(t),"onFocus",(function(){t.setState({focus:!0})})),i(r(t),"blurFromOnClear",!0),i(r(t),"onBlur",(function(){var n;t.onBlurTimeout=(n=function(){!t.blurFromOnClear&&s.a&&document.activeElement!==t.inputRef&&t.setState({focus:!1}),t.blurFromOnClear=!1},window.requestAnimationFrame?window.requestAnimationFrame(n):window.setTimeout(n,1))})),i(r(t),"focus",(function(){t.inputRef&&t.inputRef.current&&t.inputRef.current.focus()})),i(r(t),"inputRef",Object(a.createRef)()),i(r(t),"actionRef",Object(a.createRef)()),i(r(t),"formRef",Object(a.createRef)()),t.state={value:n.value||"",focus:!1},t}var c,h;h=e,(c=t).prototype=Object.create(h.prototype),c.prototype.constructor=c,c.__proto__=h;var d=t.prototype;return d.componentWillReceiveProps=function(n){"value"in n&&n.value!==this.state.value&&this.setState({value:n.value})},d.componentDidMount=function(){this.componentDidUpdate()},d.componentDidUpdate=function(){if(this.actionRef&&this.actionRef.current&&s.a){var n=this.props.action;if(!(n=o({},p[n.type],n)).keepShow&&!this.state.focus){var e=this.actionRef.current,t=window.getComputedStyle(e),r=e.offsetWidth+parseInt(t.marginLeft,10);e.style="margin-right: "+-1*r+"px",this.actionSize=r}}},d.componentWillUnmount=function(){var n;this.onBlurTimeout&&s.a&&(n=this.onBlurTimeout,window.cancelAnimationFrame?window.cancelAnimationFrame(n):window.clearTimeout(n),this.onBlurTimeout=null)},d.render=function(e,t){var r,i=this,a=t.value,c=t.focus,s=e.prefix,h=e.className,d=e.placeholder,m=e.maxLength,v=e.action,w=e.leftIcon,C=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)e.indexOf(t=i[o])>=0||(r[t]=n[t]);return r}(e,["prefix","className","placeholder","maxLength","action","leftIcon"]),y=!1;return v&&(y=!(v=o({},p[v.type],v)).keepShow&&!c),n("form",o({className:u()(s,h),onSubmit:this.onConfirm},C),n("div",{className:s+"__input"},n(l.a,{icon:w}),n("input",{type:"search",placeholder:d,value:a,maxLength:m,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,ref:this.inputRef})),!!v&&n("div",{className:u()(s+"__action",(r={},r[s+"__action--hide"]=y,r)),style:{marginRight:y?-1*this.actionSize+"px":0},ref:this.actionRef},n(f.a,{type:"cancel"===v.type?"warning":"primary",size:"small",icon:v.icon?{type:v.icon}:{},onClick:function(){"cancel"===v.type?i.onCancel():"confirm"===v.type&&i.onConfirm(),v.onClick()}},v.text||"")))},t}(a.Component);i(h,"defaultProps",{prefix:"caf-search",align:"center",leftIcon:"search"}),e.a=h}).call(this,t("4dxh").h)}}]);