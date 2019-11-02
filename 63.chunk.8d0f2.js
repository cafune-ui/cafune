(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{hIEC:function(t){t.exports='module.exports = "<h1>TabBar - 标签栏</h1> <h2>引入</h2> <pre class=language-jsx><code class=language-jsx><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> TabBar <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\'cafune\'</span><span class=\\"token punctuation\\">;</span>\\n</code></pre> <h2>配置项</h2> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> <th>备选值</th> <th>是否必须</th> </tr> </thead> <tbody> <tr> <td>prefix</td> <td>自定义前缀</td> <td>string</td> <td><code>\'caf-tabbar\'</code></td> <td>-</td> <td>❌</td> </tr> <tr> <td>className</td> <td>自定义类名</td> <td>string</td> <td>-</td> <td>-</td> <td>❌</td> </tr> <tr> <td>children</td> <td>子元素</td> <td>any</td> <td>-</td> <td>-</td> <td>❌</td> </tr> <tr> <td>fixed</td> <td>是否使用 <code>fixed</code> 定位</td> <td>boolean</td> <td><code>true</code></td> <td>-</td> <td>❌</td> </tr> <tr> <td>activedId</td> <td>当前激活的id</td> <td>string/number</td> <td>-</td> <td>-</td> <td>✅</td> </tr> <tr> <td>activedColor</td> <td>激活时文字颜色</td> <td>string</td> <td><code>\'#3f77f6\'</code></td> <td>-</td> <td>❌</td> </tr> <tr> <td>onChange</td> <td>切换时回调</td> <td>(activedId) =&gt; void</td> <td>-</td> <td>-</td> <td>❌</td> </tr> </tbody> </table> <h3>TabBarItem 配置项</h3> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> <th>备选值</th> <th>是否必须</th> </tr> </thead> <tbody> <tr> <td>prefix</td> <td>自定义类名</td> <td>string</td> <td><code>\'caf-tabbar-item\'</code></td> <td>-</td> <td>❌</td> </tr> <tr> <td>text</td> <td>展示文字</td> <td>string</td> <td>-</td> <td>-</td> <td>✅</td> </tr> <tr> <td>id</td> <td>tab唯一标示</td> <td>number/string</td> <td>-</td> <td>-</td> <td>✅</td> </tr> <tr> <td>icons</td> <td>图标集</td> <td>IItemIcon</td> <td>-</td> <td>-</td> <td>❌</td> </tr> <tr> <td>disabled</td> <td>是否禁用</td> <td>boolean</td> <td><code>false</code></td> <td>-</td> <td>❌</td> </tr> </tbody> </table> ";'}}]);