(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"/5Lq":function(n){n.exports='<span class="token keyword">import</span> <span class="token punctuation">{</span> ActionBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'cafune\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'preact\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">ActionBarComp</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">"height: 100vh;"</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>ActionBar\n          descContent<span class="token operator">=</span><span class="token string">"描述文字"</span>\n          btnContent<span class="token operator">=</span><span class="token string">"按钮文字"</span>\n          additionMsg<span class="token operator">=</span><span class="token string">"附加文字"</span>\n          handleClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n'}}]);