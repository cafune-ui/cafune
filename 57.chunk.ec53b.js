webpackJsonp([57],{iI7O:function(s){s.exports='module.exports = "<h1>安装</h1> <pre class=language-bash><code class=language-bash>$ <span class=\\"token function\\">npm</span> <span class=\\"token function\\">install</span> cafune-ui --save\\n</code></pre> <hr/> <h1>引入</h1> <h2>正常引入</h2> <h3>组件引入</h3> <pre class=language-jsx><code class=language-jsx><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> Button <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\'cafune\'</span><span class=\\"token punctuation\\">;</span>\\n</code></pre> <h3>样式引入</h3> <ol> <li> <p>引入全部样式</p> <pre class=language-jsx><code class=language-jsx><span class=\\"token keyword\\">import</span> <span class=\\"token string\\">\'cafune/style\'</span><span class=\\"token punctuation\\">;</span>\\n</code></pre> </li> <li> <p>引入单个样式</p> <pre class=language-jsx><code class=language-jsx><span class=\\"token keyword\\">import</span> <span class=\\"token string\\">\'cafune/style/button\'</span>\\n</code></pre> </li> </ol> <h2>按需加载</h2> <p><code>cafune</code> 支持使用<code>babel-plugin-import</code> 来进行按需引入组件的方式</p> <pre class=language-bash><code class=language-bash>$ <span class=\\"token function\\">npm</span> <span class=\\"token function\\">install</span> babel-plugin-import --save-dev\\n</code></pre> <p>在.babelrc中配置</p> <pre class=language-js><code class=language-js><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token string\\">\\"plugins\\"</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span>\\n    <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"import\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span> libraryName<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"cafune\\"</span><span class=\\"token punctuation\\">,</span> style<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"css\\"</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">]</span> <span class=\\"token comment\\">// `style: true` 会加载 less 文件</span>\\n  <span class=\\"token punctuation\\">]</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre> <p>然后只需引入组件即可，无需再引入样式</p> <pre class=language-jsx><code class=language-jsx><span class=\\"token comment\\">// babel-plugin-import 会帮助你加载 JS 和 CSS</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> Button <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\'cafune\'</span><span class=\\"token punctuation\\">;</span>\\n</code></pre> ";'}});