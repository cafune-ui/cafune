webpackJsonp([44],{awOW:function(s){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'preact\'</span>;\n<span class="hljs-keyword">import</span> { NavBar } <span class="hljs-keyword">from</span> <span class="hljs-string">\'cafune\'</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'./style\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Page</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Component</span> </span>{\n  render() {\n    <span class="hljs-keyword">return</span> (\n      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-page"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">NavBar</span>\n          <span class="hljs-attr">isFixed</span>\n          <span class="hljs-attr">left</span>=<span class="hljs-string">{{</span>\n            <span class="hljs-attr">icon:</span> \'<span class="hljs-attr">wrong</span>\',\n            <span class="hljs-attr">text:</span> \'返回\',\n            <span class="hljs-attr">clickHandler</span>() {\n              <span class="hljs-attr">console.log</span>(\'返回\');\n            }\n          }}\n          <span class="hljs-attr">rights</span>=<span class="hljs-string">{{</span>\n            <span class="hljs-attr">icon:</span> \'<span class="hljs-attr">search</span>\',\n            <span class="hljs-attr">text:</span> \'搜索\',\n            <span class="hljs-attr">clickHandler</span>() {\n              <span class="hljs-attr">console.log</span>(\'搜索\');\n            }\n          }}\n        &gt;</span>\n          标题\n        <span class="hljs-tag">&lt;/<span class="hljs-name">NavBar</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">NavBar</span>\n          <span class="hljs-attr">left</span>=<span class="hljs-string">{{</span>\n            <span class="hljs-attr">icon:</span> \'<span class="hljs-attr">wrong</span>\',\n            <span class="hljs-attr">text:</span> \'返回\',\n            <span class="hljs-attr">clickHandler</span>() {\n              <span class="hljs-attr">console.log</span>(\'返回\');\n            }\n          }}\n          <span class="hljs-attr">rights</span>=<span class="hljs-string">{[</span>\n            {\n              <span class="hljs-attr">text:</span> \'搜索\',\n              <span class="hljs-attr">badge:</span> \'<span class="hljs-attr">22</span>\',\n              <span class="hljs-attr">clickHandler</span>() {\n                <span class="hljs-attr">console.log</span>(\'搜索\');\n              }\n            },\n            {\n              <span class="hljs-attr">text:</span> \'搜索\',\n              <span class="hljs-attr">clickHandler</span>() {\n                <span class="hljs-attr">console.log</span>(\'搜索\');\n              }\n            },\n            {\n              <span class="hljs-attr">icon:</span> \'<span class="hljs-attr">img</span>\',\n              <span class="hljs-attr">text:</span> \'图片\',\n              <span class="hljs-attr">badge:</span> <span class="hljs-attr">true</span>,\n              <span class="hljs-attr">clickHandler</span>() {\n                <span class="hljs-attr">console.log</span>(\'图标\');\n              }\n            }\n          ]}\n        &gt;</span>\n          标题\n        <span class="hljs-tag">&lt;/<span class="hljs-name">NavBar</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n    );\n  }\n}\n'}});