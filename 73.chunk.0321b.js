(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{swPt:function(n){n.exports='<span class="token keyword">import</span> <span class="token punctuation">{</span> Lazyload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'cafune\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'preact\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./style\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">LazyLoadComp</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>Lazyload imgClass<span class="token operator">=</span><span class="token string">"lazy"</span><span class="token operator">></span>\n        <span class="token punctuation">{</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> ind</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-image"</span> key<span class="token operator">=</span><span class="token punctuation">{</span>ind<span class="token punctuation">}</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>img\n              src<span class="token operator">=</span><span class="token string">"https://via.placeholder.com/200x150.png?text=playholder"</span>\n              data<span class="token operator">-</span>src<span class="token operator">=</span><span class="token string">"https://via.placeholder.com/200x150.png?text=original"</span>\n              <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"lazy"</span>\n            <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>Lazyload<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n'}}]);