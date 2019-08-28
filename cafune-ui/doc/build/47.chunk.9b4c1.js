webpackJsonp([47],{WaTl:function(s){s.exports='<span class="hljs-keyword">import</span> { Layout } <span class="hljs-keyword">from</span> <span class="hljs-string">\'cafune\'</span>;\n<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'preact\'</span>;\n<span class="hljs-keyword">const</span> { Item } = Layout;\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'./style.scss\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">LayoutComp</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Component</span> </span>{\n  render() {\n    <span class="hljs-keyword">return</span> (\n      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-block"</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-title"</span>&gt;</span>正常使用<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"7"</span> <span class="hljs-attr">offset</span>=<span class="hljs-string">"2"</span>&gt;</span>\n              col: 7, offset: 3\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"8"</span>&gt;</span>col: 8<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-block"</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-title"</span>&gt;</span>间距<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">gutter</span>=<span class="hljs-string">"20"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span>&gt;</span>col: 8, gutter: 20<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span>&gt;</span>col: 8, gutter: 20<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span>&gt;</span>col: 8, gutter: 20<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">gutter</span>=<span class="hljs-string">"8px"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span>&gt;</span>col: 8, gutter: 8px<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span>&gt;</span>col: 8, gutter: 8px<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span>&gt;</span>col: 8, gutter: 8px<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-block"</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-title"</span>&gt;</span>\n            flex 方向\n            <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-title-addition"</span>&gt;</span>\n              依次为<span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>row<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>row-reverse<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>column<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>column-reverse<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">"row"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"4"</span>&gt;</span>col: 4<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"5"</span>&gt;</span>col: 5<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">"row-reverse"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"4"</span>&gt;</span>col: 4<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"5"</span>&gt;</span>col: 5<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">"column"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"4"</span>&gt;</span>col: 4<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"5"</span>&gt;</span>col: 5<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">"column-reverse"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"4"</span>&gt;</span>col: 4<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"5"</span>&gt;</span>col: 5<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-block"</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-title"</span>&gt;</span>\n            flex 换行\n            <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-title-addition"</span>&gt;</span>\n              依次为<span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>nowrap<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>wrap<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>wrap-reverse<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">wrap</span>=<span class="hljs-string">"nowrap"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"8"</span>&gt;</span>col: 8<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"8"</span>&gt;</span>col: 8<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"10"</span>&gt;</span>col: 10<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">wrap</span>=<span class="hljs-string">"wrap"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"8"</span>&gt;</span>col: 8<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"8"</span>&gt;</span>col: 8<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"10"</span>&gt;</span>col: 10<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">wrap</span>=<span class="hljs-string">"wrap-reverse"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"8"</span>&gt;</span>col: 8<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"8"</span>&gt;</span>col: 8<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"10"</span>&gt;</span>col: 10<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-block"</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-title"</span>&gt;</span>\n            flex 主轴对齐\n            <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-title-addition"</span>&gt;</span>\n              依次为<span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>start<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>end<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>center<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>between<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>around<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">"start"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">"end"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">"center"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">"between"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">"around"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"3"</span>&gt;</span>col: 3<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-block"</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-title"</span>&gt;</span>\n            flex 交叉轴对齐\n            <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-title-addition"</span>&gt;</span>\n              依次为<span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>start<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>center<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>end<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>baseline<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>stretch<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-flexblock"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"start"</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">"column"</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"15"</span>&gt;</span>col: 15<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"10"</span>&gt;</span>col: 10<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"8"</span>&gt;</span>col: 8<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-flexblock"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"center"</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">"column"</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"15"</span>&gt;</span>col: 15<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"10"</span>&gt;</span>col: 10<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"8"</span>&gt;</span>col: 8<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-flexblock"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"end"</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">"column"</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"15"</span>&gt;</span>col: 15<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"10"</span>&gt;</span>col: 10<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"8"</span>&gt;</span>col: 8<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-flexblock"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"baseline"</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">"column"</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"15"</span>&gt;</span>col: 15<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"10"</span>&gt;</span>col: 10<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"8"</span>&gt;</span>col: 8<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-flexblock"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"stretch"</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">"column"</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"15"</span>&gt;</span>col: 15<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"10"</span>&gt;</span>col: 10<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"8"</span>&gt;</span>col: 8<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-block"</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-title"</span>&gt;</span>\n            flex 交叉轴对齐\n            <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-title-addition"</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">"column"</span>&gt;</span>\n              依次为<span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>start<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>center<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>end<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>baseline<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>stretch<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-flexblock"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">alignContent</span>=<span class="hljs-string">"start"</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"15"</span>&gt;</span>col: 15<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"10"</span>&gt;</span>col: 10<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"8"</span>&gt;</span>col: 8<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-flexblock"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">alignContent</span>=<span class="hljs-string">"center"</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"15"</span>&gt;</span>col: 15<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"10"</span>&gt;</span>col: 10<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"8"</span>&gt;</span>col: 8<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-flexblock"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">alignContent</span>=<span class="hljs-string">"end"</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"15"</span>&gt;</span>col: 15<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"10"</span>&gt;</span>col: 10<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"8"</span>&gt;</span>col: 8<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-flexblock"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">alignContent</span>=<span class="hljs-string">"between"</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"15"</span>&gt;</span>col: 15<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"10"</span>&gt;</span>col: 10<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"8"</span>&gt;</span>col: 8<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-flexblock"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">alignContent</span>=<span class="hljs-string">"around"</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"15"</span>&gt;</span>col: 15<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"10"</span>&gt;</span>col: 10<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"8"</span>&gt;</span>col: 8<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-flexblock"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">alignContent</span>=<span class="hljs-string">"stretch"</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"15"</span>&gt;</span>col: 15<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"10"</span>&gt;</span>col: 10<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">col</span>=<span class="hljs-string">"8"</span>&gt;</span>col: 8<span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n    );\n  }\n}\n'}});