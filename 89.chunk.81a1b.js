(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{wK6K:function(n){n.exports='<span class="token keyword">import</span> <span class="token punctuation">{</span> Modal<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'cafune\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'preact\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">ScrollerComp</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  showModal <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    type <span class="token operator">=</span> <span class="token string">\'confirm\'</span><span class="token punctuation">,</span>\n    title <span class="token operator">=</span> <span class="token string">\'标题\'</span><span class="token punctuation">,</span>\n    message <span class="token operator">=</span> <span class="token string">\'模态框内容\'</span><span class="token punctuation">,</span>\n    beforeClose <span class="token operator">=</span> <span class="token keyword">null</span>\n  <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      Modal<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        title<span class="token punctuation">,</span>\n        message<span class="token punctuation">,</span>\n        beforeClose\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">beforeClose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">action<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>action <span class="token operator">===</span> <span class="token string">\'confirm\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'confirm close in 2 sec\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>action <span class="token operator">===</span> <span class="token string">\'cancel\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">cancel won\'t close until click confirm</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token function">done</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-block"</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-title"</span><span class="token operator">></span>modal 类型<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-buttons"</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>确认模态框<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n          <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'alert\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>\n            警告模态框\n          <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-title"</span><span class="token operator">></span>modal 回调<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Button\n          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            beforeClose<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>beforeClose\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n          带回调模态框\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n\n        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-intro"</span><span class="token operator">></span>\n          在回调中返回 <span class="token operator">&amp;</span>nbsp<span class="token punctuation">;</span><span class="token operator">&lt;</span>b<span class="token operator">></span><span class="token boolean">false</span><span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span>\n          <span class="token operator">&amp;</span>nbsp<span class="token punctuation">;</span>会让模态框不关闭，而不返回或返回<span class="token operator">&amp;</span>nbsp<span class="token punctuation">;</span>\n          <span class="token operator">&lt;</span>b<span class="token operator">></span><span class="token boolean">true</span><span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span><span class="token operator">&amp;</span>nbsp<span class="token punctuation">;</span>则会关闭\n        <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n'}}]);