(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{L40Y:function(n){n.exports='module.exports = "<h1>Toast - 轻提示</h1> <h2>引入</h2> <pre class=language-jsx><code class=language-jsx><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> Toast <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\'cafune\'</span><span class=\\"token punctuation\\">;</span>\\n</code></pre> <h2>示例</h2> <pre class=language-jsx><code class=language-jsx>Toast<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">show</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span> content<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\'some msg\'</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nToast<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">success</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span> content<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\'some msg\'</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nToast<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">error</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span> content<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\'some msg\'</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">//...</span>\\n<span class=\\"token keyword\\">const</span> loadingToast <span class=\\"token operator\\">=</span> Toast<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">loading</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span> content<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\'some msg\'</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nToast<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setMsg</span><span class=\\"token punctuation\\">(</span>loadingToast<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\'toast msg changed\'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nToast<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">hide</span><span class=\\"token punctuation\\">(</span>loadingToast<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre> <h2>配置项</h2> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> <th>备选值</th> <th>是否必须</th> </tr> </thead> <tbody> <tr> <td>prefix</td> <td>自定义前缀</td> <td>string</td> <td><code>\'caf-toast\'</code></td> <td>-</td> <td>❌</td> </tr> <tr> <td>content</td> <td>提示内容</td> <td>string / HTMLElement / VNode</td> <td>-</td> <td>-</td> <td>✅</td> </tr> <tr> <td>duration</td> <td>提示时长(ms)，默认为2000ms</td> <td>number</td> <td>-</td> <td>-</td> <td>❌</td> </tr> <tr> <td>onClose</td> <td>消失时回调函数</td> <td>unknown / undefined / null</td> <td>-</td> <td>-</td> <td>❌</td> </tr> <tr> <td>type</td> <td>toast 类型</td> <td>string</td> <td>-</td> <td><code>\'normal\'</code>,<code>\'success\'</code>,<code>\'error\'</code>,<code>\'loading\'</code></td> <td>❌</td> </tr> <tr> <td>icon</td> <td>自定义图标</td> <td>string / signature</td> <td>-</td> <td>-</td> <td>❌</td> </tr> <tr> <td>multiple</td> <td>是否支持同时多个</td> <td>boolean</td> <td><code>false</code></td> <td>-</td> <td>❌</td> </tr> </tbody> </table> ";'}}]);