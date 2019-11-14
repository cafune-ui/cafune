(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{qpR5:function(n){n.exports='<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'preact\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'cafune\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Page</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    pn<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    pages<span class="token punctuation">:</span> <span class="token number">5</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token parameter">pn</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      pn\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> pn<span class="token punctuation">,</span> pages <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-block"</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-title"</span><span class="token operator">></span>自定义类型<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Pagination\n          simple\n          current<span class="token operator">=</span><span class="token punctuation">{</span>pn<span class="token punctuation">}</span>\n          total<span class="token operator">=</span><span class="token punctuation">{</span>pages<span class="token punctuation">}</span>\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Pagination\n          mode<span class="token operator">=</span><span class="token string">"number"</span>\n          current<span class="token operator">=</span><span class="token punctuation">{</span>pn<span class="token punctuation">}</span>\n          total<span class="token operator">=</span><span class="token punctuation">{</span>pages<span class="token punctuation">}</span>\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Pagination\n          mode<span class="token operator">=</span><span class="token string">"pointer"</span>\n          current<span class="token operator">=</span><span class="token punctuation">{</span>pn<span class="token punctuation">}</span>\n          total<span class="token operator">=</span><span class="token punctuation">{</span>pages<span class="token punctuation">}</span>\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-title"</span><span class="token operator">></span>自定义按钮文字<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Pagination\n          current<span class="token operator">=</span><span class="token punctuation">{</span>pn<span class="token punctuation">}</span>\n          total<span class="token operator">=</span><span class="token punctuation">{</span>pages<span class="token punctuation">}</span>\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span>\n          btnText<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> prev<span class="token punctuation">:</span> <span class="token string">\'prev\'</span><span class="token punctuation">,</span> next<span class="token punctuation">:</span> <span class="token string">\'next\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-title"</span><span class="token operator">></span>自定义按钮图标<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Pagination\n          current<span class="token operator">=</span><span class="token punctuation">{</span>pn<span class="token punctuation">}</span>\n          total<span class="token operator">=</span><span class="token punctuation">{</span>pages<span class="token punctuation">}</span>\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span>\n          btnIcon<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n            prev<span class="token punctuation">:</span> <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'arrow-left\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            next<span class="token punctuation">:</span> <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'arrow-right\'</span> <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-title"</span><span class="token operator">></span>自定义步进数<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Pagination\n          current<span class="token operator">=</span><span class="token punctuation">{</span>pn<span class="token punctuation">}</span>\n          total<span class="token operator">=</span><span class="token punctuation">{</span>pages<span class="token punctuation">}</span>\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span>\n          step<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n'}}]);