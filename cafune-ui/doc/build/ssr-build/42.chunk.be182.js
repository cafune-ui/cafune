exports.ids = [42];
exports.modules = {

/***/ "HpTl":
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'preact'</span>;\n<span class=\"hljs-keyword\">import</span> { Pagination } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'cafune'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">Page</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Component</span> </span>{\n  state = {\n    <span class=\"hljs-attr\">pn</span>: <span class=\"hljs-number\">1</span>,\n    <span class=\"hljs-attr\">pages</span>: <span class=\"hljs-number\">3</span>\n  };\n  onChange = <span class=\"hljs-function\"><span class=\"hljs-params\">pn</span> =&gt;</span> {\n    <span class=\"hljs-keyword\">this</span>.setState({\n      pn\n    });\n  };\n  render({}, { pn, pages }) {\n    <span class=\"hljs-keyword\">return</span> (\n      <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"caf-demo-block\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Pagination</span> <span class=\"hljs-attr\">pn</span>=<span class=\"hljs-string\">{pn}</span> <span class=\"hljs-attr\">pages</span>=<span class=\"hljs-string\">{pages}</span> <span class=\"hljs-attr\">onChange</span>=<span class=\"hljs-string\">{this.onChange}</span> /&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    );\n  }\n}\n</span>"

/***/ })

};;
//# sourceMappingURL=42.chunk.be182.js.map