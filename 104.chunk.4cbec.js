(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{czrS:function(n){n.exports='<span class="token keyword">import</span> <span class="token punctuation">{</span> Tabs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'cafune\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'preact\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> TabPanel <span class="token operator">=</span> Tabs<span class="token punctuation">.</span>Panel<span class="token punctuation">;</span>\n<span class="token keyword">const</span> TabNav <span class="token operator">=</span> Tabs<span class="token punctuation">.</span>Nav<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> containerStyle <span class="token operator">=</span> <span class="token punctuation">{</span>\n  height<span class="token punctuation">:</span> <span class="token string">\'120px\'</span><span class="token punctuation">,</span>\n  textAlign<span class="token punctuation">:</span> <span class="token string">\'center\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> tabsData <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token string">\'label1\'</span><span class="token punctuation">,</span>\n    actived<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'标签一\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token string">\'label2\'</span><span class="token punctuation">,</span>\n    actived<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'标签二\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token string">\'label3\'</span><span class="token punctuation">,</span>\n    actived<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'标签三\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token string">\'label4\'</span><span class="token punctuation">,</span>\n    actived<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'标签四\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token string">\'label5\'</span><span class="token punctuation">,</span>\n    actived<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'标签五\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token string">\'label6\'</span><span class="token punctuation">,</span>\n    actived<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'标签六\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token string">\'label7\'</span><span class="token punctuation">,</span>\n    actived<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'标签七\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">class</span> <span class="token class-name">NormalTab</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    activeId<span class="token punctuation">:</span> <span class="token string">\'label1\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token parameter">id</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      activeId<span class="token punctuation">:</span> id\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> activeId <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>containerStyle<span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Tabs activeId<span class="token operator">=</span><span class="token punctuation">{</span>activeId<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>TabPanel label<span class="token operator">=</span><span class="token string">"标签一"</span> id<span class="token operator">=</span><span class="token string">"label1"</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-block"</span><span class="token operator">></span>内容一<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>TabPanel<span class="token operator">></span>\n          <span class="token operator">&lt;</span>TabPanel label<span class="token operator">=</span><span class="token string">"标签二"</span> id<span class="token operator">=</span><span class="token string">"label2"</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-block"</span><span class="token operator">></span>内容二<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>TabPanel<span class="token operator">></span>\n          <span class="token operator">&lt;</span>TabPanel label<span class="token operator">=</span><span class="token string">"标签三"</span> id<span class="token operator">=</span><span class="token string">"label3"</span> visable<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-block"</span><span class="token operator">></span>内容三<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>TabPanel<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Tabs<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">ContrastTab</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    activeId<span class="token punctuation">:</span> <span class="token string">\'label1\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token parameter">id</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      activeId<span class="token punctuation">:</span> id\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> activeId <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>containerStyle<span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Tabs activeId<span class="token operator">=</span><span class="token punctuation">{</span>activeId<span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"contrast"</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>TabPanel label<span class="token operator">=</span><span class="token string">"标签一"</span> id<span class="token operator">=</span><span class="token string">"label1"</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-block"</span><span class="token operator">></span>内容一<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>TabPanel<span class="token operator">></span>\n          <span class="token operator">&lt;</span>TabPanel label<span class="token operator">=</span><span class="token string">"标签二"</span> id<span class="token operator">=</span><span class="token string">"label2"</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-block"</span><span class="token operator">></span>内容二<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>TabPanel<span class="token operator">></span>\n          <span class="token operator">&lt;</span>TabPanel label<span class="token operator">=</span><span class="token string">"标签三"</span> id<span class="token operator">=</span><span class="token string">"label3"</span> visable<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-block"</span><span class="token operator">></span>内容三<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>TabPanel<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Tabs<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">RoundTab</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    activeId<span class="token punctuation">:</span> <span class="token string">\'label1\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token parameter">id</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      activeId<span class="token punctuation">:</span> id\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> activeId <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>containerStyle<span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Tabs activeId<span class="token operator">=</span><span class="token punctuation">{</span>activeId<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"round"</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>TabPanel label<span class="token operator">=</span><span class="token string">"标签一"</span> id<span class="token operator">=</span><span class="token string">"label1"</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-block"</span><span class="token operator">></span>内容一<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>TabPanel<span class="token operator">></span>\n          <span class="token operator">&lt;</span>TabPanel label<span class="token operator">=</span><span class="token string">"标签二"</span> id<span class="token operator">=</span><span class="token string">"label2"</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-block"</span><span class="token operator">></span>内容二<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>TabPanel<span class="token operator">></span>\n          <span class="token operator">&lt;</span>TabPanel label<span class="token operator">=</span><span class="token string">"标签三"</span> id<span class="token operator">=</span><span class="token string">"label3"</span> visable<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-block"</span><span class="token operator">></span>内容三<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>TabPanel<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Tabs<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">TabsComp</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    tabsData\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">customChange</span> <span class="token operator">=</span> <span class="token parameter">id</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> tabsData <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    tabsData<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>actived <span class="token operator">=</span> item<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      tabsData\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> tabsData <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-block"</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-title"</span><span class="token operator">></span>默认类型<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>NormalTab <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-title"</span><span class="token operator">></span>对比类型<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>ContrastTab <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-title"</span><span class="token operator">></span>圆角类型<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>RoundTab <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-title"</span><span class="token operator">></span>单独使用Nav<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>TabNav\n          tabsData<span class="token operator">=</span><span class="token punctuation">{</span>tabsData<span class="token punctuation">}</span>\n          activeId<span class="token operator">=</span><span class="token string">"label2"</span>\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>customChange<span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-intro"</span><span class="token operator">></span>\n          当需要隐藏掉某个tab但里面涉及的功能需要保留时，使用visable将该tab标签隐藏掉，需要配合activeId\n          更改\n        <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n'}}]);