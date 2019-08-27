exports.ids = [46];
exports.modules = {

/***/ "bIEm":
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Lazyload } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'cafune'</span>;\n<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'preact'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./style'</span>;\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">LazyLoadComp</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Component</span> </span>{\n  render() {\n    <span class=\"hljs-keyword\">return</span> (\n      <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Lazyload</span> <span class=\"hljs-attr\">imgClass</span>=<span class=\"hljs-string\">\"lazy\"</span>&gt;</span>\n        {Array(...Array(20)).map((_, ind) =&gt; (\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"caf-demo-image\"</span> <span class=\"hljs-attr\">key</span>=<span class=\"hljs-string\">{ind}</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">img</span>\n              <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">\"https://via.placeholder.com/200x150.png?text=playholder\"</span>\n              <span class=\"hljs-attr\">data-src</span>=<span class=\"hljs-string\">\"https://via.placeholder.com/200x150.png?text=original\"</span>\n              <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"lazy\"</span>\n            /&gt;</span>\n          <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n        ))}\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Lazyload</span>&gt;</span>\n    );\n  }\n}\n</span>"

/***/ })

};;
//# sourceMappingURL=46.chunk.9187d.js.map