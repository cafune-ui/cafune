exports.ids = [48];
exports.modules = {

/***/ "4lFF":
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Grid, Icon } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'cafune'</span>;\n<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'preact'</span>;\n<span class=\"hljs-keyword\">const</span> { Item } = Grid;\n<span class=\"hljs-keyword\">import</span> IconList <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'../icon/list'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">GridComp</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Component</span> </span>{\n  render() {\n    <span class=\"hljs-keyword\">return</span> (\n      <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Grid</span> <span class=\"hljs-attr\">square</span>=<span class=\"hljs-string\">{false}</span>&gt;</span>\n          {IconList.map(item =&gt; (\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Item</span> <span class=\"hljs-attr\">key</span>=<span class=\"hljs-string\">{item}</span>&gt;</span>\n              <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Icon</span> <span class=\"hljs-attr\">icon</span>=<span class=\"hljs-string\">{item}</span> /&gt;</span>\n              <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>{item}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Item</span>&gt;</span>\n          ))}\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Grid</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    );\n  }\n}\n</span>"

/***/ })

};;
//# sourceMappingURL=48.chunk.4100c.js.map