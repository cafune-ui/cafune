webpackJsonp([50],{"3DZj":function(s){s.exports='<span class="hljs-keyword">import</span> { Collapse } <span class="hljs-keyword">from</span> <span class="hljs-string">\'cafune\'</span>;\n<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'preact\'</span>;\n<span class="hljs-keyword">const</span> CollapseItem = Collapse.Item;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">CollapseCom</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Component</span> </span>{\n  state = {\n    <span class="hljs-attr">actives</span>: <span class="hljs-string">\'basic\'</span>,\n    <span class="hljs-attr">activeCol</span>: []\n  };\n  onChange = <span class="hljs-function"><span class="hljs-params">name</span> =&gt;</span> {\n    <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-params">actives</span> =&gt;</span> {\n      <span class="hljs-keyword">this</span>.setState({\n        [name]: actives\n      });\n    };\n  };\n  render({}, { actives, activeCol }) {\n    <span class="hljs-keyword">return</span> (\n      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">""</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>默认模式<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Collapse</span> <span class="hljs-attr">actives</span>=<span class="hljs-string">{activeCol}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{this.onChange(</span>\'<span class="hljs-attr">activeCol</span>\')}&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"基础组件"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"basic"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding: 15px"</span>&gt;</span>默认开启<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"展示组件"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"display"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding: 15px"</span>&gt;</span>默认关闭<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Collapse</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>手风车效果（只开一个）<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Collapse</span> <span class="hljs-attr">actives</span>=<span class="hljs-string">{actives}</span> <span class="hljs-attr">accordion</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"基础组件"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"basic"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding: 15px"</span>&gt;</span>默认开启内容<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"展示组件"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"display"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding: 15px"</span>&gt;</span>默认关闭<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"展示组件(禁用)"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"disabled"</span> <span class="hljs-attr">disabled</span>&gt;</span>\n            默认关闭\n          <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Collapse</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n    );\n  }\n}\n'}});