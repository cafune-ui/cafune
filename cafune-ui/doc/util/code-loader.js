const hljs = require('highlight.js');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  // const highlightjs = hljs.highlight('javascript', source, true).value;
  const code = hljs.highlight('html', source, true).value;
  return `module.exports = ${JSON.stringify(code)}`;
};
