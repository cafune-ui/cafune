(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"06n4":function(t,e,n){"use strict";n("7U9T")},"7U9T":function(){},BQ33:function(t){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",a="week",s="month",u="quarter",o="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,h=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},d={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+f(r,2,"0")+":"+f(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,s),i=e-r<0,a=t.clone().add(n+(i?-1:1),s);return Number(-(n+(e-r)/(i?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:s,y:o,w:a,d:i,h:r,m:n,s:e,ms:t,Q:u}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p="en",_={};_[p]=l;var m=function(t){return t instanceof M},y=function(t,e,n){var r;if(!t)return p;if("string"==typeof t)_[t]&&(r=t),e&&(_[t]=e,r=t);else{var i=t.name;_[i]=t,r=i}return n||(p=r),r},v=function(t,e,n){if(m(t))return t.clone();var r=e?"string"==typeof e?{format:e,pl:n}:e:{};return r.date=t,new M(r)},$=d;$.l=y,$.i=m,$.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var M=function(){function f(t){this.$L=this.$L||y(t.locale,null,!0),this.parse(t)}var d=f.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if($.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return $},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return v(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<v(t)},d.$g=function(t,e,n){return $.u(t)?this[e]:this.set(n,t)},d.year=function(t){return this.$g(t,"$y",o)},d.month=function(t){return this.$g(t,"$M",s)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",n)},d.second=function(t){return this.$g(t,"$s",e)},d.millisecond=function(e){return this.$g(e,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,u){var c=this,h=!!$.u(u)||u,f=$.p(t),d=function(t,e){var n=$.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return h?n:n.endOf(i)},l=function(t,e){return $.w(c.toDate()[t].apply(c.toDate(),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},p=this.$W,_=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case o:return h?d(1,0):d(31,11);case s:return h?d(1,_):d(0,_+1);case a:var v=this.$locale().weekStart||0,M=(p<v?p+7:p)-v;return d(h?m-M:m+(6-M),_);case i:case"date":return l(y+"Hours",0);case r:return l(y+"Minutes",1);case n:return l(y+"Seconds",2);case e:return l(y+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(a,u){var c,h=$.p(a),f="set"+(this.$u?"UTC":""),d=(c={},c[i]=f+"Date",c.date=f+"Date",c[s]=f+"Month",c[o]=f+"FullYear",c[r]=f+"Hours",c[n]=f+"Minutes",c[e]=f+"Seconds",c[t]=f+"Milliseconds",c)[h],l=h===i?this.$D+(u-this.$W):u;if(h===s||h===o){var p=this.clone().set("date",1);p.$d[d](l),p.init(),this.$d=p.set("date",Math.min(this.$D,p.daysInMonth())).toDate()}else d&&this.$d[d](l);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[$.p(t)]()},d.add=function(t,u){var c,h=this;t=Number(t);var f=$.p(u),d=function(e){var n=v(h);return $.w(n.date(n.date()+Math.round(e*t)),h)};if(f===s)return this.set(s,this.$M+t);if(f===o)return this.set(o,this.$y+t);if(f===i)return d(1);if(f===a)return d(7);var l=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[f]||1,p=this.$d.getTime()+t*l;return $.w(p,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=$.z(this),i=this.$locale(),a=this.$H,s=this.$m,u=this.$M,o=i.weekdays,c=i.months,f=function(t,r,i,a){return t&&(t[r]||t(e,n))||i[r].substr(0,a)},d=function(t){return $.s(a%12||12,t,"0")},l=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:$.s(u+1,2,"0"),MMM:f(i.monthsShort,u,c,3),MMMM:c[u]||c(this,n),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:f(i.weekdaysMin,this.$W,o,2),ddd:f(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(a),HH:$.s(a,2,"0"),h:d(1),hh:d(2),a:l(a,s,!0),A:l(a,s,!1),m:String(s),mm:$.s(s,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:r};return n.replace(h,(function(t,e){return e||p[t]||r.replace(":","")}))},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,c,h){var f,d=$.p(c),l=v(t),p=6e4*(l.utcOffset()-this.utcOffset()),_=this-l,m=$.m(this,l);return m=(f={},f[o]=m/12,f[s]=m,f[u]=m/3,f[a]=(_-p)/6048e5,f[i]=(_-p)/864e5,f[r]=_/36e5,f[n]=_/6e4,f[e]=_/1e3,f)[d]||_,h?m:$.a(m)},d.daysInMonth=function(){return this.endOf(s).$D},d.$locale=function(){return _[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone();return n.$L=y(t,e,!0),n},d.clone=function(){return $.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},f}();return v.prototype=M.prototype,v.extend=function(t,e){return t(e,M,v),v},v.locale=y,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=_[p],v.Ls=_,v}()},O94r:function(t,e){var n;!function(){"use strict";function r(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var a=typeof n;if("string"===a||"number"===a)t.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&t.push(s)}else if("object"===a)for(var u in n)i.call(n,u)&&n[u]&&t.push(u)}}return t.join(" ")}var i={}.hasOwnProperty;t.exports?(r.default=r,t.exports=r):void 0===(n=function(){return r}.apply(e,[]))||(t.exports=n)}()},Vjl1:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"default",(function(){return i}));n("06n4");var r=n("oylA"),i=function(e){function n(){return e.apply(this,arguments)||this}var i,a;return a=e,(i=n).prototype=Object.create(a.prototype),i.prototype.constructor=i,i.__proto__=a,n.prototype.render=function(){return t("div",null,t("p",{class:"caf-demo-title"},"默认用法"),t(r.a,null),t(r.a,{defaultSelect:{start:"2019/10/20",end:"2019/11/2"}}))},n}(n("4dxh").Component)}.call(this,n("4dxh").h)},oylA:function(t,e,n){"use strict";(function(t){function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){return d.a.isDayjs(t)?t:"string"==typeof t||"number"==typeof t?d()(t):t?d()(t):d()()}function u(t,e){return t.isSame(e,"date")&&t.isSame(e,"year")&&t.isSame(e,"month")}var o=n("4dxh"),c=n("O94r"),h=n.n(c),f=n("BQ33"),d=n.n(f),l=function(e){function n(t){var n;a(i(n=e.call(this,t)||this),"prevMonth",(function(){n.setCurrent({month:n.state.current.month-1})})),a(i(n),"nextMonth",(function(){n.setCurrent({month:n.state.current.month+1})}));var s=t.defaultSelect,u=t.defaultCurrent,o=new Date,c={selection:o,current:{year:o.getFullYear(),month:o.getMonth()+1}};return s&&(c.selection=s),u&&(c.current=r({},c.current,u)),n.state=c,n}var o,c;c=e,(o=n).prototype=Object.create(c.prototype),o.prototype.constructor=o,o.__proto__=c;var f=n.prototype;return f.getCurrenSelect=function(){var t,e=this.state.selection;if("start"in e||"end"in e){var n=s(e.start);if("end"in e)t={start:n,end:s(e.end)};else t=n}else t=s(e);return t},f.setCurrent=function(t){this.setState({current:r({},this.state.current,t)})},f.renderMonthBar=function(e){var n=this.props,r=n.formatter,i=n.prefix,a=e.year(),s=e.month(),u=r&&"title"in r?r.title(a,s):t("h2",{className:i+"__header__date "},t("span",{className:i+"__header__date__month"},e.format("MMM")),t("span",{className:i+"__header__date__year"},e.format("YYYY")));return t("div",{className:i+"__header"},t("span",{className:i+"__header__btn "+i+"__header__btn--left",onClick:this.prevMonth}),u,t("span",{className:i+"__header__btn "+i+"__header__btn--right",onClick:this.nextMonth}))},f.renderWeekBar=function(){var e=this.props,n=e.formatter,r=e.prefix,i=["日","一","二","三","四","五","六"];return t("div",{className:r+"__weekbar"},new Array(7).join("-").split("-").map((function(e,a){var s;return t("span",{className:h()(r+"__weekbar__item",(s={},s[r+"__weekbar__item--rest"]=0===a||6===a,s))},n&&"week"in n?n.week[a]:i[a])})))},f.renderCalendar=function(e,n){var r,i,a,s=this.props,o=s.prefix,c=s.maxSelect,f=e.dateList,l=e.month,p=e.year,_=[],m=n.start||n,y=1!==c;"[object Object]"!==Object.prototype.toString.call(n)||d.a.isDayjs(n)?a=(i=n).add(c):(i=n.start,r=n.end,a=n.end,y=!0);for(var v=0,$=[],M=0,g=f.length;M<g;M++){var S=f[M],w={date:S.date(),weekday:S.day(),isToday:u(S,d()()),isCurrentMonth:S.month()===l&&S.year()===p,isEnd:r&&u(S,r),isStart:u(S,i),isInRange:S.isBefore(a)&&S.isAfter(i),isMulti:y};S.isSame(m)&&!v&&(v=Math.floor(M/7)),$.push(w),7===$.length&&(_.push($),$=[])}return t("div",{className:o+"__calendar"},_.map((function(e,n){var r;return t("div",{className:h()(o+"__calendar__week",(r={},r[o+"__calendar__week--cur"]=n===v,r)),key:l+"-"+n},e.map((function(e){var r;return t("div",{className:h()(o+"__date",(r={},r[o+"__date--today"]=e.isToday,r[o+"__date--other"]=!e.isCurrentMonth,r[o+"__date--selected"]=e.isStart&&!e.isMulti,r[o+"__date--start"]=e.isStart&&e.isMulti,r[o+"__date--end"]=e.isEnd&&e.isMulti,r[o+"__date--range"]=e.isInRange&&!e.isStart&&!e.isEnd&&e.isMulti,r)),key:l+"-"+n+"-"+e.date},t("div",{className:o+"__day"},t("span",{className:o+"__day__date"},e.date)))})))})))},f.renderMain=function(){var e=this.props.prefix,n=this.getCurrenSelect(),r=this.state.current,i=function(t){var e=[],n=t.startOf("month");e=(e=e.concat(function(t){var e=[],n=t.day();if(!n)return[];t=t.subtract(n+1,"days");for(var r=n;r>0;r-=1)t=t.add(1,"days"),e.push(t);return e}(n.clone()))).concat(function(t){for(var e=[],n=t.clone();t.month()===n.month();)e.push(n),n=n.add(1,"days");return e}(n.clone()));var r=t.endOf("month");return e=e.concat(function(t){var e=[],n=t.day();if(6===n)return[];for(var r=n;r<6;r+=1)t=t.add(1,"days"),e.push(t);return e}(r.clone())),{startDate:n,year:t.year(),month:t.month(),dateList:e}}(s(r.year+"/"+r.month+"/1")),a=this.renderMonthBar(i.startDate),u=this.renderWeekBar(),o=this.renderCalendar(i,n);return t("div",{className:e+"__main"},a,u,o)},f.render=function(e){var n=e.prefix,r=e.className,i=this.renderMain();return t("div",{className:h()(n,r)},i)},n}(o.Component);a(l,"defaultProps",{prefix:"caf-calendar",maxSelect:1,minSelect:0}),e.a=l}).call(this,n("4dxh").h)}}]);