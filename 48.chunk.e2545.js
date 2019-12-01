(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{RbId:function(t){t.exports='module.exports = "<h1>Calendar - 日历</h1> <h2>引入</h2> <pre class=language-jsx><code class=language-jsx><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> Calendar <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\'cafune\'</span><span class=\\"token punctuation\\">;</span>\\n</code></pre> <h2>配置项</h2> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> <th>备选值</th> <th>是否必须</th> </tr> </thead> <tbody> <tr> <td>prefix</td> <td>自定义类名</td> <td>string</td> <td><code>\'caf-calendar\'</code></td> <td>-</td> <td>❌</td> </tr> <tr> <td>defaultSelect</td> <td>初始选中时间。字符串类型时需以\'年/月/日\'的方式传入，number 类型是为毫秒数，默认为今天</td> <td>defaultSelect-options</td> <td>-</td> <td>-</td> <td>❌</td> </tr> <tr> <td>maxSelect</td> <td>最多可选数目</td> <td>number</td> <td><code>0</code></td> <td>-</td> <td>❌</td> </tr> <tr> <td>minSelect</td> <td>最少可选数目</td> <td>number</td> <td><code>0</code></td> <td>-</td> <td>❌</td> </tr> <tr> <td>onDateSelect</td> <td>日期改变回调函数，<code>maxSelect</code>大于1时回调为数组</td> <td>(curDate: IDataRange) =&gt; void</td> <td>-</td> <td>-</td> <td>❌</td> </tr> <tr> <td>formatter</td> <td>日期格式化函数，<code>type</code> 为<code>year</code>, <code>month</code>, <code>week</code></td> <td>formatter-options</td> <td>-</td> <td>-</td> <td>❌</td> </tr> </tbody> </table> <h3>defaultSelect-options 说明</h3> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>备选项</th> <th>是否必须</th> </tr> </thead> <tbody> <tr> <td>start</td> <td>-</td> <td>string / number / Date / Dayjs}</td> <td>-</td> <td>✅</td> </tr> <tr> <td>end</td> <td>-</td> <td>string / number / Date / Dayjs}</td> <td>-</td> <td>❌</td> </tr> </tbody> </table> <h3>formatter-options 说明</h3> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>备选项</th> <th>是否必须</th> </tr> </thead> <tbody> <tr> <td>year</td> <td>-</td> <td>(value: number) =&gt; string | number}</td> <td>-</td> <td>❌</td> </tr> <tr> <td>month</td> <td>-</td> <td>(value: number) =&gt; string | number}</td> <td>-</td> <td>❌</td> </tr> <tr> <td>title</td> <td>-</td> <td>(year: number, month: number) =&gt; string | VNode | HTMLElement}</td> <td>-</td> <td>❌</td> </tr> <tr> <td>week</td> <td>-</td> <td>(value: number) =&gt; string | number}</td> <td>-</td> <td>❌</td> </tr> </tbody> </table> ";'}}]);