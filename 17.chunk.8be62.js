(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+sNi":function(e,t,n){"use strict";n.r(t),function(e){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"default",(function(){return s}));n("FpM5");var c=n("wKhE"),o=(n("e11i"),n("IypD")),i=n("4dxh"),a=o.a.CellGroup,l=c.a.CheckboxGroup,s=function(t){function n(){for(var e,n,r,c,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,n=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e),c={check:"hi",checks:["hi","hello"],checkList:[{value:"hi",text:"自定义颜色",checkedColor:"#369"},{value:"holla",text:"开启禁用",disabled:!0},{value:"bonjour",text:"自定义激活图标",icons:{actived:"more"}},{value:"hello",text:"自定义激活及未激活图标",icons:{inactive:"https://image.flaticon.com/icons/png/128/2026/2026450.png",actived:"https://image.flaticon.com/icons/png/128/2026/2026462.png"}}]},(r="state")in n?Object.defineProperty(n,r,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[r]=c,e}var i,s;return s=t,(i=n).prototype=Object.create(s.prototype),i.prototype.constructor=i,i.__proto__=s,n.prototype.render=function(t,n){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(t);var i=n.check,s=n.checks,u=n.checkList;return e("div",null,e("p",{class:"caf-demo-title"},"单独使用"),e("div",{class:"caf-demo-block"},u.map((function(t,n){return e(c.a,r({checked:i===t.value},t,{handleChange:function(e){console.log(e)},key:"s-"+n+"-"+t.value}),t.text)}))),e("p",{class:"caf-demo-title"},"与Cell 组件一起使用"),u.map((function(t,n){return e(o.a,{title:"test",value:e(c.a,r({checked:i===t.value},t,{handleChange:function(e){console.log(e)}}),t.text),key:"s-c-"+n+"-"+t.id})})),e(a,{title:"复选框组"},e(l,{model:s,handleChange:function(e){return console.log(e)}},u.map((function(t,n){return e(o.a,{title:"test",value:e(c.a,t,t.text),key:"g-"+n+"-"+t.value})})))),e(a,{title:"复选框组（最大可选为2）"},e(l,{model:s,handleChange:function(e){return console.log(e)},maxSelect:2},u.map((function(t,n){return e(o.a,{title:"test",value:e(c.a,t,t.text),key:"g-"+n+"-"+t.value})})))))},n}(i.Component)}.call(this,n("4dxh").h)},FpM5:function(e,t,n){"use strict";n("ruW5"),n("S6tr")},S6tr:function(){},e11i:function(e,t,n){"use strict";n("ruW5"),n("PMho")},nQvn:function(e,t,n){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n("4dxh"),a=n("O94r"),l=n.n(a),s=function(t){function n(e){var n;return o(c(n=t.call(this,e)||this),"seletedData",[]),o(c(n),"canCheck",(function(e){var t=n.props.maxSelect,r=c(n).seletedData;return!(t>0&&-1===r.indexOf(e)&&r.length===t)})),o(c(n),"onChange",(function(e){var t=c(n).seletedData,r=t.indexOf(e);-1===r?t.push(e):t.splice(r,1),n.seletedData=t,n.props.handleChange&&n.props.handleChange(t)})),n.seletedData=e.model,n}var i,a;a=t,(i=n).prototype=Object.create(a.prototype),i.prototype.constructor=i,i.__proto__=a;var s=n.prototype;return s.getChildContext=function(){var e=this.props;return{model:e.model,allDisabled:e.disabled,groupChange:this.onChange,canCheck:this.canCheck}},s.render=function(t){var n=t.prefix,c=t.children,o=t.className,i=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(c[n]=e[n]);return c}(t,["prefix","children","className"]);return e("div",r({className:l()(n,o)},i),c)},n}(i.Component);o(s,"defaultProps",{prefix:"caf-checkbox-group",disabled:!1,maxSelect:0}),t.a=s}).call(this,n("4dxh").h)},wKhE:function(e,t,n){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return e&&-1!==e.indexOf("/")}var a=n("4dxh"),l=n("O94r"),s=n.n(l),u=n("nQvn"),h=n("Q+hs"),d=function(t){function n(e){var n;return o(c(n=t.call(this,e)||this),"state",{checked:!1}),o(c(n),"onClick",(function(){var e=n.props,t=e.value,r=e.disabled,c=e.handleChange,o=n.context,i=o.groupChange,a=o.allDisabled,l=o.canCheck,s=!l||l(t);r||a||!s||(n.setState({checked:!n.state.checked}),i?i(t):c&&c(t))})),n}var a,l;l=t,(a=n).prototype=Object.create(l.prototype),a.prototype.constructor=a,a.__proto__=l;var u=n.prototype;return u.componentDidMount=function(){var e=this.props,t=e.checked,n=(this.context||{}).model,r=void 0!==t&&t||-1!==(void 0===n?[]:n).indexOf(e.value);this.setState({checked:r})},u.componentWillReceiveProps=function(e){"checked"in e&&!this.context.model&&this.setState({checked:e.checked})},u.render=function(t,n,c){var o,a,l=n.checked,u=(void 0===c?{}:c).allDisabled,d=void 0!==u&&u,p=t.prefix,f=t.value,v=t.id,b=t.className,k=t.icons,x=t.children,g=t.checkedColor,m=t.disabled,y=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(c[n]=e[n]);return c}(t,["prefix","value","id","className","icons","children","checkedColor","disabled"]),C={};g&&l&&(C.backgroundColor=g);var O=m||d,w=e(h.a,{icon:"check"}),_=!1;return k&&("actived"in k&&l&&(_=i(k.actived),w=e(h.a,{icon:k.actived,size:_?"14px":"12px"})),"inactive"in k&&!l&&(_=i(k.inactive),w=e(h.a,{icon:k.inactive,size:_?"14px":"12px"}))),e("div",r({className:s()(p,b,(o={},o[p+"__checked"]=l,o[p+"__disabled"]=O,o)),onClick:this.onClick},y),e("div",{className:p+"-input"},e("input",{type:"checkbox",id:v,checked:l,disabled:m,value:f}),e("span",{className:s()(p+"-input-inner",(a={},a[p+"-input-inner__custom"]=_,a)),style:C},w)),e("div",{className:p+"-label"},x))},n}(a.Component);o(d,"CheckboxGroup",u.a),o(d,"defaultProps",{prefix:"caf-checkbox",checked:!1,disabled:!1}),t.a=d}).call(this,n("4dxh").h)}}]);